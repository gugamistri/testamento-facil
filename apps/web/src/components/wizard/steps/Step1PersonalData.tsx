'use client'

import { Input, Select } from '@/components/ui/form-elements'
import { useWizardStore } from '@/store/useWizardStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const personalDataSchema = z.object({
  fullName: z.string().min(5, 'O nome deve ter pelo menos 5 caracteres'),
  cpf: z.string().min(11, 'CPF inválido').max(14, 'CPF inválido'),
  birthDate: z.string().min(10, 'Data de nascimento inválida'),
  maritalStatus: z.enum(['SOLTEIRO', 'CASADO', 'DIVORCIADO', 'VIUVO', 'UNIAO_ESTAVEL'] as const),
  nationality: z.string().min(3, 'Nacionalidade obrigatória'),
  profession: z.string().min(3, 'Profissão obrigatória'),
})

type PersonalDataValues = z.infer<typeof personalDataSchema>

export function Step1PersonalData() {
  const { personalData, updatePersonalData, nextStep } = useWizardStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PersonalDataValues>({
    resolver: zodResolver(personalDataSchema),
    defaultValues: personalData,
    mode: 'onChange',
  })

  const onSubmit = (data: PersonalDataValues) => {
    updatePersonalData(data)
    nextStep()
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-xl">
        <h2 className="text-[26px] leading-[34px] font-bold text-neutral-dark mb-sm">
          Seus Dados Pessoais
        </h2>
        <p className="text-neutral-medium text-[15px]">
          Estes dados são necessários para a validade jurídica do seu testamento.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-xl flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <Input
            label="Nome Completo"
            placeholder="Como no RG/CNH"
            error={errors.fullName?.message}
            {...register('fullName')}
            className="md:col-span-2"
          />

          <Input
            label="CPF"
            placeholder="000.000.000-00"
            error={errors.cpf?.message}
            {...register('cpf')}
          />

          <Input
            label="Data de Nascimento"
            type="date"
            error={errors.birthDate?.message}
            {...register('birthDate')}
          />

          <Select
            label="Estado Civil"
            options={[
              { value: 'SOLTEIRO', label: 'Solteiro(a)' },
              { value: 'CASADO', label: 'Casado(a)' },
              { value: 'DIVORCIADO', label: 'Divorciado(a)' },
              { value: 'VIUVO', label: 'Viúvo(a)' },
              { value: 'UNIAO_ESTAVEL', label: 'União Estável' },
            ]}
            error={errors.maritalStatus?.message}
            {...register('maritalStatus')}
          />

          <Input
            label="Nacionalidade"
            placeholder="Ex: Brasileira"
            error={errors.nationality?.message}
            {...register('nationality')}
          />

          <Input
            label="Profissão"
            placeholder="Sua ocupação principal"
            error={errors.profession?.message}
            {...register('profession')}
            className="md:col-span-2"
          />
        </div>

        {/* Footer Actions */}
        <div className="pt-2xl border-t border-neutral-light/20 flex justify-between items-center mt-auto">
          <button
            type="button"
            disabled
            className="flex items-center gap-sm text-neutral-medium font-semibold opacity-50 cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
            Anterior
          </button>

          <button
            type="submit"
            disabled={!isValid}
            className={`btn-primary !w-auto min-w-[200px] ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Próximo Passo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  )
}
