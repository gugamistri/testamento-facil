'use client'

import { useWizardStore } from '@/store/useWizardStore'
import { ArrowLeft, CheckCircle2, FileText, Heart, Home, Landmark, Lock, User } from 'lucide-react'

export function Step6Review() {
  const { personalData, assets, beneficiaries, prevStep } = useWizardStore()

  const handleFinish = () => {
    // In a real app, this would submit to the backend.
    // For Phase 4, we just show a success state or log it.
    console.log('Wizard Finished:', { personalData, assets, beneficiaries })
    alert('Informações salvas com sucesso! Prosseguindo para validação por vídeo.')
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-xl">
        <h2 className="text-[26px] leading-[34px] font-bold text-neutral-dark mb-sm">
          Revisão do seu Testamento
        </h2>
        <p className="text-neutral-medium text-[15px]">
          Revise todas as informações antes de prosseguir para a etapa de validação jurídica.
        </p>
      </div>

      <div className="flex-1 space-y-xl overflow-y-auto pr-md custom-scrollbar">
        {/* Section: Personal Data */}
        <div className="space-y-md">
          <h3 className="text-[17px] font-bold text-neutral-dark flex items-center gap-sm">
            <User className="w-5 h-5 text-brand-primary" />
            Dados Pessoais
          </h3>
          <div className="grid grid-cols-2 gap-lg p-lg bg-background-subtle rounded-card border border-neutral-light/20">
            <div>
              <p className="text-[12px] text-neutral-medium uppercase tracking-wider font-bold">
                Nome Completo
              </p>
              <p className="text-[15px] text-neutral-dark font-semibold">{personalData.fullName}</p>
            </div>
            <div>
              <p className="text-[12px] text-neutral-medium uppercase tracking-wider font-bold">
                CPF
              </p>
              <p className="text-[15px] text-neutral-dark font-semibold">{personalData.cpf}</p>
            </div>
            <div>
              <p className="text-[12px] text-neutral-medium uppercase tracking-wider font-bold">
                Estado Civil
              </p>
              <p className="text-[15px] text-neutral-dark font-semibold">
                {personalData.maritalStatus}
              </p>
            </div>
            <div>
              <p className="text-[12px] text-neutral-medium uppercase tracking-wider font-bold">
                Profissão
              </p>
              <p className="text-[15px] text-neutral-dark font-semibold">
                {personalData.profession}
              </p>
            </div>
          </div>
        </div>

        {/* Section: Assets Summary */}
        <div className="space-y-md">
          <h3 className="text-[17px] font-bold text-neutral-dark flex items-center gap-sm">
            <FileText className="w-5 h-5 text-brand-primary" />
            Patrimônio Declarado
          </h3>
          <div className="space-y-sm">
            {/* Real Estate */}
            <div className="flex items-center justify-between p-lg bg-background border border-neutral-light/30 rounded-card shadow-sm">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 bg-brand-pale/50 rounded-badge flex items-center justify-center text-brand-primary">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-neutral-dark">Imóveis</p>
                  <p className="text-[12px] text-neutral-medium">
                    {assets.realEstate.length} itens cadastrados
                  </p>
                </div>
              </div>
            </div>
            {/* Financial */}
            <div className="flex items-center justify-between p-lg bg-background border border-neutral-light/30 rounded-card shadow-sm">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 bg-brand-pale/50 rounded-badge flex items-center justify-center text-brand-primary">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-neutral-dark">Contas e Investimentos</p>
                  <p className="text-[12px] text-neutral-medium">
                    {assets.financial.length} itens cadastrados
                  </p>
                </div>
              </div>
            </div>
            {/* Digital */}
            <div className="flex items-center justify-between p-lg bg-background border border-neutral-light/30 rounded-card shadow-sm">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 bg-brand-pale/50 rounded-badge flex items-center justify-center text-brand-primary">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-neutral-dark">Ativos Digitais</p>
                  <p className="text-[12px] text-neutral-medium">
                    {assets.digital.length} itens cadastrados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Beneficiaries */}
        <div className="space-y-md">
          <h3 className="text-[17px] font-bold text-neutral-dark flex items-center gap-sm">
            <Heart className="w-5 h-5 text-brand-primary" />
            Beneficiários
          </h3>
          <div className="space-y-xs">
            {beneficiaries.map((b) => (
              <div
                key={b.id}
                className="flex items-center justify-between p-md border-b border-neutral-light/10"
              >
                <div className="flex items-center gap-md">
                  <div className="w-2 h-2 rounded-full bg-brand-primary" />
                  <div>
                    <p className="text-[14px] font-bold text-neutral-dark">{b.name}</p>
                    <p className="text-[12px] text-neutral-medium">{b.relationship}</p>
                  </div>
                </div>
                <span className="text-[15px] font-black text-brand-primary">{b.share}%</span>
              </div>
            ))}
          </div>
        </div>
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
          onClick={handleFinish}
          className="btn-premium !w-auto min-w-[240px] shadow-elevation"
        >
          Finalizar e Validar
          <CheckCircle2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
