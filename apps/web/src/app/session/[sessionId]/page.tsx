'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import {
    Mic, MicOff, Video, VideoOff,
    PhoneOff, Radio, ShieldCheck,
    MapPin, Clock, FileText
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReviewModal } from '@/components/marketplace/ReviewModal'

export default function LegalSessionPage() {
    const params = useParams()
    const { user } = useUser()
    const sessionId = params.sessionId as string

    // Media State
    const videoRef = useRef<HTMLVideoElement>(null)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const chunksRef = useRef<Blob[]>([])

    const [stream, setStream] = useState<MediaStream | null>(null)
    const [isMicOn, setIsMicOn] = useState(true)
    const [isCamOn, setIsCamOn] = useState(true)
    const [isRecording, setIsRecording] = useState(false)
    const [recordingTime, setRecordingTime] = useState(0)

    // Watermark Data
    const [location, setLocation] = useState<string>('Localizando...')
    const [currentTime, setCurrentTime] = useState<string>('')

    // Initialize Camera
    useEffect(() => {
        const initMedia = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true
                })
                setStream(mediaStream)
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream
                }
            } catch (err) {
                console.error("Error accessing media devices:", err)
                alert("Não foi possível acessar câmera/microfone. Verifique as permissões.")
            }
        }

        initMedia()

        // Clock Ticker
        const interval = setInterval(() => {
            setCurrentTime(new Date().toISOString())
        }, 1000)

        // Geolocation Mock/Real
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => setLocation(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`),
                () => setLocation('Localização Indisponível')
            )
        }

        return () => {
            clearInterval(interval)
            // Cleanup stream
            stream?.getTracks().forEach(track => track.stop())
        }
    }, [])

    // Recording Logic
    const startRecording = useCallback(() => {
        if (!stream) return

        const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' })
        mediaRecorderRef.current = recorder
        chunksRef.current = []

        recorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                chunksRef.current.push(event.data)
            }
        }

        recorder.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: 'video/webm' })
            // Here we would upload the blob
            console.log('Recording finished, size:', blob.size)
            alert('Gravação concluída e pronta para upload seguro.')
        }

        recorder.start(1000) // Collect chunks every second
        setIsRecording(true)
    }, [stream])

    const stopRecording = useCallback(() => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop()
            setIsRecording(false)
            setRecordingTime(0)
        }
    }, [isRecording])

    // Recording Timer
    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isRecording) {
            interval = setInterval(() => {
                setRecordingTime(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isRecording])

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const [showReview, setShowReview] = useState(false)

    // End Session Handler
    const handleEndSession = () => {
        // Stop any recording
        stopRecording()
        // Stop stream tracks
        stream?.getTracks().forEach(track => track.stop())
        // Show Review Modal
        setShowReview(true)
    }

    const handleReviewSubmit = async (rating: number, comment: string) => {
        console.log('Submitting review:', { rating, comment, sessionId })
        // In real app: await fetch('/api/reviews', ...)

        // Redirect after fake delay
        setTimeout(() => {
            window.location.href = '/dashboard'
        }, 1000)
    }

    // Toggle Handlers
    const toggleMic = () => {
        if (stream) {
            stream.getAudioTracks().forEach(track => track.enabled = !isMicOn)
            setIsMicOn(!isMicOn)
        }
    }

    const toggleCam = () => {
        if (stream) {
            stream.getVideoTracks().forEach(track => track.enabled = !isCamOn)
            setIsCamOn(!isCamOn)
        }
    }

    return (
        <div className="h-screen bg-neutral-900 flex flex-col relative overflow-hidden text-white">
            {/* Header / Watermark Overlay */}
            <div className="absolute top-0 left-0 w-full p-4 z-20 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-start pointer-events-none">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-red-500 font-bold animate-pulse">
                        <Radio className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-widest">Sessão Segura Ativa</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/70 font-mono">
                        <ShieldCheck className="w-3 h-3" />
                        <span>ID: {sessionId}</span>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-1 text-xs font-mono text-white/70">
                    <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{currentTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span>{location}</span>
                    </div>
                </div>
            </div>

            {/* Main Video Area */}
            <div className="flex-1 relative flex items-center justify-center bg-black">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    className="w-full h-full object-cover opacity-90"
                    playsInline
                />

                {!isCamOn && (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                        <div className="w-24 h-24 rounded-full bg-neutral-700 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white/30">
                                {user?.firstName?.charAt(0) || 'U'}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Controls Bar */}
            <div className="h-24 bg-neutral-900 border-t border-white/10 flex items-center justify-center gap-4 px-8 z-20">
                <button
                    onClick={toggleMic}
                    className={cn(
                        "p-4 rounded-full transition-all",
                        isMicOn ? "bg-white/10 hover:bg-white/20 text-white" : "bg-red-500 hover:bg-red-600 text-white"
                    )}
                >
                    {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
                </button>

                <button
                    onClick={toggleCam}
                    className={cn(
                        "p-4 rounded-full transition-all",
                        isCamOn ? "bg-white/10 hover:bg-white/20 text-white" : "bg-red-500 hover:bg-red-600 text-white"
                    )}
                >
                    {isCamOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
                </button>

                {/* Recording Button */}
                {!isRecording ? (
                    <button
                        onClick={startRecording}
                        className="px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-primary-dark text-white font-bold flex items-center gap-2 transition-all mx-4"
                    >
                        <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                        Gravar Validação
                    </button>
                ) : (
                    <button
                        onClick={stopRecording}
                        className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold flex items-center gap-2 transition-all mx-4 min-w-[160px]"
                    >
                        <div className="w-3 h-3 rounded-sm bg-white" />
                        Parar ({formatTime(recordingTime)})
                    </button>
                )}

                <button
                    className="p-4 rounded-full bg-red-500 hover:bg-red-600 text-white ml-auto lg:ml-0"
                    onClick={handleEndSession}
                >
                    <PhoneOff className="w-6 h-6" />
                </button>
            </div>

            {/* Script Sidebar (Overlay) - Example for Lawyers */}
            <div className="absolute right-4 top-24 w-80 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 hidden lg:block">
                <div className="flex items-center gap-2 mb-4 text-brand-primary font-bold uppercase tracking-widest text-xs">
                    <FileText className="w-4 h-4" />
                    Roteiro de Leitura
                </div>
                <div className="text-sm text-white/80 space-y-4 font-serif leading-relaxed h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    <p>
                        "Eu, <span className="text-brand-gold font-bold">{user?.fullName || '[NOME_CLIENTE]'}</span>, em pleno gozo de minhas faculdades mentais, e livre de qualquer coação..."
                    </p>
                    <p>
                        "Declaro que este vídeo representa minha última vontade e testamento, revogando todas as disposições anteriores."
                    </p>
                    <p>
                        "Decido que 50% dos meus bens disponíveis serão destinados a..."
                    </p>
                    <p className="text-white/40 italic">
                        (O Advogado deve guiar a leitura do documento completo exibido na tela compartilhada).
                    </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-center text-white/40">
                    Documento Hash: 0x7f83...a29b
                </div>
            </div>

            <ReviewModal
                isOpen={showReview}
                onClose={() => window.location.href = '/dashboard'} // Force leave if closed without submitting
                onSubmit={handleReviewSubmit}
                targetName="Dr. Advogado Exemplo" // Placeholder, in real app fetch from session data
                targetRole="LAWYER"
            />
        </div>
    )
}
