'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Shield, User, FileText, Lock, Eye, EyeOff, ExternalLink, AlertTriangle, Check, Phone, Mail, Home, Bitcoin, Globe, HardDrive, Calendar, Download, MessageCircle, Video } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type AuthStep = 'CPF' | 'CODE' | 'AUTHENTICATED'
type ContentTab = 'overview' | 'assets' | 'digital' | 'support'

interface DigitalAsset {
    id: string
    type: 'password' | 'crypto' | 'domain' | 'storage'
    name: string
    details: string
    revealed: boolean
    value?: string
}

const mockAssets = [
    { id: '1', icon: Home, name: 'Apartamento Avenida Paulista, 1000', type: 'Imóvel', value: 'Matrícula: 123.456' },
    { id: '2', icon: Bitcoin, name: 'Carteira Bitcoin (Ledger)', type: 'Criptomoeda', value: '2.5 BTC (instruções no cofre digital)' },
    { id: '3', icon: FileText, name: 'Conta Banco Itaú', type: 'Conta Bancária', value: 'Ag 0001 • Conta 12345-6' },
]

const mockDigitalAssets: DigitalAsset[] = [
    { id: '1', type: 'crypto', name: 'Ledger Nano X - Bitcoin', details: 'Seed Phrase de 24 palavras', revealed: false, value: 'abandon ability able about above absent absorb abstract absurd abuse access accident account accuse achieve acid acoustic acquire across act action actor actress actual adapt' },
    { id: '2', type: 'password', name: 'Gmail - joao.silva@gmail.com', details: 'Senha de acesso', revealed: false, value: 'S3nh@Segur@2024!' },
    { id: '3', type: 'domain', name: 'joaosilva.com.br', details: 'Registro.br', revealed: false, value: 'Login: joao@email.com • Senha: D0m1n10!2024' },
    { id: '4', type: 'storage', name: 'Google Drive', details: '150GB de arquivos', revealed: false, value: 'Mesmo acesso do Gmail' },
]

