import { useRouter } from "next/router"
import React from "react"
import Tag from "../tag/Tag"
import styles from "./index.module.css"
import { MetaData } from "../../../lib"
/**
 * Blog 简介Card
 * @param props {BlogCardProps}
 */
export default function BlogCard(props: BlogCardProps) {
  const { title, id, description, tags } = props
  const router = useRouter()
  function onCardClick() {
    router.push({ pathname: `/blog/detail/${id}` })
  }
  return (
    <>
      <div className={styles["card"]} onClick={onCardClick}>
        <h4>{title}</h4>
        <p className={styles["desc"]}>{description}</p>
        <div className={styles["tag-container"]}>
          {tags.map((item, index) => (
            <Tag label={item} key={index} style={{ marginLeft: ".1em" }} />
          ))}
        </div>
      </div>
    </>
  )
}

type BlogCardProps = {
  onClick?: (id: string) => void
} & MetaData
