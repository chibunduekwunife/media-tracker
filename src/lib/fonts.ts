import { Inter, Roboto_Mono } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--inter-font',
    display: 'swap'
})

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--roboto-mono-font',
    display: 'swap'
})