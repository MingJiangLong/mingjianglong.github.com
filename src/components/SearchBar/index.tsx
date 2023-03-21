import React, { useRef } from "react"
import styles from "./index.module.css"
/**
 *
 * @param props {SearchBarProps}
 */
export default function SearchBar(props: SearchBarProps) {
  const timer = useRef<NodeJS.Timeout>()
  function onValueChange(value: string) {
    if (typeof props.onValueChange === "function") {
      props.onValueChange(value)
    }

    return
    if (timer.current) return
    timer.current = setTimeout(() => {
      if (typeof props.onValueChange === "function") {
        props.onValueChange(value)
      }
      clearTimeout(timer.current)
      timer.current = undefined
    }, 500)
  }
  return (
    <div className={styles["search-bar-container"]}>
      <input
        className={styles["search-input"]}
        onChange={e => onValueChange(e.target.value)}
        placeholder="输入标题/简述/标签进行搜索"
      />
    </div>
  )
}

type SearchBarProps = {
  onValueChange?: (value: string) => void
}
