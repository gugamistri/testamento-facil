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
    const digital = 2500
    return { traditional, digital, savings: traditional - digital }
  }

  const { traditional, digital, savings } = calculateEconomy()

  return (
    <div className="bg-background-pure py-3xl relative overflow-hidden" id="calculator">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-lg lg:px-xl relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-purple mb-md block">Simulador de Economia</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-lg leading-tight">
            Transparência Absoluta.
          </h2>
          <p className="text-lg text-neutral-medium max-w-xl mx-auto leading-relaxed">
            Compare o custo operacional da burocracia analógica contra o Protocolo Testamento Fácil™.
          </p>
        </div>

        <div className="mx-auto mt-xl max-w-xl bg-background-dark/40 backdrop-blur-3xl rounded-[40px] border border-white/5 shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1 bg-white/5 flex">
            {wealthSteps.map((ws, i) => (
              <div
                key={ws.label}
                className={`flex-1 transition-all duration-700 ${i + 1 <= step ? 'bg-brand-primary shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-white/5'}`}
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
                  <h3 className="text-xl font-bold text-white mb-lg tracking-tight">
                    Qual sua base patrimonial?
                  </h3>
                  <div className="grid grid-cols-1 gap-sm">
                    {wealthSteps.map((ws, index) => (
                      <button
                        key={ws.label}
                        type="button"
                        onClick={() => setWealth(index)}
                        className={`w-full flex items-center justify-between p-lg rounded-2xl border-2 transition-all duration-500 ${wealth === index
                          ? 'border-brand-primary bg-brand-primary/10 text-white'
                          : 'border-white/5 bg-white/5 hover:border-white/20 text-white/40'
                          }`}
                      >
                        <span className="font-bold">{ws.label}</span>
                        {wealth === index && <Check className="text-brand-primary w-5 h-5" />}
                      </button>
                    ))}
                  </div>
                  <button type="button" onClick={nextStep} className="btn-primary w-full mt-lg h-14 font-black uppercase tracking-widest text-xs">
                    Validar Patrimônio
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
                  <h3 className="text-xl font-bold text-white mb-lg tracking-tight">
                    Selecione as Classes de Ativos
                  </h3>
                  <div className="grid grid-cols-2 gap-md">
                    {assetTypes.map((asset) => (
                      <button
                        key={asset.id}
                        type="button"
                        onClick={() => toggleAsset(asset.id)}
                        className={`p-lg rounded-2xl border-2 flex flex-col items-center gap-sm transition-all duration-500 ${selectedAssets.includes(asset.id)
                          ? 'border-brand-primary bg-brand-primary/10 text-white shadow-lg shadow-brand-primary/20'
                          : 'border-white/5 bg-white/5 hover:border-white/20 text-white/30'
                          }`}
                      >
                        <asset.icon className={`w-8 h-8 ${selectedAssets.includes(asset.id) ? 'text-brand-primary' : 'text-white/40'}`} />
                        <span className="font-bold text-xs uppercase tracking-widest">{asset.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-xl flex gap-md">
                    <button type="button" onClick={prevStep} className="btn-secondary h-14 px-lg text-xs font-black uppercase tracking-widest">
                      Reajustar
                    </button>
                    <button type="button" onClick={nextStep} className="btn-primary flex-1 h-14 font-black uppercase tracking-widest text-xs">
                      Gerar Projeção Forense
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
                  <h3 className="text-2xl font-extrabold text-white mb-sm text-center tracking-tight">
                    Análise de Eficiência
                  </h3>
                  <p className="text-white/40 text-center text-xs mb-lg uppercase font-black tracking-widest">
                    Operação Digital vs. Analógica
                  </p>

                  <div className="space-y-lg">
                    <div className="bg-white/5 p-lg rounded-3xl border border-white/5 group">
                      <div className="flex justify-between items-center mb-xs">
                        <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                          Modelo Cartorial (Tradicional)
                        </span>
                        <span className="text-white/60 font-bold">
                          R$ {traditional.toLocaleString('pt-BR')}
                        </span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-white/20"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5 }}
                        />
                      </div>
                    </div>

                    <div className="bg-brand-primary/10 p-lg rounded-3xl border border-brand-primary/30 relative overflow-hidden group">
                      <div className="flex justify-between items-center mb-xs relative z-10">
                        <span className="text-brand-primary font-black text-[10px] uppercase tracking-widest">
                          Protocolo Testamento Fácil™
                        </span>
                        <span className="text-brand-primary font-black text-2xl drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                          R$ {digital.toLocaleString('pt-BR')}
                        </span>
                      </div>
                      <div className="w-full bg-brand-primary/20 h-2 rounded-full overflow-hidden relative z-10">
                        <motion.div
                          className="h-full bg-brand-primary shadow-[0_0_20px_rgba(245,158,11,0.8)]"
                          initial={{ width: 0 }}
                          animate={{ width: `${(digital / traditional) * 100}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    <div className="text-center py-lg bg-brand-primary rounded-3xl text-background-pure shadow-[0_0_40px_rgba(245,158,11,0.3)] group hover:scale-105 transition-transform duration-500">
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-60">
                        Proteção de Capital
                      </p>
                      <p className="text-4xl font-black">R$ {savings.toLocaleString('pt-BR')}</p>
                    </div>
                  </div>

                  <div className="mt-xl space-y-md">
                    <SignUpButton mode="modal">
                      <button type="button" className="btn-primary w-full h-16 shadow-[0_0_30px_rgba(245,158,11,0.2)] font-black uppercase tracking-widest text-xs">
                        Garantir Soberania Agora
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </SignUpButton>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full text-white/30 text-[10px] font-black uppercase tracking-widest hover:text-brand-primary transition-colors"
                    >
                      Redefinir Variáveis
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-lg text-center text-[10px] text-white/20 font-bold uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
          * Valores de referência baseados em emolumentos cartoriais médios e honorários OAB v2024.
        </p>
      </div>
    </div>
  )
}
