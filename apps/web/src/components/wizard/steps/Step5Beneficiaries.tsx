'use client'

import { Input } from '@/components/ui/form-elements'
import { useWizardStore } from '@/store/useWizardStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, ArrowLeft, ArrowRight, Heart, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const beneficiarySchema = z.object({
  name: z.string().min(3, 'Nome é obrigatório'),
  cpf: z.string().optional(),
  relationship: z.string().min(2, 'Parentesco é obrigatório'),
  share: z.coerce.number().min(1, 'Mínimo 1%').max(100, 'Máximo 100%'),
})

type BeneficiaryValues = z.infer<typeof beneficiarySchema>

export function Step5Beneficiaries() {
  const { beneficiaries, addBeneficiary, removeBeneficiary, nextStep, prevStep } = useWizardStore()
  const [isAdding, setIsAdding] = useState(beneficiaries.length === 0)

  const totalShare = beneficiaries.reduce((sum, b) => sum + b.share, 0)
  const isOver100 = totalShare > 100

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BeneficiaryValues>({
    resolver: zodResolver(beneficiarySchema),
    defaultValues: {
      share: 0,
    },
  })

  const onAddBeneficiary = (data: BeneficiaryValues) => {
    addBeneficiary(data)
    setIsAdding(false)
    reset()
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-xl">
        <h2 className="text-[26px] leading-[34px] font-bold text-neutral-dark mb-sm">
          Beneficiários
        </h2>
        <p className="text-neutral-medium text-[15px]">
          Defina quem receberá seus bens e em qual proporção.
        </p>
      </div>

      <div className="flex-1 space-y-lg">
        {/* Total Share Summary */}
        <div
          className={`p-lg rounded-card border flex items-center justify-between ${isOver100
              ? 'bg-error-red/5 border-error-red/20 text-error-red'
              : 'bg-brand-pale/30 border-brand-primary/10 text-brand-primary'
            }`}
        >
          <div className="flex items-center gap-sm font-semibold">
            <AlertCircle className="w-5 h-5" />
            Total Distribuído: {totalShare}%
          </div>
          {totalShare < 100 && (
            <span className="text-[13px] opacity-80">
              Restam {100 - totalShare}% para distribuir
            </span>
          )}
        </div>

        {beneficiaries.map((b) => (
          <div
            key={b.id}
            className="flex items-center gap-lg p-lg bg-background-subtle rounded-card border border-neutral-light/30 group"
          >
            <div className="w-12 h-12 bg-background rounded-badge flex items-center justify-center text-brand-primary shadow-sm border border-brand-pale">
              <Heart className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-bold text-neutral-dark truncate">{b.name}</p>
              <p className="text-[13px] text-neutral-medium">
                {b.relationship} • {b.share}% do patrimônio total
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeBeneficiary(b.id)}
              className="p-sm text-neutral-medium hover:text-error-red transition-colors opacity-0 group-hover:opacity-100"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        {isAdding ? (
          <form
            onSubmit={handleSubmit(onAddBeneficiary)}
            className="p-xl bg-background border-2 border-dashed border-neutral-light rounded-card space-y-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <Input
                label="Nome do Beneficiário"
                placeholder="Nome completo"
                error={errors.name?.message}
                {...register('name')}
                className="md:col-span-2"
              />

              <Input
                label="Parentesco / Relação"
                placeholder="Ex: Filho(a), Cônjuge, Amigo..."
                error={errors.relationship?.message}
                {...register('relationship')}
              />

              <Input
                label="Porcentagem (%)"
                type="number"
                placeholder="0"
                error={errors.share?.message}
                {...register('share')}
              />

              <Input
                label="CPF (Opcional)"
                placeholder="000.000.000-00"
                error={errors.cpf?.message}
                {...register('cpf')}
                className="md:col-span-2"
              />
            </div>

            <div className="flex justify-end gap-md">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="btn-secondary h-[44px] !px-lg !text-[14px]"
              >
                Cancelar
              </button>
              <button type="submit" className="btn-primary h-[44px] !px-lg !text-[14px]">
                Adicionar Beneficiário
              </button>
            </div>
          </form>
        ) : (
          <button
            type="button"
            onClick={() => setIsAdding(true)}
            className="w-full py-xl border-2 border-dashed border-neutral-light rounded-card flex flex-col items-center gap-sm text-neutral-medium hover:border-brand-primary hover:text-brand-primary transition-all group"
          >
            <div className="w-10 h-10 bg-background-subtle rounded-badge flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6" />
            </div>
            <span className="font-semibold text-sm">Adicionar Novo Beneficiário</span>
          </button>
        )}
      </div>

      <div className="pt-2xl border-t border-neutral-light/20 flex justify-between items-center mt-xl">
        <button
          type="button"
          onClick={prevStep}
          className="flex items-center gap-sm text-neutral-medium font-semibold hover:text-neutral-dark transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Anterior
        </button>

        <button
          type="button"
          onClick={nextStep}
          disabled={isOver100 || beneficiaries.length === 0}
          className={`btn-primary !w-auto min-w-[200px] ${isOver100 || beneficiaries.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Próximo Passo
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
