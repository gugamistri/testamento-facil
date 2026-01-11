import { UploadCloud, FolderOpen } from 'lucide-react'
import React from 'react'

export default function DocumentsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-neutral-dark">Meus Documentos</h1>
                <p className="text-neutral-medium">Central segura para upload de certidões e anexos</p>
            </div>

            <div className="border-2 border-dashed border-neutral-light rounded-xl p-12 flex flex-col items-center justify-center text-center bg-background-subtle min-h-[400px]">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <UploadCloud className="w-8 h-8 text-neutral-medium" />
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-2">Upload Centralizado</h3>
                <p className="text-neutral-medium max-w-sm mb-6">
                    Arraste e solte seus documentos aqui (RG, CPF, Certidão de Casamento, Matrícula de Imóveis).
                </p>
                <button className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors font-medium">
                    Selecionar Arquivos
                </button>
            </div>
        </div>
    )
}
