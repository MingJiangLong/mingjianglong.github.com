import "@/styles/globals.css"

import type { AppProps } from "next/app"
import Layout from "@/components/layout/layout"
import { createContext, useEffect, useState } from "react"
export const STORE = createContext<{ isMobile: boolean }>({ isMobile: false })
export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    
    let isPhone = /Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)
    console.log(isPhone);
    
    setIsMobile(isPhone)
  }, [])
  return (
    <STORE.Provider value={{ isMobile }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </STORE.Provider>
  )
}
