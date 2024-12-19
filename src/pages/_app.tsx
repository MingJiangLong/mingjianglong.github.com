import "@/styles/globals.css"
import { ConfigProvider } from 'antd';
import type { AppProps } from "next/app"
import Layout from "@/components/layout/layout"
import MdxContainer from "@/components/MdxContainer"
export default function App({ Component, pageProps }: AppProps) {

  return (
    <MdxContainer>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MdxContainer>
  )
}
