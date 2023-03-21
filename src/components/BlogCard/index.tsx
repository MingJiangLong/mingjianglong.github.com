import { useRouter } from "next/router"
import React from "react"
import Tag from "../tag/Tag"
import styles from "./index.module.css"
/**
 * Blog 简介Card
 * @param props {BlogCardProps}
 */
export default function BlogCard(props: BlogCardProps) {
  const { title, desc, tag, createTime, lastUpdateTime, id } = props
  const router = useRouter()
  function onCardClick() {
    router.push({ pathname: "/blog/detail", query: { id } })
  }
  return (
    <>
      <div className={styles["card"]} onClick={onCardClick}>
        <h4>{title}</h4>
        <p className={styles["desc"]}>{desc}</p>
        <div className={styles["tag-container"]}>
          {tag.map((item, index) => (
            <Tag label={item} key={index} style={{ marginLeft: ".1em" }} />
          ))}
        </div>
      </div>
    </>
  )
}

type BlogCardProps = {
  onClick?: (id: string) => void
  id: number | string
  title: string
  desc: string
  tag: string[]
  content: string
  createTime: string
  lastUpdateTime: string
}
