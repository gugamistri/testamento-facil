import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Crimson_Pro, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Testamento Fácil',
  description: 'Testamento válido juridicamente, 80% mais barato, atualizado quando você quiser',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${crimsonPro.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <ClerkProvider localization={ptBR}>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}

