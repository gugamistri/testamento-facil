'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ReviewModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (rating: number, comment: string) => void
    targetName: string
    targetRole: 'LAWYER' | 'CLIENT'
}

export function ReviewModal({ isOpen, onClose, onSubmit, targetName, targetRole }: ReviewModalProps) {
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)
    const [comment, setComment] = useState('')

    const handleSubmit = () => {
        if (rating === 0) return
        onSubmit(rating, comment)
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-light/10 text-neutral-medium transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-black text-neutral-dark mb-2">Como foi sua experiência?</h2>
                            <p className="text-neutral-medium">
                                Avalie o atendimento de <span className="font-bold text-brand-primary">{targetName}</span>
                            </p>
                        </div>

                        {/* Star Rating */}
                        <div className="flex justify-center gap-2 mb-8">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    onClick={() => setRating(star)}
                                    className="p-1 transition-transform hover:scale-110 focus:outline-none"
                                >
                                    <Star
                                        className={cn(
                                            "w-10 h-10 transition-colors",
                                            star <= (hoverRating || rating)
                                                ? "fill-brand-gold text-brand-gold"
                                                : "fill-neutral-light/20 text-neutral-light"
                                        )}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Comment Area */}
                        <div className="mb-8">
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder={targetRole === 'LAWYER' ? "O advogado foi claro? Tirou suas dúvidas?" : "O cliente estava preparado? Houve algum problema?"}
                                className="w-full h-32 p-4 rounded-2xl bg-background-subtle border border-neutral-light/30 resize-none focus:outline-none focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 transition-all text-sm"
                            />
                        </div>

                        {/* Submit Action */}
                        <button
                            onClick={handleSubmit}
                            disabled={rating === 0}
                            className="w-full h-14 bg-brand-primary hover:bg-brand-primary-dark disabled:bg-neutral-light disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all shadow-button active:scale-[0.98]"
                        >
                            Enviar Avaliação
                        </button>

                        {rating > 0 && rating < 5 && (
                            <p className="text-xs text-center text-neutral-medium mt-4">
                                Seu feedback ajuda a manter a qualidade da comunidade Testamento Fácil.
                            </p>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
