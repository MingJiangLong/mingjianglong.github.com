import { AppProps } from "next/app"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import React, { useMemo } from "react"
import data from "../../../../data"
import "@uiw/react-markdown-preview/dist/markdown.css";
const EditorMarkdown = dynamic<any>(
  () =>
    import("@uiw/react-md-editor").then(mod => {
      return mod.default.Markdown
    }),
  { ssr: false }
)

/**
 *
 * @param props {BlogDetailProps}
 */
export default function (props: BlogDetailProps) {
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
        height: "100%",
        overflow: "scroll",
      }}
      data-color-mode="dark"
    >
      <EditorMarkdown
        data-color-mode="dark"
        source={blogInfo?.content}
        style={{ whiteSpace: "pre-wrap",padding:"1em 2em" }}
      />
    </div>
  )
}

type BlogDetailProps = {} & AppProps
