import React from "react"
import Image from "next/image"
import styles from "./index.module.css"
/**
 *
 * @param props {AvatarProps}
 */
export default function Avatar(props: AvatarProps) {
  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <img src="/images/avatar.png" alt="mingjianglong" className={styles["avatar"]} />
        {/* <Image
          src="/avatar.png"
          alt="avatar"
          width="100"
          height="100"
          className={styles["avatar"]}
        /> */}
        <h2>龙江</h2>
        <h3 style={{ fontWeight: "normal", paddingTop: ".6em", color: "grey" }}>
          Jiang Long
        </h3>
        <h4 style={{ paddingTop: "1.3em" }}>等风也等你~</h4>
        <span className={styles["my-face"]}>ღゝ◡╹)ノ♡</span>
      </div>
      <div></div>
    </div>
  )
}

type AvatarProps = {}
