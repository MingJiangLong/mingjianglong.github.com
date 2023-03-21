import React from "react"
import styles from "./Tag.module.css"
/**
 *
 * @param props {TagProps}
 */
export default function Tag(props: TagProps) {
  const { label } = props
  return (
    <span className={styles["tag"]} style={props?.style}>
      {label}
    </span>
  )
}

type TagProps = { label: string; type?: string; style?: React.CSSProperties }
