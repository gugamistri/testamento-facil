'use client'

import { motion } from 'framer-motion'
import { FileCheck, ShieldCheck, Scale, Fingerprint } from 'lucide-react'

const steps = [
    {
        icon: Fingerprint,
        step: '01',
        title: 'Registro de Intenção',
        description: 'Ao criar sua conta, registramos data, hora e seu consentimento. Esse é o primeiro passo para provar que a decisão foi sua, livre e consciente.',
        highlight: 'Dossiê de Intenção'
    },
    {
        icon: FileCheck,
        step: '02',
        title: 'Validação Forense',
        description: 'Você grava um vídeo curto confirmando sua vontade. Isso cria uma prova irrefutável de sanidade e autenticidade, aceita pelo Judiciário.',
        highlight: 'Prova de Sanidade'
    },
    {
        icon: ShieldCheck,
        step: '03',
        title: 'Custódia Ativa',
        description: 'Seu testamento se torna um ativo jurídico vivo: protegido, monitorado e pronto para ser executado automaticamente quando necessário.',
        highlight: 'Ativo Jurídico Vivo'
    },
    {
        icon: Scale,
        step: '04',
        title: 'Execução Garantida',
        description: 'Quando chegar a hora, seus herdeiros recebem acesso de forma segura e documentada, com validade legal reconhecida.',
        highlight: 'Validade Legal'
    }
]

export function LegalJourneySection() {
    return (
        <section className="py-3xl bg-background-subtle">
            <div className="max-w-7xl mx-auto px-lg sm:px-xl lg:px-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-3xl"
                >
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary mb-md block">
                        Infraestrutura de Soberania Pessoal
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-lg">
                        Sua vontade vira lei. <br className="hidden md:block" />
                        Com validade jurídica.
                    </h2>
                    <p className="text-lg text-neutral-medium max-w-2xl mx-auto">
                        Cada etapa do processo gera documentação legal que protege você, sua família e garante que o Judiciário reconheça sua vontade.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
                    {steps.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-background-pure rounded-card p-xl border border-neutral-light/20 relative group hover:border-brand-primary/30 transition-all"
                        >
                            <div className="absolute top-xl right-xl text-6xl font-black text-neutral-light/20 group-hover:text-brand-primary/10 transition-colors">
                                {item.step}
                            </div>
                            <div className="w-14 h-14 bg-brand-pale rounded-2xl flex items-center justify-center mb-lg group-hover:bg-brand-primary transition-all">
                                <item.icon className="w-7 h-7 text-brand-primary group-hover:text-white" />
                            </div>
                            <span className="px-2 py-0.5 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase rounded-full mb-md inline-block">
                                {item.highlight}
                            </span>
                            <h3 className="text-xl font-bold text-neutral-dark mb-md">{item.title}</h3>
                            <p className="text-neutral-medium text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-2xl bg-accent-emerald/5 border border-accent-emerald/20 rounded-card p-xl flex flex-col md:flex-row items-center gap-lg"
                >
                    <div className="w-16 h-16 bg-accent-emerald/20 rounded-2xl flex items-center justify-center shrink-0">
                        <Scale className="w-8 h-8 text-accent-emerald" />
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-neutral-dark mb-xs">Reconhecido pelo Judiciário Brasileiro</h4>
                        <p className="text-sm text-neutral-medium">
                            Nosso processo segue as normas do Código Civil, da LGPD e das resoluções do CNJ sobre documentos digitais.
                            A combinação de assinatura ICP-Brasil, vídeo de validação e registro imutável cria uma prova legal robusta.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
