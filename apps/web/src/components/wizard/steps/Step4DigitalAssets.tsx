'use client'

import { Input, Select } from '@/components/ui/form-elements'
import { useWizardStore } from '@/store/useWizardStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight, Lock, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const digitalSchema = z.object({
  type: z.enum(['CRYPTO', 'SOCIAL_MEDIA', 'DOMAIN', 'CLOUD_STORAGE']),
  account: z.string().min(3, 'Identificação da conta é obrigatória'),
  instructions: z.string().optional(),
})

type DigitalValues = z.infer<typeof digitalSchema>

export function Step4DigitalAssets() {
  const { assets, addDigital, removeDigital, nextStep, prevStep } = useWizardStore()
  const [isAdding, setIsAdding] = useState(assets.digital.length === 0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DigitalValues>({
    resolver: zodResolver(digitalSchema),
    defaultValues: {
      type: 'CRYPTO',
    },
  })

  const onAddAsset = (data: DigitalValues) => {
    addDigital(data)
    setIsAdding(false)
    reset()
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-xl">
        <h2 className="text-[26px] leading-[34px] font-bold text-neutral-dark mb-sm">
          Ativos Digitais
        </h2>
        <p className="text-neutral-medium text-[15px]">
          Criptomoedas, redes sociais, domínios e armazenamento em nuvem.
        </p>
      </div>

      <div className="flex-1 space-y-lg">
        {assets.digital.map((asset) => (
          <div
            key={asset.id}
            className="flex items-center gap-lg p-lg bg-background-subtle rounded-card border border-neutral-light/30 group"
          >
            <div className="w-12 h-12 bg-background rounded-badge flex items-center justify-center text-brand-primary shadow-sm border border-brand-pale">
              <Lock className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-bold text-neutral-dark truncate">{asset.account}</p>
              <p className="text-[13px] text-neutral-medium">
                {asset.type}{' '}
                {asset.instructions ? `• ${asset.instructions.substring(0, 30)}...` : ''}
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeDigital(asset.id)}
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
              <Select
                label="Tipo de Ativo"
                options={[
                  { value: 'CRYPTO', label: 'Criptomoedas / Wallet' },
                  { value: 'SOCIAL_MEDIA', label: 'Redes Sociais' },
                  { value: 'DOMAIN', label: 'Domínios / Websites' },
                  { value: 'CLOUD_STORAGE', label: 'Arquivos em Nuvem' },
                ]}
                error={errors.type?.message}
                {...register('type')}
              />

              <Input
                label="Identificação da Conta"
                placeholder="Ex: @seu_user, wallet_address, dominio.com..."
                error={errors.account?.message}
                {...register('account')}
              />

              <div className="md:col-span-2">
                <Input
                  label="Instruções de Acesso (Seguro)"
                  placeholder="Ex: A chave está no cofre X. Não forneça senhas aqui."
                  error={errors.instructions?.message}
                  {...register('instructions')}
                  helperText="⚠️ Nunca insira senhas, sementes (seeds) ou chaves privadas diretamente aqui."
                />
              </div>
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
                Salvar Ativo Digital
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
            <span className="font-semibold text-sm">Adicionar Ativo Digital</span>
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
          {assets.digital.length === 0 ? 'Pular etapa' : 'Próximo Passo'}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
