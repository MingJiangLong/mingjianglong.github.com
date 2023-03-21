import { AppProps } from "next/app"
import { useRouter } from "next/router"
import React, { useMemo } from "react"
import data from "../../../data"
/**
 *
 * @param props {BlogDetailProps}
 */
export default function BlogDetail(props: BlogDetailProps) {
  const router = useRouter()
  const blogID = useMemo(() => {
    const { query } = router
    return query?.id
  }, [router])

  const blogInfo = useMemo(() => data.find(item => `${item.id}` == blogID), [
    blogID,
  ])
  return (
    <div
      style={{
        padding: "1em 2em",
      }}
    >
      {blogInfo?.content}
    </div>
  )
}

type BlogDetailProps = {} & AppProps
