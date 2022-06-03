import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Context from '../components/UserContext/index'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState({})
  
  return(
    <Context.Provider value={[user, setUser]}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
