'use client'

import { motion } from 'framer-motion'
import { Search, Shield, Check, X, ExternalLink, Copy, CheckCircle, Link2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type VerificationStatus = 'idle' | 'loading' | 'success' | 'error'

interface VerificationResult {
    valid: boolean
    documentId: string
    registeredAt: string
    blockchainTx: string
    hash: string
}

export default function VerifyPage() {
    const [input, setInput] = useState('')
    const [status, setStatus] = useState<VerificationStatus>('idle')
    const [result, setResult] = useState<VerificationResult | null>(null)
    const [copied, setCopied] = useState(false)

    const handleVerify = () => {
        if (!input.trim()) return

        setStatus('loading')

        // Simulate verification
        setTimeout(() => {
            if (input.length >= 10) {
                setStatus('success')
                setResult({
                    valid: true,
                    documentId: 'TF-2026-00847',
                    registeredAt: '11/01/2026 às 08:32',
                    blockchainTx: '0x7f9e8d7c6b5a4e3f2d1c0b9a8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8',
                    hash: input.slice(0, 64).padEnd(64, '0'),
                })
            } else {
                setStatus('error')
                setResult(null)
            }
        }, 2000)
    }

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="min-h-screen bg-background-subtle">
            {/* Header */}
            <header className="bg-background border-b border-neutral-light/20 py-lg px-lg sm:px-2xl">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-sm">
                        <div className="w-8 h-8 bg-brand-primary rounded-badge flex items-center justify-center">
                            <span className="text-white font-black text-sm">T</span>
                        </div>
                        <span className="font-bold text-neutral-dark">Testamento <span className="text-brand-primary">Fácil</span></span>
                    </Link>
                    <Link href="/" className="text-sm font-semibold text-neutral-medium hover:text-brand-primary transition-colors">
                        Voltar ao site
                    </Link>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-lg sm:px-2xl py-3xl">
                {/* Hero */}
                <div className="text-center mb-3xl">
                    <div className="w-20 h-20 bg-brand-pale rounded-full flex items-center justify-center mx-auto mb-xl">
                        <Shield className="w-10 h-10 text-brand-primary" />
                    </div>
                    <h1 className="text-3xl font-bold text-neutral-dark mb-md">Verificador de Autenticidade</h1>
                    <p className="text-neutral-medium max-w-md mx-auto">
                        Verifique se um testamento foi autenticamente registrado em nossa plataforma e blockchain.
                    </p>
                </div>

                {/* Input */}
                <div className="bg-background rounded-[32px] border border-neutral-light/20 p-xl sm:p-2xl mb-xl">
                    <label className="block text-xs font-black uppercase tracking-widest text-neutral-medium mb-md">
                        Hash do Documento ou ID do Testamento
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ex: TF-2026-00847 ou a3f5e8c9d2b1..."
                            className="w-full h-16 pl-lg pr-[140px] bg-background-subtle border border-neutral-light/30 rounded-2xl text-neutral-dark placeholder:text-neutral-light focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all font-mono text-sm"
                        />
                        <button
                            type="button"
                            onClick={handleVerify}
                            disabled={!input.trim() || status === 'loading'}
                            className="absolute right-sm top-1/2 -translate-y-1/2 btn-primary !h-12 disabled:opacity-50"
                        >
                            {status === 'loading' ? (
                                <span className="flex items-center gap-sm">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    >
                                        <Search className="w-4 h-4" />
                                    </motion.div>
                                    Verificando...
                                </span>
                            ) : (
                                <>
                                    <Search className="w-4 h-4" />
                                    Verificar
                                </>
                            )}
                        </button>
                    </div>
                    <p className="text-xs text-neutral-medium mt-md">
                        Este verificador NÃO exibe o conteúdo do testamento, apenas confirma sua existência e integridade.
                    </p>
                </div>

                {/* Result */}
                {status === 'success' && result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-functional-success/5 border border-functional-success/20 rounded-[32px] p-xl sm:p-2xl"
                    >
                        <div className="flex items-center gap-md mb-xl">
                            <div className="w-14 h-14 bg-functional-success rounded-2xl flex items-center justify-center">
                                <CheckCircle className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-functional-success">Documento Autêntico</h2>
                                <p className="text-neutral-medium">Registrado em {result.registeredAt}</p>
                            </div>
                        </div>

                        <div className="space-y-lg">
                            <div className="bg-background rounded-2xl p-lg">
                                <p className="text-xs font-black uppercase tracking-widest text-neutral-medium mb-xs">ID do Testamento</p>
                                <p className="font-mono font-bold text-neutral-dark">{result.documentId}</p>
                            </div>

                            <div className="bg-background rounded-2xl p-lg">
                                <p className="text-xs font-black uppercase tracking-widest text-neutral-medium mb-xs">Hash SHA-256</p>
                                <div className="flex items-center gap-sm">
                                    <p className="font-mono text-xs text-neutral-dark break-all flex-1">{result.hash}</p>
                                    <button
                                        type="button"
                                        onClick={() => handleCopy(result.hash)}
                                        className="p-sm hover:bg-background-subtle rounded-xl transition-colors"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-functional-success" /> : <Copy className="w-4 h-4 text-neutral-medium" />}
                                    </button>
                                </div>
                            </div>

                            <div className="bg-background rounded-2xl p-lg">
                                <p className="text-xs font-black uppercase tracking-widest text-neutral-medium mb-xs">Transação Blockchain</p>
                                <div className="flex items-center gap-sm">
                                    <p className="font-mono text-xs text-neutral-dark break-all flex-1">{result.blockchainTx.slice(0, 20)}...{result.blockchainTx.slice(-10)}</p>
                                    <a
                                        href={`https://polygonscan.com/tx/${result.blockchainTx}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-sm hover:bg-background-subtle rounded-xl transition-colors flex items-center gap-xs text-brand-primary text-sm font-semibold"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Ver no Polygonscan
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-functional-error/5 border border-functional-error/20 rounded-[32px] p-xl sm:p-2xl text-center"
                    >
                        <div className="w-14 h-14 bg-functional-error/10 rounded-2xl flex items-center justify-center mx-auto mb-lg">
                            <X className="w-7 h-7 text-functional-error" />
                        </div>
                        <h2 className="text-xl font-bold text-functional-error mb-sm">Documento Não Encontrado</h2>
                        <p className="text-neutral-medium">
                            Não encontramos nenhum registro com esse hash ou ID. Verifique se digitou corretamente.
                        </p>
                    </motion.div>
                )}

                {/* Info */}
                <div className="mt-3xl text-center">
                    <div className="flex items-center justify-center gap-sm text-neutral-medium mb-sm">
                        <Link2 className="w-4 h-4" />
                        <span className="text-sm">Registros armazenados na rede Polygon</span>
                    </div>
                    <p className="text-xs text-neutral-light">
                        Cada testamento é registrado em blockchain público, garantindo imutabilidade e verificabilidade independente.
                    </p>
                </div>
            </main>
        </div>
    )
}
