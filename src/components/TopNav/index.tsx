import { useRouter } from "next/router"
import styles from "./index.module.css"
export default function (props: {title:string}) {
  const router = useRouter()
  function onBack() {
    router.back()
  }
  return (
    <div className={styles["top-nav"]}>
      <img className={styles["back-img"]} src="/images/back.png" onClick={onBack}/>
      <div className={styles["nav-title"]}>{props.title}</div>
    </div>
  )
}
