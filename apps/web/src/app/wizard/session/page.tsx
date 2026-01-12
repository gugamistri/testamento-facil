'use client'

import { useWizardStore } from '@/store/useWizardStore'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, CheckCircle2, Mic, Play, Shield, Video, Volume2, XCircle, Pause, RotateCcw, Check, Info } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

type SessionState = 'WAITING_ROOM' | 'RECORDING' | 'FINISHED'

export default function VideoSessionPage() {
    const { personalData, assets, beneficiaries } = useWizardStore()
    const [state, setState] = useState<SessionState>('WAITING_ROOM')
    const [cameraReady, setCameraReady] = useState(false)
    const [micReady, setMicReady] = useState(false)
    const [isRecording, setIsRecording] = useState(false)
    const [timer, setTimer] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)
    const teleprompterRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (state === 'WAITING_ROOM' && !cameraReady) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream
                    }
                    setCameraReady(true)
                    setMicReady(true)
                })
                .catch(() => {
                    console.error('Hardware access denied')
                })
        }
    }, [state, cameraReady])

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isRecording) {
            interval = setInterval(() => {
                setTimer((t) => t + 1)
                if (teleprompterRef.current) {
                    teleprompterRef.current.scrollTop += 0.5 // Subtle scroll
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isRecording])

    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60)
        const sec = seconds % 60
        return `${min}:${sec.toString().padStart(2, '0')}`
    }

    const renderRecordingUI = () => (
        <div className="flex-1 flex overflow-hidden bg-neutral-dark relative">
            {/* Main Video Area */}
            <div className="flex-1 relative bg-black flex items-center justify-center">
                <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover mirror opacity-80" />

                {/* Lawyer Float Overlay */}
                <div className="absolute top-lg right-lg w-64 aspect-video bg-neutral-light/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden shadow-2xl z-20">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center mb-sm">
                            <User className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Gravando Dr. Marcos</span>
                    </div>
                    <div className="absolute bottom-sm left-sm px-sm py-2xs bg-black/40 rounded-full text-[10px] text-white">
                        Advogado Validador
                    </div>
                </div>

                {/* Recording Status Bar */}
                <div className="absolute top-lg left-lg flex items-center gap-md z-20">
                    <div className="flex items-center gap-sm px-md py-xs bg-error-red rounded-full text-white shadow-lg animate-pulse">
                        <div className="w-2.5 h-2.5 bg-background rounded-full" />
                        <span className="text-xs font-black uppercase tracking-widest">Gravando</span>
                    </div>
                    <div className="px-md py-xs bg-black/50 backdrop-blur-md rounded-full text-white font-mono text-sm border border-white/10">
                        {formatTime(timer)}
                    </div>
                </div>
            </div>

            {/* Teleprompter / Script Sidebar */}
            <aside className="w-96 bg-neutral-dark border-l border-white/10 flex flex-col z-30 shadow-2xl">
                <div className="p-xl border-b border-white/10 flex items-center justify-between bg-neutral-dark/50">
                    <h3 className="text-white font-bold text-lg flex items-center gap-sm">
                        <FileText className="w-5 h-5 text-brand-gold" />
                        Roteiro da Declaração
                    </h3>
                    <div className="p-xs bg-background/10 rounded-full text-white/50 hover:text-white cursor-pointer">
                        <Info className="w-4 h-4" />
                    </div>
                </div>

                <div
                    ref={teleprompterRef}
                    className="flex-1 overflow-y-auto p-xl space-y-xl custom-scrollbar-dark scroll-smooth opacity-90 hover:opacity-100 transition-opacity"
                >
                    <div className="space-y-md">
                        <span className="text-brand-gold font-black text-[10px] uppercase tracking-widest">Bloco 1: Identificação</span>
                        <p className="text-xl text-white font-medium leading-relaxed">
                            "Eu, <span className="text-brand-gold font-bold">{personalData.fullName}</span>, portador do CPF <span className="text-brand-gold font-bold">{personalData.cpf}</span>, apresento neste momento meu documento oficial à câmera."
                        </p>
                        <div className="p-md bg-background/5 border border-white/10 rounded-lg text-xs text-white/40 italic">
                            Aproxime seu RG ou CNH da câmera por 5 segundos.
                        </div>
                    </div>

                    <div className="space-y-md">
                        <span className="text-brand-gold font-black text-[10px] uppercase tracking-widest">Bloco 2: Capacidade</span>
                        <p className="text-xl text-white font-medium leading-relaxed">
                            "Declaro estar em pleno gozo de minhas faculdades mentais, agindo por livre e espontânea vontade, sem qualquer coação."
                        </p>
                    </div>

                    <div className="space-y-md">
                        <span className="text-brand-gold font-black text-[10px] uppercase tracking-widest">Bloco 3: Confirmação</span>
                        <p className="text-xl text-white font-medium leading-relaxed">
                            "Confirmo que meu patrimônio, incluindo <span className="text-brand-gold font-bold">{assets.realEstate.length} imóveis</span> e ativos listados anteriormente, deve ser distribuído entre meus beneficiários."
                        </p>
                    </div>

                    <div className="space-y-md opacity-40">
                        <span className="text-brand-gold font-black text-[10px] uppercase tracking-widest">Bloco 4: Encerramento</span>
                        <p className="text-xl text-white font-medium leading-relaxed">
                            "Reconheço a validade deste testamento digital e assino eletronicamente conforme a lei brasileira."
                        </p>
                    </div>
                </div>

                {/* Script Controls */}
                <div className="p-xl bg-black/40 border-t border-white/10 space-y-lg">
                    {!isRecording ? (
                        <button
                            onClick={() => setIsRecording(true)}
                            type="button"
                            className="w-full h-14 bg-error-red text-white rounded-full font-black text-sm uppercase tracking-widest shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-md"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            Iniciar Gravação
                        </button>
                    ) : (
                        <div className="flex gap-md">
                            <button
                                onClick={() => setIsRecording(false)}
                                type="button"
                                className="flex-1 h-14 bg-background/10 text-white rounded-full font-bold text-sm flex items-center justify-center gap-sm hover:bg-background/20 transition-all"
                            >
                                <Pause className="w-5 h-5" />
                                Pausar
                            </button>
                            <button
                                onClick={() => setState('FINISHED')}
                                type="button"
                                className="flex-1 h-14 bg-functional-success text-white rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center gap-sm shadow-lg hover:brightness-110 transition-all"
                            >
                                <Check className="w-5 h-5" />
                                Finalizar
                            </button>
                        </div>
                    )}
                    <p className="text-[10px] text-white/30 text-center flex items-center justify-center gap-xs">
                        <Shield className="w-3 h-3" />
                        Gravação protegida com segurança máxima
                    </p>
                </div>
            </aside>
        </div>
    )

    const renderFinished = () => (
        <div className="flex-1 flex flex-col items-center justify-center p-2xl text-center bg-background">
            <div className="w-24 h-24 bg-functional-success/10 text-functional-success rounded-full flex items-center justify-center mb-xl">
                <CheckCircle2 className="w-12 h-12" />
            </div>
            <h1 className="text-[36px] font-bold text-neutral-dark mb-md">Sessão Concluída!</h1>
            <p className="text-neutral-medium max-w-lg mx-auto text-lg mb-2xl leading-relaxed">
                Seu vídeo foi processado, criptografado e registrado com sucesso.
                O Dr. Marcos Oliveira emitirá a declaração de validade em até 2 horas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md w-full max-w-md">
                <div className="p-lg bg-background-subtle rounded-card border border-neutral-light/30">
                    <p className="text-[10px] text-neutral-medium uppercase tracking-widest font-black mb-xs">Hash da Sessão</p>
                    <p className="text-[13px] font-mono text-neutral-dark truncate">f7a8...92c4e</p>
                </div>
                <div className="p-lg bg-background-subtle rounded-card border border-neutral-light/30">
                    <p className="text-[10px] text-neutral-medium uppercase tracking-widest font-black mb-xs">Status Jurídico</p>
                    <p className="text-[13px] font-bold text-brand-primary flex items-center justify-center gap-xs">
                        <Shield className="w-3.5 h-3.5" />
                        Em Análise
                    </p>
                </div>
            </div>
            <Link href="/" className="btn-primary mt-3xl !w-auto min-w-[280px]">
                Voltar para a Home
            </Link>
        </div>
    )

    return (
        <div className="min-h-screen bg-background-subtle flex flex-col overflow-hidden">
            {/* Minimalist Header */}
            <header className={`px-lg h-2xl border-b border-neutral-light/20 z-50 flex items-center justify-between transition-colors duration-500 ${state === 'RECORDING' ? 'bg-neutral-dark text-white border-white/5' : 'bg-background text-neutral-dark'}`}>
                <div className="flex items-center gap-sm">
                    <div className="w-6 h-6 bg-brand-primary rounded-badge flex items-center justify-center shadow-lg">
                        <span className="text-white font-black text-[10px]">T</span>
                    </div>
                    <span className="font-bold text-sm">Testamento <span className="text-brand-primary">Fácil</span></span>
                </div>
                <div className="flex items-center gap-md">
                    {state === 'RECORDING' && (
                        <div className="flex items-center gap-sm px-md py-xs bg-error-red/10 rounded-full text-error-red">
                            <div className="w-2 h-2 bg-error-red rounded-full" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Ao Vivo / Gravando</span>
                        </div>
                    )}
                    <Link href="/wizard" className={`text-xs font-semibold ${state === 'RECORDING' ? 'text-white/50 hover:text-white' : 'text-neutral-medium hover:text-neutral-dark'}`}>Abandonar Sessão</Link>
                </div>
            </header>

            <AnimatePresence mode="wait">
                {state === 'WAITING_ROOM' && (
                    <motion.div
                        key="waiting"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex-1 flex flex-col justify-center"
                    >
                        {/* Previous implementation of renderWaitingRoom here (simplified for this turn) */}
                        <div className="max-w-4xl mx-auto py-2xl px-lg text-center">
                            <h1 className="text-[32px] font-bold mb-xl">Pronto para a Validação?</h1>
                            <div className="aspect-video bg-neutral-dark rounded-[32px] overflow-hidden mb-2xl shadow-elevation relative group">
                                <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover mirror" />
                                {!cameraReady && <div className="absolute inset-0 flex items-center justify-center text-white/50"><Video className="w-12 h-12 animate-pulse" /></div>}
                            </div>
                            <button
                                type="button"
                                onClick={() => setState('RECORDING')}
                                disabled={!cameraReady}
                                className="btn-primary !h-[64px] !rounded-full text-lg w-full max-w-sm mx-auto"
                            >
                                Iniciar Sessão Agora
                            </button>
                        </div>
                    </motion.div>
                )}

                {state === 'RECORDING' && (
                    <motion.div
                        key="recording"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-1 flex flex-col"
                    >
                        {renderRecordingUI()}
                    </motion.div>
                )}

                {state === 'FINISHED' && (
                    <motion.div
                        key="finished"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex-1 flex flex-col"
                    >
                        {renderFinished()}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Styled Icons imports for safety */}
            <style jsx global>{`
          .mirror { transform: scaleX(-1); }
          .custom-scrollbar-dark::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar-dark::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar-dark::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
          .custom-scrollbar-dark::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
       `}</style>
        </div>
    )
}

// Icons needed for this component
import { FileText, User } from 'lucide-react'