export default function InheritancePortalPage() {
    const params = useParams()
    const [authStep, setAuthStep] = useState<AuthStep>('CPF')
    const [cpfInput, setCpfInput] = useState('')
    const [codeInput, setCodeInput] = useState('')
    const [activeTab, setActiveTab] = useState<ContentTab>('overview')
    const [digitalAssets, setDigitalAssets] = useState<DigitalAsset[]>(mockDigitalAssets)
    const [revealTimeouts, setRevealTimeouts] = useState<Record<string, number>>({})

    const deceasedName = 'João Carlos Silva Santos'
    const deathDate = '08/01/2026'
    const openingDate = '11/01/2026'
    const percentage = 30
    const estimatedValue = 'R$ 450.000'

    const handleCpfSubmit = () => {
        if (cpfInput.length >= 11) {
            setAuthStep('CODE')
        }
    }

    const handleCodeSubmit = () => {
        if (codeInput.length === 6) {
            setAuthStep('AUTHENTICATED')
        }
    }

    const handleReveal = (assetId: string) => {
        setDigitalAssets(prev => prev.map(a =>
            a.id === assetId ? { ...a, revealed: true } : a
        ))
        setRevealTimeouts(prev => ({ ...prev, [assetId]: 30 }))

        // Auto-hide after 30 seconds
        const interval = setInterval(() => {
            setRevealTimeouts(prev => {
                const newTimeout = (prev[assetId] || 0) - 1
                if (newTimeout <= 0) {
                    clearInterval(interval)
                    setDigitalAssets(p => p.map(a => a.id === assetId ? { ...a, revealed: false } : a))
                    return { ...prev, [assetId]: 0 }
                }
                return { ...prev, [assetId]: newTimeout }
            })
        }, 1000)
    }

    // Authentication screens
    if (authStep !== 'AUTHENTICATED') {
        return (
            <div className="min-h-screen bg-background-subtle flex items-center justify-center p-lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md"
                >
                    <div className="text-center mb-2xl">
                        <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-lg">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-neutral-dark mb-sm">Portal do Beneficiário</h1>
                        <p className="text-neutral-medium">Acesso seguro aos seus direitos sucessórios</p>
                    </div>

                    <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">
                        {authStep === 'CPF' ? (
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-md">
                                    Confirme seus últimos 4 dígitos do CPF
                                </label>
                                <input
                                    type="text"
                                    value={cpfInput}
                                    onChange={(e) => setCpfInput(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                    placeholder="0000"
                                    className="w-full h-16 text-center text-2xl tracking-[1em] font-mono bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={handleCpfSubmit}
                                    disabled={cpfInput.length < 4}
                                    className="btn-primary w-full mt-xl disabled:opacity-50"
                                >
                                    Continuar
                                </button>
                            </div>
                        ) : (
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-md">
                                    Digite o código enviado por SMS
                                </label>
                                <input
                                    type="text"
                                    value={codeInput}
                                    onChange={(e) => setCodeInput(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                    placeholder="000000"
                                    className="w-full h-16 text-center text-2xl tracking-[0.5em] font-mono bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                                />
                                <p className="text-sm text-neutral-medium text-center mt-md">
                                    Enviamos o código para (11) 9****-1234
                                </p>
                                <button
                                    type="button"
                                    onClick={handleCodeSubmit}
                                    disabled={codeInput.length < 6}
                                    className="btn-primary w-full mt-xl disabled:opacity-50"
                                >
                                    Verificar
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-center gap-sm mt-xl text-neutral-medium">
                        <Lock className="w-4 h-4" />
                        <span className="text-xs">Conexão segura com criptografia SSL</span>
                    </div>
                </motion.div>
            </div>
        )
    }

    // Main Portal Content
    return (
        <div className="min-h-screen bg-background-subtle">
            {/* Header */}
            <header className="bg-background border-b border-neutral-light/20 py-lg px-lg sm:px-2xl">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 bg-brand-primary rounded-badge flex items-center justify-center">
                            <span className="text-white font-black text-sm">T</span>
                        </div>
                        <span className="font-bold text-neutral-dark">Testamento <span className="text-brand-primary">Fácil</span></span>
                    </div>
                    <div className="flex items-center gap-md">
                        <span className="text-sm text-neutral-medium">Olá, Maria</span>
                        <div className="w-8 h-8 bg-brand-pale rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-brand-primary" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-lg sm:px-2xl py-2xl">
                {/* Condolences Banner */}
                <div className="bg-neutral-dark rounded-2xl p-lg mb-2xl text-white">
                    <p className="text-sm opacity-80">
                        É com pesar que informamos o falecimento de <strong>{deceasedName}</strong>,
                        ocorrido em {deathDate}. Nossos sinceros sentimentos.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-sm mb-2xl overflow-x-auto">
                    {[
                        { id: 'overview', label: 'Visão Geral', icon: FileText },
                        { id: 'assets', label: 'Seus Direitos', icon: Home },
                        { id: 'digital', label: 'Cofre Digital', icon: Lock },
                        { id: 'support', label: 'Suporte', icon: MessageCircle },
                    ].map((tab) => {
                        const Icon = tab.icon
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id as ContentTab)}
                                className={cn(
                                    "flex items-center gap-sm px-xl py-md rounded-xl font-semibold whitespace-nowrap transition-all",
                                    activeTab === tab.id
                                        ? "bg-brand-primary text-white"
                                        : "bg-background text-neutral-medium hover:bg-background-subtle"
                                )}
                            >
                                <Icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        )
                    })}
                </div>

                <AnimatePresence mode="wait">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-xl"
                        >
                            <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">
                                <h2 className="text-xl font-bold text-neutral-dark mb-lg">Informações do Testamento</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-lg">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-neutral-medium mb-xs">Testador</p>
                                        <p className="font-bold text-neutral-dark">{deceasedName}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-neutral-medium mb-xs">Data do Óbito</p>
                                        <p className="font-bold text-neutral-dark">{deathDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-neutral-medium mb-xs">Abertura</p>
                                        <p className="font-bold text-neutral-dark">{openingDate}</p>
                                    </div>
                                </div>
                                <div className="mt-lg pt-lg border-t border-neutral-light/20">
                                    <div className="flex items-center gap-sm text-functional-success">
                                        <Check className="w-4 h-4" />
                                        <span className="text-sm font-semibold">Testamento particular com assinatura ICP-Brasil</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-brand-pale rounded-[32px] p-xl">
                                <h2 className="text-xl font-bold text-brand-primary mb-lg">Seus Direitos</h2>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-4xl font-bold text-neutral-dark">{percentage}%</p>
                                        <p className="text-neutral-medium">do patrimônio líquido</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-black uppercase tracking-widest text-neutral-medium mb-xs">Valor Estimado</p>
                                        <p className="text-2xl font-bold text-brand-primary">{estimatedValue}</p>
                                        <p className="text-xs text-neutral-medium">(sujeito a inventário)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">
                                <h2 className="text-xl font-bold text-neutral-dark mb-lg">Próximos Passos</h2>
                                <div className="space-y-md">
                                    {[
                                        { done: true, text: 'Acessar portal do beneficiário' },
                                        { done: false, text: 'Obter segunda via de certidão de óbito' },
                                        { done: false, text: 'Agendar consultoria com advogado executor' },
                                        { done: false, text: 'Reunir documentos pessoais (RG, CPF, comprovante)' },
                                        { done: false, text: 'Decidir: inventário judicial ou extrajudicial' },
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-md">
                                            <div className={cn(
                                                "w-6 h-6 rounded-full flex items-center justify-center",
                                                step.done ? "bg-functional-success" : "bg-neutral-light/30"
                                            )}>
                                                {step.done && <Check className="w-4 h-4 text-white" />}
                                            </div>
                                            <span className={cn(
                                                "font-medium",
                                                step.done ? "text-neutral-medium line-through" : "text-neutral-dark"
                                            )}>{step.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-neutral-medium mt-lg">
                                    <Calendar className="w-4 h-4 inline mr-xs" />
                                    Processo típico leva 3-6 meses para conclusão
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Assets Tab */}
                    {activeTab === 'assets' && (
                        <motion.div
                            key="assets"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">
                                <h2 className="text-xl font-bold text-neutral-dark mb-lg">Bens Designados a Você</h2>
                                <div className="space-y-md">
                                    {mockAssets.map((asset) => {
                                        const Icon = asset.icon
                                        return (
                                            <div key={asset.id} className="flex items-start gap-lg p-lg bg-background-subtle rounded-2xl">
                                                <div className="w-12 h-12 bg-brand-pale rounded-xl flex items-center justify-center">
                                                    <Icon className="w-6 h-6 text-brand-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-bold text-neutral-dark">{asset.name}</p>
                                                    <p className="text-sm text-neutral-medium">{asset.type}</p>
                                                    <p className="text-xs text-brand-primary mt-xs">{asset.value}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Digital Vault Tab */}
                    {activeTab === 'digital' && (
                        <motion.div
                            key="digital"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="bg-functional-warning/10 border border-functional-warning/30 rounded-2xl p-lg mb-xl flex items-start gap-md">
                                <AlertTriangle className="w-5 h-5 text-functional-warning flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-functional-warning">Conteúdo Sensível</p>
                                    <p className="text-sm text-neutral-dark">
                                        As informações abaixo são sigilosas. Seeds de criptomoedas são irreversíveis - qualquer erro resulta em perda total.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">
                                <h2 className="text-xl font-bold text-neutral-dark mb-lg">Cofre de Instruções</h2>
                                <div className="space-y-md">
                                    {digitalAssets.map((asset) => (
                                        <div key={asset.id} className="p-lg bg-background-subtle rounded-2xl">
                                            <div className="flex items-center justify-between mb-md">
                                                <div>
                                                    <p className="font-bold text-neutral-dark">{asset.name}</p>
                                                    <p className="text-sm text-neutral-medium">{asset.details}</p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => !asset.revealed && handleReveal(asset.id)}
                                                    disabled={asset.revealed}
                                                    className={cn(
                                                        "px-lg py-sm rounded-xl font-semibold text-sm flex items-center gap-sm transition-all",
                                                        asset.revealed
                                                            ? "bg-functional-success text-white"
                                                            : "bg-brand-primary text-white hover:bg-brand-hover"
                                                    )}
                                                >
                                                    {asset.revealed ? (
                                                        <>
                                                            <Eye className="w-4 h-4" />
                                                            {revealTimeouts[asset.id]}s
                                                        </>
                                                    ) : (
                                                        <>
                                                            <EyeOff className="w-4 h-4" />
                                                            Revelar
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                            {asset.revealed && asset.value && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="mt-md p-md bg-neutral-dark rounded-xl"
                                                >
                                                    <p className="font-mono text-sm text-white break-all">{asset.value}</p>
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Support Tab */}
                    {activeTab === 'support' && (
                        <motion.div
                            key="support"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl">
                                <h2 className="text-xl font-bold text-neutral-dark mb-lg">Suporte Jurídico Incluído</h2>
                                <p className="text-neutral-medium mb-xl">
                                    Você tem direito a 90 dias de suporte gratuito a partir da abertura do testamento.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
                                    <button type="button" className="flex items-center gap-lg p-lg bg-brand-pale rounded-2xl hover:bg-brand-primary/20 transition-colors">
                                        <Video className="w-6 h-6 text-brand-primary" />
                                        <div className="text-left">
                                            <p className="font-bold text-brand-primary">Agendar Consultoria</p>
                                            <p className="text-sm text-neutral-medium">30 min com advogado</p>
                                        </div>
                                    </button>
                                    <button type="button" className="flex items-center gap-lg p-lg bg-background-subtle rounded-2xl hover:bg-brand-pale transition-colors">
                                        <Mail className="w-6 h-6 text-neutral-medium" />
                                        <div className="text-left">
                                            <p className="font-bold text-neutral-dark">Enviar Dúvida</p>
                                            <p className="text-sm text-neutral-medium">Resposta em 24h</p>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl mt-xl">
                                <h2 className="text-xl font-bold text-neutral-dark mb-lg">Documentos</h2>
                                <div className="space-y-md">
                                    <button type="button" className="w-full flex items-center justify-between p-lg bg-background-subtle rounded-2xl hover:bg-brand-pale transition-colors">
                                        <div className="flex items-center gap-md">
                                            <Download className="w-5 h-5 text-brand-primary" />
                                            <span className="font-semibold text-neutral-dark">Certidão de Autenticidade</span>
                                        </div>
                                        <span className="text-sm text-neutral-medium">PDF</span>
                                    </button>
                                    <button type="button" className="w-full flex items-center justify-between p-lg bg-background-subtle rounded-2xl hover:bg-brand-pale transition-colors">
                                        <div className="flex items-center gap-md">
                                            <ExternalLink className="w-5 h-5 text-brand-primary" />
                                            <span className="font-semibold text-neutral-dark">Verificar no Blockchain</span>
                                        </div>
                                        <span className="text-sm text-neutral-medium">Polygonscan</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    )
}
