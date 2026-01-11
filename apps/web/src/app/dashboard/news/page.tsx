import { Newspaper } from 'lucide-react'
import React from 'react'

export default function NewsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-neutral-dark">Novidades & Atualizações</h1>
                <p className="text-neutral-medium">Últimas notícias do Testamento Fácil e do mundo jurídico</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-neutral-light rounded-xl p-6 bg-white">
                    <span className="text-xs font-bold text-brand-primary uppercase mb-2 block">Jurídico</span>
                    <h3 className="text-lg font-bold text-neutral-dark mb-2">Mudanças na Lei de Herança Digital</h3>
                    <p className="text-sm text-neutral-medium mb-4">
                        Entenda como as novas propostas legislativas podem afetar a transmissão de ativos digitais e criptomoedas.
                    </p>
                    <button className="text-brand-primary text-sm font-bold hover:underline">Ler mais</button>
                </div>

                <div className="border border-neutral-light rounded-xl p-6 bg-white">
                    <span className="text-xs font-bold text-functional-success uppercase mb-2 block">Sistema</span>
                    <h3 className="text-lg font-bold text-neutral-dark mb-2">Nova Integração com Blockchain Polygon</h3>
                    <p className="text-sm text-neutral-medium mb-4">
                        Agora seus registros são ainda mais seguros e rápidos com a migração para a rede Polygon PoS.
                    </p>
                    <button className="text-brand-primary text-sm font-bold hover:underline">Ler mais</button>
                </div>
            </div>
        </div>
    )
}
