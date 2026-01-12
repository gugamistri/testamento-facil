'use client'

import { SignUpButton } from '@clerk/nextjs'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Building2, Check, Coins, Info, Landmark, Wallet } from 'lucide-react'
import { useState } from 'react'

const assetTypes = [
  { id: 'house', label: 'Imóveis', icon: Building2 },
  { id: 'investments', label: 'Investimentos', icon: Landmark },
  { id: 'crypto', label: 'Cripto', icon: Coins },
  { id: 'business', label: 'Empresas', icon: Wallet },
]

const wealthSteps = [
  { label: 'Até R$ 500k', value: 500000, color: 'bg-emerald-100', text: 'bg-emerald-600' },
  { label: 'R$ 500k - 2M', value: 2000000, color: 'bg-emerald-200', text: 'bg-emerald-700' },
  { label: 'R$ 2M - 5M', value: 5000000, color: 'bg-emerald-300', text: 'bg-emerald-800' },
  { label: 'Acima de R$ 5M', value: 10000000, color: 'bg-emerald-400', text: 'bg-emerald-900' },
]

export function SavingsCalculator() {
  const [step, setStep] = useState(1)
  const [wealth, setWealth] = useState(0)
  const [selectedAssets, setSelectedAssets] = useState<string[]>([])

  const nextStep = () => setStep((s) => s + 1)
  const prevStep = () => setStep((s) => s - 1)

  const toggleAsset = (id: string) => {
    setSelectedAssets((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]))
  }

  const calculateEconomy = () => {
    const estimatedWealth = wealthSteps[wealth].value
    const traditional = estimatedWealth * 0.01 + 3000
    const digital = 2500 // R$ 1.500 (Setup) + R$ 1.000 (1º Ano)
    return { traditional, digital, savings: traditional - digital }
  }

  const { traditional, digital, savings } = calculateEconomy()

  return (
    <div className="bg-background-subtle py-3xl" id="calculator">
      <div className="mx-auto max-w-7xl px-lg lg:px-xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[26px] leading-[34px] font-bold text-neutral-dark sm:text-[32px] sm:leading-[40px] tracking-tight">
            Quanto você economiza hoje?
          </h2>
          <p className="mt-sm text-[17px] leading-[28px] text-neutral-medium">
            Descubra a diferença de valores entre o processo tradicional e a nossa plataforma.
          </p>
        </div>

        <div className="mx-auto mt-xl max-w-xl bg-background-pure rounded-card shadow-card border border-neutral-light/30 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-xs bg-neutral-light/20 flex">
            {wealthSteps.map((ws, i) => (
              <div
                key={ws.label}
                className={`flex-1 transition-all duration-500 ${i + 1 <= step ? 'bg-brand-primary' : 'bg-neutral-light/20'
                  }`}
              />
            ))}
          </div>

          <div className="p-xl sm:p-2xl">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-[18px] leading-[26px] font-semibold text-neutral-dark mb-lg">
                    Passo 1: Qual seu patrimônio estimado?
                  </h3>
                  <div className="space-y-sm">
                    {wealthSteps.map((ws, index) => (
                      <button
                        key={ws.label}
                        type="button"
                        onClick={() => setWealth(index)}
                        className={`w-full flex items-center justify-between p-lg rounded-input border-2 transition-all ${wealth === index
                          ? 'border-brand-primary bg-brand-pale'
                          : 'border-neutral-light/50 hover:border-brand-primary/30'
                          }`}
                      >
                        <span className="font-medium text-neutral-dark">{ws.label}</span>
                        {wealth === index && <Check className="text-brand-primary w-5 h-5" />}
                      </button>
                    ))}
                  </div>
                  <button type="button" onClick={nextStep} className="btn-primary w-full mt-lg">
                    Próximo Passo
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-[18px] leading-[26px] font-semibold text-neutral-dark mb-lg">
                    Passo 2: Quais tipos de ativos você possui?
                  </h3>
                  <div className="grid grid-cols-2 gap-md">
                    {assetTypes.map((asset) => (
                      <button
                        key={asset.id}
                        type="button"
                        onClick={() => toggleAsset(asset.id)}
                        className={`p-lg rounded-card border-2 flex flex-col items-center gap-sm transition-all ${selectedAssets.includes(asset.id)
                          ? 'border-brand-primary bg-brand-pale text-brand-primary'
                          : 'border-neutral-light/50 hover:border-brand-primary/30 text-neutral-medium'
                          }`}
                      >
                        <asset.icon className="w-8 h-8" />
                        <span className="font-semibold text-[15px]">{asset.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-lg flex items-start gap-sm bg-brand-pale p-lg rounded-card text-brand-primary text-[15px] leading-[24px]">
                    <Info className="w-5 h-5 shrink-0" />
                    <p>
                      {selectedAssets.length > 2
                        ? 'Você possui um patrimônio complexo. Recomendamos nossa consultoria especializada para melhor estruturação.'
                        : 'Sua estrutura é ideal para o nosso plano padrão.'}
                    </p>
                  </div>

                  <div className="mt-xl flex gap-md">
                    <button type="button" onClick={prevStep} className="btn-secondary flex-1">
                      Voltar
                    </button>
                    <button type="button" onClick={nextStep} className="btn-primary flex-1">
                      Ver Resultado Sumário
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <h3 className="text-[22px] leading-[30px] font-semibold text-neutral-dark mb-sm text-center">
                    Resultado da sua Economia
                  </h3>
                  <p className="text-neutral-medium text-center text-[15px] mb-lg">
                    Baseado em custos médios de cartórios e impostos.
                  </p>

                  <div className="space-y-lg">
                    <div className="bg-background-subtle p-lg rounded-card border border-neutral-light/30">
                      <div className="flex justify-between items-center mb-xs">
                        <span className="text-neutral-medium text-[14px]">
                          No Cartório Tradicional
                        </span>
                        <span className="text-neutral-dark font-bold">
                          R$ {traditional.toLocaleString('pt-BR')}
                        </span>
                      </div>
                      <div className="w-full bg-neutral-light/30 h-xs rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-neutral-medium/50"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>

                    <div className="bg-functional-success/5 p-lg rounded-card border border-functional-success/20 relative overflow-hidden">
                      <div className="flex justify-between items-center mb-xs relative z-10">
                        <span className="text-functional-success font-semibold text-[15px]">
                          Com Testamento Fácil
                        </span>
                        <span className="text-functional-success font-black text-xl">
                          R$ {digital.toLocaleString('pt-BR')}
                        </span>
                      </div>
                      <div className="w-full bg-functional-success/20 h-xs rounded-full overflow-hidden relative z-10">
                        <motion.div
                          className="h-full bg-functional-success shadow-[0_0_10px_rgba(46,125,50,0.4)]"
                          initial={{ width: 0 }}
                          animate={{ width: `${(digital / traditional) * 100}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    <div className="text-center py-lg bg-brand-primary rounded-card text-white shadow-button">
                      <p className="text-[12px] font-bold uppercase tracking-widest opacity-80">
                        Você economiza
                      </p>
                      <p className="text-3xl font-black">R$ {savings.toLocaleString('pt-BR')}</p>
                    </div>
                  </div>

                  <div className="mt-xl space-y-md">
                    <SignUpButton mode="modal">
                      <button type="button" className="btn-primary w-full shadow-elevation">
                        Garantir Essa Economia Agora
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </SignUpButton>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full text-neutral-medium text-[14px] font-medium hover:text-brand-primary transition-colors"
                    >
                      Refazer Simulação
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-lg text-center text-[12px] text-neutral-medium max-w-lg mx-auto leading-relaxed">
          * Os custos do cartório são baseados em tabelas estaduais de emolumentos e honorários
          mínimos sugeridos pela OAB. A economia pode variar dependendo da complexidade dos bens e
          estado de residência.
        </p>
      </div>
    </div>
  )
}
