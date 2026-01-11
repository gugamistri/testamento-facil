import { useWizardStore } from '@/store/useWizardStore'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, ArrowLeft, CheckCircle2, Download, FileCheck, FileText, Fingerprint, Lock, Shield } from 'lucide-react'
import { useState } from 'react'
import { EnvelopingProcess } from '@/components/dashboard/EnvelopingProcess'

type SignatureState = 'REVIEW' | 'CERTIFICATE_CHECK' | 'SIGNING' | 'ENVELOPING' | 'SUCCESS'

export function Step9DigitalSignature() {
    const { personalData, assets, beneficiaries, prevStep } = useWizardStore()
    const [state, setState] = useState<SignatureState>('REVIEW')

    const simulateSigning = () => {
        setState('SIGNING')
        setTimeout(() => {
            setState('ENVELOPING')
        }, 2500)
    }

    const renderReview = () => (
        <div className="space-y-xl">
            <div className="p-xl bg-brand-pale/30 border border-brand-primary/20 rounded-[20px] flex gap-lg items-start">
                <div className="w-12 h-12 bg-background rounded-badge flex items-center justify-center text-brand-primary shadow-sm">
                    <FileText className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-neutral-dark mb-xs">Revisão Final do Documento</h3>
                    <p className="text-sm text-neutral-medium leading-relaxed">
                        Este é o documento gerado com base em suas declarações e na validação por vídeo.
                        Por favor, confira todos os detalhes antes de assinar com seu certificado ICP-Brasil.
                    </p>
                </div>
            </div>

            <div className="bg-background border border-neutral-light/50 rounded-card shadow-sm p-xl max-h-[400px] overflow-y-auto custom-scrollbar">
                <div className="space-y-lg text-[14px] text-neutral-dark leading-loose font-serif">
                    <h4 className="text-center font-bold text-lg mb-xl uppercase tracking-widest text-neutral-medium border-b pb-md">Testamento Particular Qualificado</h4>
                    <p>
                        Eu, <strong>{personalData.fullName}</strong>, portador do CPF {personalData.cpf}, nacionalidade {personalData.nationality},
                        estado civil {personalData.maritalStatus}, residente e domiciliado conforme cadastro...
                    </p>
                    <p>
                        <strong>DA DISPOSIÇÃO DE BENS:</strong> Declaro que possuo {assets.realEstate.length} imóveis e ativos financeiros
                        que devem ser partilhados conforme os seguintes percentuais:
                    </p>
                    <ul className="list-disc pl-lg space-y-xs font-sans text-[13px]">
                        {beneficiaries.map(b => (
                            <li key={b.id}><strong>{b.share}%</strong> para {b.name} ({b.relationship})</li>
                        ))}
                    </ul>
                    <p>
                        Este documento foi validado através de prova forense em vídeo em conformidade com o Art. 1.876 do Código Civil.
                    </p>
                </div>
            </div>

            <button
                onClick={() => setState('CERTIFICATE_CHECK')}
                type="button"
                className="btn-primary w-full h-16 text-lg"
            >
                Prosseguir para Assinatura
                <Fingerprint className="w-6 h-6" />
            </button>
        </div>
    )

    const renderCertificateCheck = () => (
        <div className="text-center py-xl space-y-xl">
            <div className="w-20 h-20 bg-brand-pale rounded-full flex items-center justify-center text-brand-primary mx-auto mb-lg">
                <Fingerprint className="w-10 h-10 animate-pulse" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-neutral-dark mb-sm">Detectando Certificado Digital</h2>
                <p className="text-neutral-medium max-w-sm mx-auto">
                    Por favor, conecte seu Token ou Cartão (A3) ou certifique-se de que seu certificado A1 está instalado.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md max-w-md mx-auto">
                <div className="p-xl bg-background border border-neutral-light rounded-card flex flex-col items-center gap-sm">
                    <CheckCircle2 className="w-8 h-8 text-functional-success" />
                    <span className="font-bold text-sm">e-CPF Detectado</span>
                    <span className="text-[11px] text-neutral-medium">{personalData.fullName.split(' ')[0]}... (Válido até 2027)</span>
                </div>
                <div className="p-xl bg-background border border-neutral-light rounded-card flex flex-col items-center gap-sm opacity-50">
                    <Lock className="w-8 h-8" />
                    <span className="font-bold text-sm text-neutral-medium">Nenhum outro encontrado</span>
                </div>
            </div>

            <div className="flex flex-col gap-md pt-xl">
                <button
                    onClick={simulateSigning}
                    type="button"
                    className="btn-premium h-[64px] !rounded-full shadow-elevation"
                >
                    Assinar Agora com e-CPF
                </button>
                <button type="button" className="text-sm font-semibold text-brand-primary hover:underline">
                    Não tenho certificado? Saiba como obter.
                </button>
            </div>
        </div>
    )

    const renderSigning = () => (
        <div className="flex flex-col items-center justify-center py-3xl text-center space-y-xl">
            <div className="relative">
                <div className="w-24 h-24 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
                <Fingerprint className="w-10 h-10 text-brand-primary absolute inset-0 m-auto" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-neutral-dark mb-xs">Assinando Digitalmente...</h2>
                <p className="text-neutral-medium">Comunicando com a autoridade certificadora (ICP-Brasil)</p>
            </div>
            <div className="flex items-center gap-sm px-lg py-sm bg-background-subtle rounded-full border border-neutral-light/30">
                <Shield className="w-4 h-4 text-brand-primary" />
                <span className="text-[12px] font-mono text-neutral-dark">Criando hash SHA-256 e registrando em blockchain</span>
            </div>
        </div>
    )

    const renderSuccess = () => (
        <div className="text-center py-xl space-y-xl">
            <div className="w-24 h-24 bg-functional-success text-white rounded-full flex items-center justify-center mx-auto shadow-elevation animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
            </div>
            <div>
                <h2 className="text-[32px] font-bold text-neutral-dark mb-sm">Testamento Protegido!</h2>
                <p className="text-neutral-medium max-w-md mx-auto">
                    Seu testamento foi assinado e registrado com validade jurídica plena. Seus herdeiros estão agora seguros.
                </p>
            </div>

            <div className="bg-background-dark p-xl rounded-[24px] text-left space-y-lg relative overflow-hidden max-w-md mx-auto shadow-2xl">
                <div className="flex items-center gap-md">
                    <div className="p-sm bg-background/10 rounded-lg">
                        <FileCheck className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                        <p className="text-xs text-white/50 uppercase font-black">Documento Assinado</p>
                        <p className="text-sm text-white font-bold">testamento_{personalData.cpf}.pdf</p>
                    </div>
                </div>

                <div className="pt-md border-t border-white/10 flex justify-between items-center">
                    <button type="button" className="text-brand-gold text-xs font-black flex items-center gap-sm hover:brightness-110 transition-all">
                        <Download className="w-4 h-4" />
                        BAIXAR COMPROVANTE
                    </button>
                    <button type="button" className="text-white/70 text-xs font-bold hover:text-white flex items-center gap-xs">
                        <Shield className="w-3 h-3" />
                        VER NO EXPLORER
                    </button>
                </div>
            </div>

            <div className="pt-xl flex gap-md max-w-sm mx-auto">
                <button type="button" className="btn-secondary flex-1">Voltar ao Painel</button>
                <button type="button" className="btn-primary flex-1">Gerenciar Acessos</button>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col h-full">
            {state === 'REVIEW' && (
                <div className="mb-md">
                    <h2 className="text-[26px] leading-[34px] font-bold text-neutral-dark mb-sm">Assinatura Digital</h2>
                    <p className="text-neutral-medium text-[15px]">O passo final para a segurança jurídica total.</p>
                </div>
            )}

            <div className="flex-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={state}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {state === 'REVIEW' && renderReview()}
                        {state === 'CERTIFICATE_CHECK' && renderCertificateCheck()}
                        {state === 'SIGNING' && renderSigning()}
                        {state === 'ENVELOPING' && <EnvelopingProcess onComplete={() => setState('SUCCESS')} />}
                        {state === 'SUCCESS' && renderSuccess()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {state === 'REVIEW' && (
                <div className="pt-xl border-t border-neutral-light/20 flex justify-between items-center mt-xl">
                    <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center gap-sm text-neutral-medium font-semibold hover:text-neutral-dark transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Anterior
                    </button>
                </div>
            )}
        </div>
    )
}
