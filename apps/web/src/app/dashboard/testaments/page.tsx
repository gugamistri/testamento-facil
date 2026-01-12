'use client'

import {
    Calendar,
    CheckCircle2,
    Clock,
    Download,
    Edit3,
    ExternalLink,
    FileText,
    History,
    Plus,
    ShieldCheck,
    Video,
} from 'lucide-react'
import Link from 'next/link'

// Mock data for testament
const mockTestament = {
    status: 'active',
    createdAt: '15/01/2026',
    validatedAt: '18/01/2026',
    version: '1.0',
    validationLayers: [
        { id: 1, name: 'Assinatura ICP-Brasil', status: 'completed', date: '18/01/2026' },
        { id: 2, name: 'Validação Jurídica', status: 'completed', date: '18/01/2026' },
        { id: 3, name: 'Registro Blockchain', status: 'completed', date: '18/01/2026' },
        { id: 4, name: 'Prova de Vida', status: 'completed', date: '17/01/2026' },
    ],
}

const documents = [
    {
        id: 1,
        name: 'Testamento Completo',
        description: 'Assinado digitalmente ICP-Brasil',
        size: '2.4 MB',
        type: 'pdf',
        icon: FileText,
        iconBg: 'bg-functional-error/10',
        iconColor: 'text-functional-error',
    },
    {
        id: 2,
        name: 'Certificado Blockchain',
        description: 'Registro Polygon • Hash SHA-256',
        size: '156 KB',
        type: 'pdf',
        icon: ShieldCheck,
        iconBg: 'bg-accent/10',
        iconColor: 'text-accent',
    },
    {
        id: 3,
        name: 'Vídeo de Validação Forense',
        description: 'Criptografado AES-256 • 1080p',
        size: '487 MB',
        type: 'mp4',
        icon: Video,
        iconBg: 'bg-functional-info/10',
        iconColor: 'text-functional-info',
    },
]

const versionHistory = [
    {
        id: 1,
        version: '1.0',
        date: '15/01/2026',
        description: 'Versão inicial criada',
        status: 'current',
    },
]

