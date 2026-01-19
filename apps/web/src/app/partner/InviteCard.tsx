'use client'

import React, { useState } from 'react'
import { Copy, Check, Share2 } from 'lucide-react'

export default function InviteCard({ code, url }: { code: string, url: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="bg-gradient-to-r from-brand-primary to-accent-purple p-[1px] rounded-card shadow-lg">
            <div className="bg-white rounded-[19px] p-lg sm:p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-neutral-dark flex items-center gap-sm">
                        <Share2 className="w-5 h-5 text-brand-primary" />
                        Seu Link de Parceiro
                    </h3>
                    <p className="text-sm text-neutral-medium mt-xs">
                        Compartilhe este link para atribuir novos clientes à sua organização.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-sm w-full md:w-auto">
                    <div className="bg-background-subtle border border-neutral-light/20 rounded-lg px-md py-sm flex items-center gap-sm font-mono text-sm text-neutral-dark min-w-[200px] justify-between">
                        <span className="truncate">{url}</span>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="btn-secondary h-10 px-md flex items-center gap-xs text-sm whitespace-nowrap"
                    >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copiado!' : 'Copiar Link'}
                    </button>
                </div>
            </div>
        </div>
    )
}
