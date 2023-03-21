import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect } from "react"
import Layout from "../components/layout/layout"

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   function setRootRem() {
  //     const root = document.documentElement
  //     const scale = root.clientWidth / 100
  //     root.style.fontSize = `${scale}px`
  //     console.log("触发",scale)
  //   }
  //   setRootRem()
  //   window.addEventListener("resize", setRootRem)

  //   return () => {
  //     window.removeEventListener("resize", setRootRem)
  //   }
  // }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
