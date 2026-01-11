'use client'

import { Input, Select } from '@/components/ui/form-elements'
import { useWizardStore } from '@/store/useWizardStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight, Building2, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const realEstateSchema = z.object({
  type: z.enum(['CASA', 'APARTAMENTO', 'TERRENO', 'COMERCIAL']),
  address: z.string().min(10, 'Endereço deve ser completo'),
  registrationNumber: z.string().optional(),
  sharePercentage: z.coerce.number().min(1, 'Mínimo 1%').max(100, 'Máximo 100%'),
  observations: z.string().optional(),
})

type RealEstateValues = z.infer<typeof realEstateSchema>

export function Step2RealEstate() {
  const { assets, addRealEstate, removeRealEstate, nextStep, prevStep } = useWizardStore()
  const [isAdding, setIsAdding] = useState(assets.realEstate.length === 0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RealEstateValues>({
    resolver: zodResolver(realEstateSchema),
    defaultValues: {
      type: 'CASA',
      sharePercentage: 100,
    },
  })

  const onAddProperty = (data: RealEstateValues) => {
    addRealEstate(data)
    setIsAdding(false)
    reset()
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-xl">
        <h2 className="text-[26px] leading-[34px] font-bold text-neutral-dark mb-sm">
          Seus Imóveis
        </h2>
        <p className="text-neutral-medium text-[15px]">
          Liste todos os imóveis que deseja incluir no seu planejamento sucessório.
        </p>
      </div>

      <div className="flex-1 space-y-lg">
        {/* List of existing properties */}
        {assets.realEstate.map((asset) => (
          <div
            key={asset.id}
            className="flex items-center gap-lg p-lg bg-background-subtle rounded-card border border-neutral-light/30 group"
          >
            <div className="w-12 h-12 bg-background rounded-badge flex items-center justify-center text-brand-primary shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-bold text-neutral-dark truncate">{asset.address}</p>
              <p className="text-[13px] text-neutral-medium">
                {asset.type} • {asset.sharePercentage}% de posse
                {asset.registrationNumber && ` • Matrícula: ${asset.registrationNumber}`}
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeRealEstate(asset.id)}
              className="p-sm text-neutral-medium hover:text-error-red transition-colors opacity-0 group-hover:opacity-100"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        {isAdding ? (
          <form
            onSubmit={handleSubmit(onAddProperty)}
            className="p-xl bg-background border-2 border-dashed border-neutral-light rounded-card space-y-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <Select
                label="Tipo de Imóvel"
                options={[
                  { value: 'CASA', label: 'Casa' },
                  { value: 'APARTAMENTO', label: 'Apartamento' },
                  { value: 'TERRENO', label: 'Terreno' },
                  { value: 'COMERCIAL', label: 'Ponto Comercial' },
                ]}
                error={errors.type?.message}
                {...register('type')}
              />

              <Input
                label="Sua Porcentagem de Posse"
                type="number"
                placeholder="100"
                error={errors.sharePercentage?.message}
                {...register('sharePercentage')}
              />

              <Input
                label="Endereço Completo"
                placeholder="Rua, número, bairro, cidade, estado"
                error={errors.address?.message}
                {...register('address')}
                className="md:col-span-2"
              />

              <Input
                label="Matrícula do Imóvel (Opcional)"
                placeholder="Número da matrícula e cartório"
                error={errors.registrationNumber?.message}
                {...register('registrationNumber')}
              />

              <Input
                label="Observações Adicionais"
                placeholder="Ex: Financiado, usufruto, etc."
                error={errors.observations?.message}
                {...register('observations')}
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
                Salvar Imóvel
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
            <span className="font-semibold text-sm">Adicionar Outro Imóvel</span>
          </button>
        )}
      </div>

      {/* Footer Actions */}
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
          {assets.realEstate.length === 0 ? 'Não possuo imóveis' : 'Próximo Passo'}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
