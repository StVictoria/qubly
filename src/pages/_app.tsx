import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementsByClassName('preloader')[0]
      loader.classList.remove('preloader_show')
      setTimeout(() => {
        if (loader) loader.remove()
      }, 1000)
    }
  }, [])
  return <Component {...pageProps} />
}
