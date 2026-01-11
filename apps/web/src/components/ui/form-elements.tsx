'use client'

import { type ClassValue, clsx } from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  id?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full space-y-xs">
        {label && (
          <label htmlFor={inputId} className="block text-[13px] font-medium text-neutral-dark">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'w-full h-[56px] px-lg rounded-[10px] border-[1.5px] bg-background text-neutral-dark placeholder:text-neutral-medium transition-all focus:outline-none focus:border-[2.5px] focus:border-brand-primary disabled:bg-neutral-light/10 disabled:text-neutral-medium',
            error ? 'border-error-red' : 'border-neutral-light',
            className
          )}
          {...props}
        />
        {error ? (
          <p className="text-[12px] font-medium text-error-red">{error}</p>
        ) : helperText ? (
          <p className="text-[12px] text-neutral-medium">{helperText}</p>
        ) : null}
      </div>
    )
  }
)
Input.displayName = 'Input'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
  id?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full space-y-xs">
        {label && (
          <label htmlFor={selectId} className="block text-[13px] font-medium text-neutral-dark">
            {label}
          </label>
        )}
        <select
          id={selectId}
          ref={ref}
          className={cn(
            'w-full h-[56px] px-lg rounded-[10px] border-[1.5px] bg-background text-neutral-dark transition-all focus:outline-none focus:border-[2.5px] focus:border-brand-primary appearance-none cursor-pointer',
            error ? 'border-error-red' : 'border-neutral-light',
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-[12px] font-medium text-error-red">{error}</p>}
      </div>
    )
  }
)
Select.displayName = 'Select'
