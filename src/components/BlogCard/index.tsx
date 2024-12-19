import { useRouter } from "next/router"
import React from "react"
import styles from "./index.module.css"
import { I_BlogInfo } from "@/utils/readBlogs"
import isFunction from "@/utils/isFunction"
/**
 * Blog 简介Card
 * @param props {BlogCardProps}
 */
export default function BlogCard(props: BlogCardProps) {
  const { title, id, description, tags, onClick } = props
  const router = useRouter()

  return (
    <div className={styles["card"]} onClick={() => {
      isFunction(onClick) && onClick()
    }}>
      <h4>{title}</h4>
      <p className={styles["desc"]}>{description}</p>
      <div className={styles["tag-container"]}>
        {/* {tags.map((item, index) => (
          <Tag label={item} key={index} style={{ marginLeft: ".1em" }} />
        ))} */}
      </div>
    </div>
  )
}

type BlogCardProps = {
  onClick?: () => void
} & I_BlogInfo["frontMatter"]
