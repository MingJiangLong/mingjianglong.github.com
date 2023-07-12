import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect, useMemo } from "react"
import routerInfo from "../../config/routerInfo"
import Sidebar from "../sidebar/sidebar"
import styles from "./layout.module.css"
import TopNav from "../TopNav"

type LayoutProps = {
  children: React.ReactNode
}
/**
 * 布局组件
 * @param param0
 */
export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const title = useMemo(
    () =>
      routerInfo.find(item => item.path === router.pathname)?.title ??
      "(*^▽^*)",
    [router]
  )

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles["main-container"]}>
        {/* <TopNav title={title} /> */}
        <main className={styles.main}>
          <div style={{ width: "15em" }}>
            <Sidebar />
          </div>
          <div
            style={{
              flex: 1,
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              overflowY: "hidden",
            }}
          >
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
