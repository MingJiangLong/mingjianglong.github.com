import Link from "next/link"
import { useRouter } from "next/router"
import routerInfo from "../../config/routerInfo"
import Avatar from "../Avatar"
import styles from "./sidebar.module.css"

export default function Sidebar() {
  const router = useRouter()

  function dynamicColor(path: string) {
    const { pathname } = router
    if (pathname == path) return { color: "red" }
    return { color: "black" }
  }

  return (
    <nav className={styles.nav}>
      {/* 头像 */}
      <Avatar />

      {routerInfo.map((item, key) => {
        if (!item.isMain) return
        return (
          <Link
            key={item.path}
            href={item.path}
            style={dynamicColor(item.path)}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
