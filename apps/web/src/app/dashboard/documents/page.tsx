'use client'

import {
    Award,
    Check,
    CheckCircle2,
    Clock,
    Download,
    Eye,
    FileText,
    Fingerprint,
    Home,
    LayoutGrid,
    List,
    Lock,
    Plus,
    Shield,
    Trash2,
    Upload,
    UploadCloud,
    X,
} from 'lucide-react'
import { useState } from 'react'

// Mock document data
const mockDocuments = [
    {
        id: 1,
        name: 'Testamento Digital Completo',
        type: 'testament',
        icon: FileText,
        iconBg: 'bg-brand-primary/10',
        iconColor: 'text-brand-primary',
        size: '2.4 MB',
        pages: 18,
        status: 'signed',
        signedAt: '18/01/2026',
        hash: '7a8f3d2c9e1b4f6a5d8c...',
        blockchain: true,
    },
    {
        id: 2,
        name: 'Certificado Blockchain',
        type: 'certificate',
        icon: Shield,
        iconBg: 'bg-accent-emerald/10',
        iconColor: 'text-accent-emerald',
        size: '156 KB',
        pages: 1,
        status: 'signed',
        signedAt: '18/01/2026',
        hash: 'b2c4e6f8a1d3e5f7c9...',
        blockchain: true,
    },
    {
        id: 3,
        name: 'RG - Documento de Identidade',
        type: 'identity',
        icon: Award,
        iconBg: 'bg-brand-gold/10',
        iconColor: 'text-brand-gold',
        size: '1.2 MB',
        pages: 2,
        status: 'verified',
        uploadedAt: '10/01/2026',
    },
    {
        id: 4,
        name: 'Certidão de Casamento',
        type: 'certificate',
        icon: FileText,
        iconBg: 'bg-functional-info/10',
        iconColor: 'text-functional-info',
        size: '890 KB',
        pages: 1,
        status: 'verified',
        uploadedAt: '10/01/2026',
    },
    {
        id: 5,
        name: 'Matrícula do Imóvel - Apt 101',
        type: 'property',
        icon: Home,
        iconBg: 'bg-accent-purple/10',
        iconColor: 'text-accent-purple',
        size: '3.1 MB',
        pages: 4,
        status: 'pending',
        uploadedAt: '15/01/2026',
    },
]

const documentCategories = [
    { id: 'all', label: 'Todos', count: mockDocuments.length },
    {
        id: 'testament',
        label: 'Testamento',
        count: mockDocuments.filter((d) => d.type === 'testament').length,
    },
    {
        id: 'identity',
        label: 'Identidade',
        count: mockDocuments.filter((d) => d.type === 'identity').length,
    },
    {
        id: 'certificate',
        label: 'Certidões',
        count: mockDocuments.filter((d) => d.type === 'certificate').length,
    },
    {
        id: 'property',
        label: 'Imóveis',
        count: mockDocuments.filter((d) => d.type === 'property').length,
    },
]

