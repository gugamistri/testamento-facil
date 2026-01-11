'use client'

import { useWizardStore } from '@/store/useWizardStore'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Check, Clock, Video } from 'lucide-react'
import { useState } from 'react'

const AVAILABLE_SLOTS = [
    'Janeiro 15, 2026 às 09:00',
    'Janeiro 15, 2026 às 10:30',
    'Janeiro 15, 2026 às 14:00',
    'Janeiro 16, 2026 às 09:00',
    'Janeiro 16, 2026 às 11:00',
    'Janeiro 16, 2026 às 16:30',
]

export function Step7VideoScheduling() {
    const { scheduleVideoSession, prevStep, nextStep } = useWizardStore()
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

    const handleFinish = () => {
        console.log('Step7: handleFinish called', { selectedSlot });
        if (selectedSlot) {
            try {
                scheduleVideoSession(selectedSlot)
                console.log('Step7: Scheduled, moving next');
                nextStep()
            } catch (error) {
                console.error('Step7 Error:', error);
                alert('Erro ao agendar: ' + (error as Error).message);
            }
        } else {
            console.warn('Step7: No slot selected');
        }
    }

    return (
        <div className="flex flex-col h-full">
            <div className="mb-xl text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-brand-pale rounded-full flex items-center justify-center text-brand-primary mx-auto mb-lg shadow-sm">
                    <Video className="w-8 h-8" />
                </div>
                <h2 className="text-[26px] leading-[34px] font-bold text-neutral-dark mb-sm">
                    Agende sua Validação por Vídeo
                </h2>
                <p className="text-neutral-medium text-[15px]">
                    Para garantir a validade jurídica, um advogado especialista revisará seu testamento com você em uma breve chamada de vídeo (15-20 min).
                </p>
            </div>

            <div className="flex-1 max-w-2xl mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md py-lg">
                    {AVAILABLE_SLOTS.map((slot) => {
                        const isSelected = selectedSlot === slot
                        return (
                            <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedSlot(slot)}
                                className={`flex items-center justify-between p-lg rounded-card border-2 transition-all text-left ${isSelected
                                    ? 'border-brand-primary bg-brand-pale/30 ring-2 ring-brand-primary/10'
                                    : 'border-neutral-light/30 bg-background hover:border-brand-primary/50'
                                    }`}
                            >
                                <div className="flex items-center gap-md">
                                    <div className={`w-8 h-8 rounded-badge flex items-center justify-center ${isSelected ? 'bg-brand-primary text-white' : 'bg-background-subtle text-neutral-medium'}`}>
                                        <Calendar className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className={`block text-sm font-bold ${isSelected ? 'text-brand-primary' : 'text-neutral-dark'}`}>
                                            {slot.split(' às ')[0]}
                                        </span>
                                        <span className="text-[12px] text-neutral-medium flex items-center gap-xs">
                                            <Clock className="w-3 h-3" />
                                            {slot.split(' às ')[1]}
                                        </span>
                                    </div>
                                </div>
                                {isSelected && (
                                    <div className="bg-brand-primary rounded-full p-xs">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                )}
                            </button>
                        )
                    })}
                </div>

                <div className="mt-xl p-lg bg-background-subtle rounded-card border border-neutral-light/20 flex gap-sm items-start">
                    <Video className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <div className="text-[13px] text-neutral-medium leading-relaxed">
                        <strong>Importante:</strong> Você receberá o link da sala virtual por e-mail 30 minutos antes do horário agendado. Tenha seu RG ou CNH original em mãos.
                    </div>
                </div>
            </div>

            <div className="pt-2xl border-t border-neutral-light/20 flex justify-between items-center mt-xl">
                <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-sm text-neutral-medium font-semibold hover:text-neutral-dark transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Anterior
                </button>

                <button
                    type="button"
                    onClick={handleFinish}
                    disabled={!selectedSlot}
                    className={`btn-primary !w-auto min-w-[240px] ${!selectedSlot ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Confirmar Agendamento
                    <Check className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