export default function TestamentsPage() {
    const hasTestament = true // Toggle for empty vs active state

    if (!hasTestament) {
        return (
            <div className="space-y-xl">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Meus Testamentos</h1>
                        <p className="text-muted-foreground">Gerencie suas versões e documentos legais</p>
                    </div>
                    <Link href="/dashboard/wizard">
                        <button
                            type="button"
                            className="px-lg py-md bg-primary text-primary-foreground rounded-button hover:bg-primary/90 transition-colors flex items-center gap-sm font-semibold"
                        >
                            <Plus className="w-5 h-5" />
                            Criar Testamento
                        </button>
                    </Link>
                </div>

                <div className="border border-border rounded-card p-3xl flex flex-col items-center justify-center text-center bg-card">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-lg">
                        <FileText className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-sm">Nenhum Testamento Criado</h3>
                    <p className="text-muted-foreground max-w-sm mb-xl">
                        Comece a proteger seu legado criando seu primeiro testamento digital com validade
                        jurídica.
                    </p>
                    <Link href="/dashboard/wizard">
                        <button
                            type="button"
                            className="px-xl py-md bg-primary text-primary-foreground rounded-button hover:bg-primary/90 transition-colors font-semibold"
                        >
                            Começar Agora
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-xl">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Meus Testamentos</h1>
                    <p className="text-muted-foreground">Gerencie suas versões e documentos legais</p>
                </div>
                <Link href="/dashboard/wizard">
                    <button
                        type="button"
                        className="px-lg py-md bg-primary text-primary-foreground rounded-button hover:bg-primary/90 transition-colors flex items-center gap-sm font-semibold"
                    >
                        <Edit3 className="w-5 h-5" />
                        Editar Testamento
                    </button>
                </Link>
            </div>

            {/* Testament Status Card */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-card p-xl text-white">
                <div className="flex items-start justify-between">
                    <div className="flex items-start gap-lg">
                        <div className="w-16 h-16 bg-white/20 rounded-card flex items-center justify-center flex-shrink-0">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-xs">Testamento Ativo e Validado</h2>
                            <p className="text-white/80 mb-lg">
                                Criado em {mockTestament.createdAt} • Versão {mockTestament.version}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                                {mockTestament.validationLayers.map((layer) => (
                                    <div key={layer.id} className="bg-white/10 rounded-lg p-md">
                                        <div className="flex items-center gap-xs mb-xs">
                                            <CheckCircle2 className="w-4 h-4 text-accent-emerald" />
                                            <span className="text-xs font-semibold">Camada {layer.id}</span>
                                        </div>
                                        <p className="text-xs text-white/70">{layer.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col gap-sm">
                        <button
                            type="button"
                            className="px-lg py-sm bg-white text-primary font-semibold rounded-button hover:bg-white/90 transition-colors flex items-center gap-xs"
                        >
                            <Download className="w-4 h-4" />
                            Baixar PDF
                        </button>
                        <button
                            type="button"
                            className="px-lg py-sm bg-white/20 text-white font-semibold rounded-button hover:bg-white/30 transition-colors flex items-center gap-xs"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Verificar Blockchain
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
                {/* Documents Section */}
                <div className="lg:col-span-2 space-y-xl">
                    <div className="bg-card rounded-card p-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-lg flex items-center gap-sm">
                            <Download className="w-5 h-5 text-secondary" />
                            Documentos para Download
                        </h3>

                        <div className="space-y-md">
                            {documents.map((doc) => (
                                <div
                                    key={doc.id}
                                    className="flex items-center justify-between p-lg bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                                >
                                    <div className="flex items-center gap-lg">
                                        <div
                                            className={`w-12 h-12 ${doc.iconBg} rounded-lg flex items-center justify-center`}
                                        >
                                            <doc.icon className={`w-6 h-6 ${doc.iconColor}`} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">{doc.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {doc.description} • {doc.size}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="px-lg py-sm bg-primary text-primary-foreground font-semibold rounded-button hover:bg-primary/90 transition-colors flex items-center gap-xs"
                                    >
                                        <Download className="w-4 h-4" />
                                        Baixar
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions - Mobile */}
                    <div className="lg:hidden bg-card rounded-card p-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-lg">Ações Rápidas</h3>
                        <div className="space-y-md">
                            <button
                                type="button"
                                className="w-full px-lg py-md bg-primary text-primary-foreground font-semibold rounded-button hover:bg-primary/90 transition-colors flex items-center justify-center gap-sm"
                            >
                                <Download className="w-5 h-5" />
                                Baixar Testamento
                            </button>
                            <button
                                type="button"
                                className="w-full px-lg py-md border-2 border-primary text-primary font-semibold rounded-button hover:bg-primary/10 transition-colors flex items-center justify-center gap-sm"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Verificar Blockchain
                            </button>
                            <Link href="/schedule" className="block">
                                <button
                                    type="button"
                                    className="w-full px-lg py-md border-2 border-border text-foreground font-semibold rounded-button hover:bg-muted transition-colors flex items-center justify-center gap-sm"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Agendar Consultoria
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-xl">
                    {/* Version History */}
                    <div className="bg-card rounded-card p-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-lg flex items-center gap-sm">
                            <History className="w-5 h-5 text-secondary" />
                            Histórico de Versões
                        </h3>

                        <div className="space-y-md">
                            {versionHistory.map((version) => (
                                <div
                                    key={version.id}
                                    className={`p-lg rounded-lg border ${version.status === 'current'
                                            ? 'border-accent bg-accent/5'
                                            : 'border-border bg-muted'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-xs">
                                        <span className="font-semibold text-foreground">v{version.version}</span>
                                        {version.status === 'current' && (
                                            <span className="text-xs px-sm py-2xs bg-accent/10 text-accent rounded font-semibold">
                                                Atual
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-xs">{version.description}</p>
                                    <div className="flex items-center gap-xs text-xs text-muted-foreground">
                                        <Clock className="w-3 h-3" />
                                        {version.date}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-muted-foreground mt-lg text-center">
                            Versões anteriores aparecerão aqui após edições
                        </p>
                    </div>

                    {/* Quick Actions - Desktop */}
                    <div className="hidden lg:block bg-card rounded-card p-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-lg">Ações Rápidas</h3>
                        <div className="space-y-md">
                            <Link href="/dashboard/wizard" className="block">
                                <button
                                    type="button"
                                    className="w-full px-lg py-md border-2 border-primary text-primary font-semibold rounded-button hover:bg-primary/10 transition-colors flex items-center justify-center gap-sm"
                                >
                                    <Edit3 className="w-5 h-5" />
                                    Editar Testamento
                                </button>
                            </Link>
                            <Link href="/schedule" className="block">
                                <button
                                    type="button"
                                    className="w-full px-lg py-md border-2 border-border text-foreground font-semibold rounded-button hover:bg-muted transition-colors flex items-center justify-center gap-sm"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Agendar Consultoria
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Security Badge */}
                    <div className="bg-accent/5 border border-accent/20 rounded-card p-lg">
                        <div className="flex items-start gap-md">
                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <ShieldCheck className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground mb-xs">Segurança Total</p>
                                <p className="text-sm text-muted-foreground">
                                    Seu testamento está protegido por criptografia AES-256, assinatura ICP-Brasil e
                                    registro imutável em blockchain.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
