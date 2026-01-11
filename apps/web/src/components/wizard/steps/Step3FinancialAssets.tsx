'use client'

import { Input, Select } from '@/components/ui/form-elements'
import { useWizardStore } from '@/store/useWizardStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight, Landmark, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const financialSchema = z.object({
  bank: z.string().min(2, 'Nome do banco é obrigatório'),
  type: z.enum(['CORRENTE', 'POUPANCA', 'INVESTIMENTO']),
  description: z.string().min(3, 'Descreva brevemente para identificação'),
})

type FinancialValues = z.infer<typeof financialSchema>

export function Step3FinancialAssets() {
  const { assets, addFinancial, removeFinancial, nextStep, prevStep } = useWizardStore()
  const [isAdding, setIsAdding] = useState(assets.financial.length === 0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FinancialValues>({
    resolver: zodResolver(financialSchema),
    defaultValues: {
      type: 'CORRENTE',
    },
  })

  const onAddAsset = (data: FinancialValues) => {
    addFinancial(data)
    setIsAdding(false)
    reset()
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-xl">
        <h2 className="text-[26px] leading-[34px] font-bold text-neutral-dark mb-sm">
          Patrimônio Financeiro
        </h2>
        <p className="text-neutral-medium text-[15px]">
          Contas bancárias, poupanças e fundos de investimento.
        </p>
      </div>

      <div className="flex-1 space-y-lg">
        {assets.financial.map((asset) => (
          <div
            key={asset.id}
            className="flex items-center gap-lg p-lg bg-background-subtle rounded-card border border-neutral-light/30 group transition-all"
          >
            <div className="w-12 h-12 bg-background rounded-badge flex items-center justify-center text-brand-primary shadow-sm border border-brand-pale">
              <Landmark className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-bold text-neutral-dark truncate">{asset.bank}</p>
              <p className="text-[13px] text-neutral-medium">
                {asset.type} • {asset.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeFinancial(asset.id)}
              className="p-sm text-neutral-medium hover:text-error-red transition-colors opacity-0 group-hover:opacity-100"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        {isAdding ? (
          <form
            onSubmit={handleSubmit(onAddAsset)}
            className="p-xl bg-background border-2 border-dashed border-neutral-light rounded-card space-y-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <Input
                label="Nome do Banco"
                placeholder="Ex: Itaú, Bradesco, Nubank..."
                error={errors.bank?.message}
                {...register('bank')}
              />

              <Select
                label="Tipo de Conta"
                options={[
                  { value: 'CORRENTE', label: 'Conta Corrente' },
                  { value: 'POUPANCA', label: 'Poupança' },
                  { value: 'INVESTIMENTO', label: 'Investimento / Corretora' },
                ]}
                error={errors.type?.message}
                {...register('type')}
              />

              <Input
                label="Descrição ou Agência"
                placeholder="Ex: Agência 1234, Conta XP..."
                error={errors.description?.message}
                {...register('description')}
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
                Salvar Ativo
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
            <span className="font-semibold text-sm">Adicionar Conta ou Investimento</span>
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

        <button type="button" onClick={nextStep} className="btn-primary !w-auto min-w-[200px]">
          {assets.financial.length === 0 ? 'Pular etapa' : 'Próximo Passo'}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
