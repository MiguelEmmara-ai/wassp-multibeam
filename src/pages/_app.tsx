import '@/styles/globals.css'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
