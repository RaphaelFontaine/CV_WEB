import '@/styles/globals.css'
import '@/styles/button-contact.css'
import '@/styles/button-resume.css'
import '@/styles/icon-card.css'
import '@/styles/button-send.css'
import '@/styles/loader.css'
import '@/styles/card-exp.css'
import '@/styles/portfolio.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
