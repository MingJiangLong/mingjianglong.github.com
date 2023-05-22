import React, { useContext, useEffect, useMemo, useState } from "react"
import { getAllNextJSPath, getMdxFileContent } from "../../../../lib"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import CodeSyntaxHighlighter from "@/components/SyntaxHighlighter"
import HoverableLink from "@/components/HoverableLink"
import { STORE } from "@/pages/_app"
import Lock from "@/components/Lock"
import MD5 from "crypto-js/md5"
const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33"
const h1_color = c4,
  h1_text_decoration = c4 + "80",
  h2_color = c4,
  h3_color = c4
const p_color = c1 + "f2",
  ul_color = c1 + "e6",
  ol_color = c1 + "e6"
const em_background = c1 + "26",
  em_color = c1 + "f2"
const strong_background = c5 + "26",
  strong_color = c4 + "f2"
const hr_color = c1 + "80",
  blockquote_background_color = c3 + "26",
  blockquote_border = c3 + "e6"

const components = {
  h1: (props: any) => {
    return (
      <h1
        style={{
          fontFamily: "'Ubuntu', sans-serif",
          fontSize: "calc(1rem + 1.5vw)",
          color: h1_color,
          padding: "1em 0",
          overflowWrap: "break-word",
        }}
        {...props}
      />
    )
  },

  h2: (props: any) => {
    return (
      <h2
        style={{
          fontFamily: "'Maven Pro', sans-serif",
          fontSize: "calc(1rem + 1vw)",
          color: h2_color,
          padding: ".8em 0",
          overflowWrap: "break-word",
        }}
        {...props}
      />
    )
  },

  h3: (props: any) => {
    return (
      <h3
        style={{
          fontFamily: "'Maven Pro', sans-serif",
          fontSize: "calc(1rem + 0.5vw)",
          color: h3_color,
          padding: ".6em 0",
          overflowWrap: "break-word",
        }}
        {...props}
      />
    )
  },

  p: (props: any) => (
    <p
      style={{
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: "calc(1rem + 0.1vw)",
        color: p_color,
        margin: "0vh 0 1vh 0",
        overflowWrap: "break-word",
      }}
      {...props}
    />
  ),

  ul: (props: any) => (
    <ul
      style={{
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: "calc(1rem + 0.1vw)",
        color: ul_color,
        margin: "1vh 0 1vh calc(2vw)",
        overflowWrap: "break-word",
      }}
      {...props}
    />
  ),

  ol: (props: any) => (
    <ol
      style={{
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: "calc(1rem + 0.1vw)",
        color: ol_color,
        margin: "1vh 0 1vh calc(2vw)",
        overflowWrap: "break-word",
      }}
      {...props}
    />
  ),
  a: (props: any) => <HoverableLink link_props={props} />,

  code: (props: any) => {
    return <CodeSyntaxHighlighter {...props} />
  },

  em: (props: any) => (
    <em
      style={{
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: "calc(1rem + 0.1vw)",
        fontStyle: "normal",
        backgroundColor: em_background,
        color: em_color,
        margin: "0vh 0 1vh 0",
        padding: "0 2px 0 2px",
        borderRadius: "2px",
      }}
      {...props}
    />
  ),

  strong: (props: any) => (
    <strong
      style={{
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: "calc(1rem + 0.1vw)",
        fontStyle: "normal",
        fontWeight: "bold",
        color: strong_color,
        margin: "0vh 0 1vh 0",
        overflowWrap: "break-word",
      }}
      {...props}
    />
  ),

  hr: () => <hr style={{ margin: "1em 0", border: `1px solid ${hr_color}` }} />,

  blockquote: (props: any) => (
    <blockquote
      style={{
        fontStyle: "italic",
        backgroundColor: blockquote_background_color,
        padding: "10px",
        margin: "1vh 0 1vh 0",
        borderLeft: `5px solid ${blockquote_border}`,
      }}
      {...props}
    />
  ),
  img(props: any) {
    return (
      <img
        alt={props?.alt ?? ""}
        src={props?.src}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    )
  },
}
/**
 *
 * @param props {BlogDetailProps}
 */
export default function (props: any) {
  const context = useContext(STORE)
  const [haveAccess, setHaveAccess] = useState(true)
  useEffect(() => {
    setHaveAccess(!(props.metaData?.isPrivate ?? false))
  }, [])
  return (
    <div
      style={{
        height: "100%",
        padding: context.isMobile ? "1em" : "7em",
        overflow: "scroll",
      }}
    >
      {!haveAccess && (
        <Lock
          onPasswordConfirm={password => {
            // 可以存一个本地密码并设置一个失效
            if (password == "longjiang") {
              setHaveAccess(true)
            }
          }}
        />
      )}
      {haveAccess && <MDXRemote {...props.content} components={components} />}
    </div>
  )
}

export function getStaticPaths() {
  const paths = getAllNextJSPath()
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps(path: { params: { id: string } }) {
  const mdxFileContent = getMdxFileContent(path.params.id)
  const mdxSource = await serialize(mdxFileContent.content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  })

  return {
    props: {
      ...mdxFileContent,
      content: mdxSource,
    },
  }
}