export default function DocumentsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')

    const filteredDocuments =
        selectedCategory === 'all'
            ? mockDocuments
            : mockDocuments.filter((d) => d.type === selectedCategory)

    return (
        <div className="space-y-xl">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-dark">Meus Documentos</h1>
                    <p className="text-neutral-medium">
                        Central segura para gerenciamento de documentos e certidões
                    </p>
                </div>
                <button
                    type="button"
                    className="px-lg py-md bg-brand-primary text-white font-semibold rounded-button hover:bg-brand-hover transition-colors flex items-center gap-sm"
                >
                    <Plus className="w-5 h-5" />
                    Upload de Documento
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
                <div className="bg-background-pure rounded-card p-lg border border-neutral-light">
                    <div className="flex items-center gap-md">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                            <FileText className="w-6 h-6 text-brand-primary" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-neutral-dark">{mockDocuments.length}</div>
                            <div className="text-sm text-neutral-medium">Total de Documentos</div>
                        </div>
                    </div>
                </div>

                <div className="bg-background-pure rounded-card p-lg border border-neutral-light">
                    <div className="flex items-center gap-md">
                        <div className="w-12 h-12 bg-functional-success/10 rounded-xl flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-functional-success" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-neutral-dark">
                                {mockDocuments.filter((d) => d.status === 'signed').length}
                            </div>
                            <div className="text-sm text-neutral-medium">Documentos Assinados</div>
                        </div>
                    </div>
                </div>

                <div className="bg-background-pure rounded-card p-lg border border-neutral-light">
                    <div className="flex items-center gap-md">
                        <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-brand-gold" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-neutral-dark">
                                {mockDocuments.filter((d) => d.blockchain).length}
                            </div>
                            <div className="text-sm text-neutral-medium">Registros Blockchain</div>
                        </div>
                    </div>
                </div>

                <div className="bg-background-pure rounded-card p-lg border border-neutral-light">
                    <div className="flex items-center gap-md">
                        <div className="w-12 h-12 bg-functional-warning/10 rounded-xl flex items-center justify-center">
                            <Clock className="w-6 h-6 text-functional-warning" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-neutral-dark">
                                {mockDocuments.filter((d) => d.status === 'pending').length}
                            </div>
                            <div className="text-sm text-neutral-medium">Pendentes Verificação</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-xl">
                {/* Sidebar - Categories */}
                <div className="lg:col-span-1 space-y-xl">
                    <div className="bg-background-pure rounded-card p-lg border border-neutral-light">
                        <h3 className="text-lg font-bold text-neutral-dark mb-md">Categorias</h3>
                        <div className="space-y-xs">
                            {documentCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`w-full flex items-center justify-between px-md py-sm rounded-lg transition-colors ${selectedCategory === cat.id
                                            ? 'bg-brand-primary text-white'
                                            : 'hover:bg-background-subtle text-neutral-dark'
                                        }`}
                                >
                                    <span className="font-medium">{cat.label}</span>
                                    <span
                                        className={`text-sm ${selectedCategory === cat.id ? 'text-white/80' : 'text-neutral-medium'}`}
                                    >
                                        {cat.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Security Info */}
                    <div className="bg-accent-emerald/5 border border-accent-emerald/20 rounded-card p-lg">
                        <div className="flex items-start gap-md">
                            <div className="w-10 h-10 bg-accent-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Lock className="w-5 h-5 text-accent-emerald" />
                            </div>
                            <div>
                                <h4 className="font-bold text-neutral-dark mb-sm">Armazenamento Seguro</h4>
                                <div className="text-sm text-neutral-medium space-y-xs">
                                    <div className="flex items-start gap-xs">
                                        <Check className="w-3 h-3 text-functional-success mt-0.5 flex-shrink-0" />
                                        <span>Criptografia AES-256-GCM</span>
                                    </div>
                                    <div className="flex items-start gap-xs">
                                        <Check className="w-3 h-3 text-functional-success mt-0.5 flex-shrink-0" />
                                        <span>Hash SHA-256 para integridade</span>
                                    </div>
                                    <div className="flex items-start gap-xs">
                                        <Check className="w-3 h-3 text-functional-success mt-0.5 flex-shrink-0" />
                                        <span>Backup em múltiplas regiões</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 space-y-xl">
                    {/* Upload Area */}
                    <div className="border-2 border-dashed border-neutral-light rounded-card p-xl bg-background-subtle hover:border-brand-primary/50 transition-colors cursor-pointer">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-md">
                                <UploadCloud className="w-8 h-8 text-brand-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-dark mb-xs">
                                Arraste e solte seus arquivos
                            </h3>
                            <p className="text-neutral-medium text-sm mb-md max-w-md">
                                Aceita PDF, JPG, PNG até 25MB. Documentos serão criptografados automaticamente.
                            </p>
                            <button
                                type="button"
                                className="px-lg py-sm bg-brand-primary text-white font-semibold rounded-button hover:bg-brand-hover transition-colors flex items-center gap-xs"
                            >
                                <Upload className="w-4 h-4" />
                                Selecionar Arquivos
                            </button>
                        </div>
                    </div>

                    {/* Documents List Header */}
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-neutral-dark">
                            {selectedCategory === 'all' ? 'Todos os Documentos' : documentCategories.find((c) => c.id === selectedCategory)?.label}
                            <span className="text-neutral-medium font-normal ml-sm">({filteredDocuments.length})</span>
                        </h3>
                        <div className="flex items-center gap-sm">
                            <button
                                type="button"
                                onClick={() => setViewMode('list')}
                                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-brand-primary text-white' : 'bg-background-subtle text-neutral-medium hover:bg-neutral-light'
                                    }`}
                            >
                                <List className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setViewMode('grid')}
                                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-brand-primary text-white' : 'bg-background-subtle text-neutral-medium hover:bg-neutral-light'
                                    }`}
                            >
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Documents List */}
                    <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-md' : 'space-y-sm'}>
                        {filteredDocuments.map((doc) => (
                            <div
                                key={doc.id}
                                className="bg-background-pure rounded-card p-lg border border-neutral-light hover:shadow-card transition-all"
                            >
                                <div className={viewMode === 'grid' ? 'space-y-md' : 'flex items-center justify-between'}>
                                    <div className={viewMode === 'grid' ? '' : 'flex items-center gap-md flex-1'}>
                                        <div
                                            className={`w-12 h-12 ${doc.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                                        >
                                            <doc.icon className={`w-6 h-6 ${doc.iconColor}`} />
                                        </div>
                                        <div className={viewMode === 'grid' ? 'mt-md' : ''}>
                                            <div className="flex items-center gap-sm">
                                                <h4 className="font-semibold text-neutral-dark">{doc.name}</h4>
                                                {doc.blockchain && (
                                                    <span className="px-xs py-2xs bg-accent-emerald/10 text-accent-emerald text-xs font-semibold rounded">
                                                        Blockchain
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-sm text-neutral-medium flex items-center gap-md mt-xs">
                                                <span>{doc.size}</span>
                                                <span>•</span>
                                                <span>{doc.pages} {doc.pages === 1 ? 'página' : 'páginas'}</span>
                                                {doc.hash && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="flex items-center gap-2xs font-mono text-xs">
                                                            <Fingerprint className="w-3 h-3" />
                                                            {doc.hash}
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={viewMode === 'grid' ? 'flex items-center justify-between mt-md pt-md border-t border-neutral-light' : 'flex items-center gap-md'}>
                                        {/* Status Badge */}
                                        <span
                                            className={`px-sm py-2xs rounded text-xs font-semibold ${doc.status === 'signed'
                                                    ? 'bg-functional-success/10 text-functional-success'
                                                    : doc.status === 'verified'
                                                        ? 'bg-functional-info/10 text-functional-info'
                                                        : 'bg-functional-warning/10 text-functional-warning'
                                                }`}
                                        >
                                            {doc.status === 'signed'
                                                ? 'Assinado'
                                                : doc.status === 'verified'
                                                    ? 'Verificado'
                                                    : 'Pendente'}
                                        </span>

                                        {/* Actions */}
                                        <div className="flex items-center gap-xs">
                                            <button
                                                type="button"
                                                className="w-9 h-9 hover:bg-background-subtle rounded-lg flex items-center justify-center transition-colors"
                                                title="Visualizar"
                                            >
                                                <Eye className="w-4 h-4 text-neutral-medium" />
                                            </button>
                                            <button
                                                type="button"
                                                className="w-9 h-9 hover:bg-background-subtle rounded-lg flex items-center justify-center transition-colors"
                                                title="Baixar"
                                            >
                                                <Download className="w-4 h-4 text-neutral-medium" />
                                            </button>
                                            <button
                                                type="button"
                                                className="w-9 h-9 hover:bg-functional-error/10 rounded-lg flex items-center justify-center transition-colors"
                                                title="Excluir"
                                            >
                                                <Trash2 className="w-4 h-4 text-functional-error" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
