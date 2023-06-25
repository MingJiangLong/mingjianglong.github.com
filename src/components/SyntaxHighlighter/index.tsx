import { useMemo } from "react"
import styles from "./index.module.css"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash"
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown"
import yaml from "react-syntax-highlighter/dist/cjs/languages/prism/yaml"
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx"
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import dart from "react-syntax-highlighter/dist/cjs/languages/prism/dart"
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import vsc_dark_plus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"

import code_highlighter_style from "./code_highlighter_style"
// import mermaid from 'react-mermaid';

SyntaxHighlighter.registerLanguage("bash", bash)
SyntaxHighlighter.registerLanguage("json", json)
SyntaxHighlighter.registerLanguage("yaml", yaml)
SyntaxHighlighter.registerLanguage("markdown", markdown)
SyntaxHighlighter.registerLanguage("python", python)
SyntaxHighlighter.registerLanguage("jsx", jsx)
SyntaxHighlighter.registerLanguage("js", js)
SyntaxHighlighter.registerLanguage("tsx", tsx)
SyntaxHighlighter.registerLanguage("ts", ts)
SyntaxHighlighter.registerLanguage("typescript", ts)
SyntaxHighlighter.registerLanguage("dart", dart)
SyntaxHighlighter.registerLanguage("css", css)
// SyntaxHighlighter.registerLanguage('mermaid', () => ({
//   contains: [
//     {
//       className: 'mermaid',
//       begin: /```mermaid(\s+\w+)?/,
//       end: '```',
//       subLanguage: 'mermaid',
//       excludeBegin: true,
//       excludeEnd: true,
//     },
//   ],
// }));
const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33"

const file_name_container_background = c4 + "d9",
  file_name_color = c2 + "f2",
  background = c1 + "f2"

export default function CodeSyntaxHighlighter(props: {
  className?: string
  children: string
}) {
  /**
   * 不是代码片段
   */
  const isCode = useMemo(() => {
    return !!props.className
  }, [props])

  const language = useMemo(() => {
    return `${props?.className ?? ""}`.replace("language-", "").split(":")[0].toLowerCase()
  }, [props])

  const file_name = useMemo(() => {
    return `${props?.className ?? ""}`.replace("language-", "").split(":")[1]
  }, [])

  if (!isCode)
    return (
      <span className={styles["key-words"]}>{props.children}</span>
    )
  return (
    <>
      {file_name ? (
        <div>
          <div className="file-name-container">
            <p className="file-name">{file_name}</p>
          </div>
          <SyntaxHighlighter
            language={language}
            style={code_highlighter_style}
            customStyle={{
              backgroundColor: background,
              paddingBottom: "1em",
              margin: "0px",
              marginBottom: "1vh",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              color: c4,
            }}
            {...props}
          />
        </div>
      ) : (
        <SyntaxHighlighter
          language={language}
          style={code_highlighter_style}
          customStyle={{
            backgroundColor: background,
            marginTop: "1vh",
            marginBottom: "1vh",
            borderRadius: "5px",
            paddingBottom: "1em",
            fontSize: "calc(0.9rem + 0.1vw)",
          }}
          {...props}
        />
      )}

      <style jsx>
        {`
          .file-name-container {
            display: flex;
            width: 100%;
            max-width: 100%;
            background-color: ${file_name_container_background};
            padding: calc(0.5rem + 0.2vw);
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            margin-top: 1vh;
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
          .file-name {
            font-family: "Share Tech Mono", monospace;
            font-size: calc(0.9rem + 0.1vw);
            color: ${file_name_color};
          }
        `}
      </style>
    </>
  )
}
