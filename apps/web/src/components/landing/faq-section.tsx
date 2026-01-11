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
    <section className="py-3xl bg-background-pure" id="faq">
      <div className="max-w-4xl mx-auto px-lg sm:px-xl lg:px-2xl">
        <div className="text-center mb-xl">
          <h2 className="text-[26px] leading-[34px] font-bold text-neutral-dark sm:text-[32px] sm:leading-[40px] tracking-tight">
            Dúvidas Frequentes
          </h2>
          <p className="mt-xs text-[17px] leading-[28px] text-neutral-medium max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre a segurança e legalidade do seu testamento digital.
          </p>
        </div>

        <div className="space-y-md">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border border-neutral-light rounded-card overflow-hidden hover:border-brand-primary/30 transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === faq.question ? null : faq.question)} // Fixed logic to use question as key
                className="w-full flex items-center justify-between p-lg text-left bg-background-pure focus:outline-none"
              >
                <div className="flex items-center gap-sm">
                  <div className="p-xs bg-brand-pale rounded-badge text-brand-primary">
                    <faq.icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-neutral-dark text-[17px]">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === faq.question ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-neutral-medium" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === faq.question && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-lg pb-lg text-neutral-medium leading-relaxed pl-[4rem]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-2xl bg-background-subtle rounded-card p-xl text-center border border-neutral-light/50">
          <h3 className="text-[22px] leading-[30px] font-semibold text-neutral-dark mb-sm">
            Ainda tem dúvidas?
          </h3>
          <p className="text-neutral-medium mb-xl">
            Fale com um advogado especialista agora mesmo, sem custo.
          </p>
          <button type="button" className="btn-secondary mx-auto">
            Agendar Consultoria Gratuita
          </button>
        </div>
      </div>
    </section>
  )
}
