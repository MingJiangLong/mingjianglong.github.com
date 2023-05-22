import { useState } from "react"
import styles from "./index.module.css"
export default function (props: {
  onPasswordConfirm?: (value?: string) => void
}) {
  const [inputValue, setInputValue] = useState<string>()
  function onConfirm() {
    typeof props.onPasswordConfirm === "function" &&
      props.onPasswordConfirm(inputValue)
  }
  return (
    <div className={styles["container"]}>
      <img src="/images/file-lock.png" className={styles["lock-img"]} />
      <div className={styles["password-container"]}>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          type="password"
        />
        <div onClick={onConfirm}>进入</div>
      </div>
      <div className={styles["lock-des"]}>防君子不防小人</div>
    </div>
  )
}
