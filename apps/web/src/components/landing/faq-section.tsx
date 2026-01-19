'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Globe, Lock, Scale, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Um testamento digital tem validade jurídica?',
    answer:
      'Sim. Utilizamos assinaturas com certificação ICP-Brasil e registro em Blockchain, que garantem a autenticidade e integridade do documento, seguindo as normas vigentes do Código Civil Brasileiro.',
    icon: ShieldCheck,
  },
  {
    question: 'Como funciona a custódia das chaves?',
    answer:
      'Utilizamos um sistema de fragmentação de chaves. Uma parte fica com você, outra com o advogado validador e uma terceira em custódia segura. O testamento só é "aberto" após a confirmação do gatilho de óbito via SERPRO.',
    icon: Lock,
  },
  {
    question: 'Posso alterar meus beneficiários quando quiser?',
    answer:
      'Diferente do cartório tradicional, onde cada alteração custa uma taxa integral, em nossa plataforma você pode atualizar seus ativos e beneficiários ilimitadamente dentro da sua assinatura anual.',
    icon: Globe,
  },
  {
    question: 'O que acontece se um herdeiro contestar?',
    answer:
      'Nossa plataforma inclui um vídeo de prova de vida e um parecer jurídico assinado por um advogado parceiro, o que reduz drasticamente as chances de contestação por incapacidade mental ou vício de vontade.',
    icon: Scale,
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  return (
    <section className="py-3xl bg-background-section" id="faq">
      <div className="max-w-4xl mx-auto px-lg sm:px-xl lg:px-2xl relative">
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="text-center mb-xl">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary mb-md block">Esclarecimentos Protocolares</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark tracking-tight mb-lg">
            Dúvidas Frequentes.
          </h2>
          <p className="text-lg text-neutral-medium max-w-2xl mx-auto leading-relaxed">
            Tudo o que você precisa saber sobre a segurança forense e legalidade do seu testamento digital Testamento Fácil™.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-md">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-brand-primary/20 transition-all duration-500 group"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === faq.question ? null : faq.question)}
                className="w-full flex items-center justify-between p-lg text-left focus:outline-none"
              >
                <div className="flex items-center gap-lg">
                  <div className="p-xs bg-white/5 rounded-2xl text-brand-primary border border-white/10 group-hover:bg-brand-primary group-hover:text-background-pure transition-all duration-500">
                    <faq.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-white text-lg tracking-tight group-hover:translate-x-1 transition-transform">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === faq.question ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-white/20 group-hover:text-white" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === faq.question && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="px-lg pb-lg text-white/60 leading-relaxed pl-[4.5rem] font-medium text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-2xl glass-panel p-xl text-center border-brand-primary/10">
          <h3 className="text-2xl font-black text-white mb-sm tracking-tight">
            Ainda tem dúvidas sistêmicas?
          </h3>
          <p className="text-white/40 mb-xl font-medium">
            Fale com um advogado especialista em soberania digital agora mesmo.
          </p>
          <button type="button" className="btn-primary h-14 px-xl font-black uppercase tracking-widest text-xs">
            Agendar Consultoria Gratuita
          </button>
        </div>
      </div>
    </section>
  )
}
