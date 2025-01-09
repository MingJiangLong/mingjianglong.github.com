import { useRouter } from "next/router"
import React from "react"
import styles from "./index.module.css"
import { I_BlogInfo } from "@/utils/readBlogs"
import isFunction from "@/utils/isFunction"
import { Tag } from "antd"
import dayjs from "dayjs"
import { Typography, } from "antd"
const { Title } = Typography
/**
 * Blog 简介Card
 * @param props {BlogCardProps}
 */
export default function BlogCard(props: BlogCardProps) {
  const { title, desc, tags, onClick, time } = props
  return (
    <div className={styles["card"]} onClick={() => {
      isFunction(onClick) && onClick()
    }}>
      <Title level={5}>{title}</Title>
      {

        !!desc && <Typography className={styles["desc"]}>{desc}</Typography>
      }
      {
        Array.isArray(tags) && <div className={styles["tag-container"]}>
          {
            tags.map((item, index) => (
              <Tag key={index} >{item}</Tag>
            ))
          }
        </div>

      }

      <div style={{ flex: 1 }}></div>
      {
        time && <Typography style={{ textAlign: "right" }}>创建时间: {dayjs(time).format("YYYY-MM-DD")}</Typography>
      }
    </div>
  )
}

type BlogCardProps = {
  onClick?: () => void
  tags?: string[]
} & I_BlogInfo["frontMatter"]
