import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { PrismLight } from 'react-syntax-highlighter';
// import { cb } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
import config from './config';
import { Divider, Tooltip } from 'antd';
import styles from './index.module.css'
import { SmileFilled, CopyOutlined } from '@ant-design/icons';


PrismLight.registerLanguage("bash", bash)
PrismLight.registerLanguage("json", json)
PrismLight.registerLanguage("yaml", yaml)
PrismLight.registerLanguage("markdown", markdown)
PrismLight.registerLanguage("python", python)
PrismLight.registerLanguage("jsx", jsx)
PrismLight.registerLanguage("js", js)
PrismLight.registerLanguage("tsx", tsx)
PrismLight.registerLanguage("ts", ts)
PrismLight.registerLanguage("typescript", ts)
PrismLight.registerLanguage("dart", dart)
PrismLight.registerLanguage("css", css)
type MdxCodeProps = PropsWithChildren<{
    className?: string
}>
export default function MdxCode(props: MdxCodeProps) {
    const { children, className } = props;
    if (!className) return <kbd>{children}</kbd>

    let fileName: string = ""
    let language = "js"

    const matchLanguage = className.match(/^language-([^:]+)/);
    if (matchLanguage) language = matchLanguage[1]

    const matchFileName = className.match(/:(.+)/);
    if (matchFileName) fileName = matchFileName[1]

    const [haveCopied, setHaveCopied] = useState(false)

    const timer = useRef<NodeJS.Timeout | null>(null)

    function onClearTimeout() {
        setHaveCopied(false)
        if (!timer.current) return;
        clearTimeout(timer.current)
        timer.current = null
    }
    async function onClickCopy(str: string) {
        await navigator.clipboard.writeText(str)
        setHaveCopied(true)
        timer.current = setTimeout(() => {
            onClearTimeout()
        }, 2000)
    }


    useEffect(() => {
        return () => {
            onClearTimeout()
        }
    }, [])


    return (
        <>

            <div className={styles["code-part"]}>
                {
                    !!fileName.length && (
                        <div className="file-name-container">
                            <p className="file-name">{fileName}</p>
                        </div>
                    )
                }

                <div className={styles["code-container"]}
                    style={{
                        marginTop: !!fileName.length ? 0 : '1em',
                        flex: 1,

                    }}
                >
                    <PrismLight
                        language={language}
                        style={config}
                        customStyle={{
                            flex: 1,
                            borderRadius: 0,
                            margin: 0,
                            borderTopLeftRadius: !!fileName.length ? 0 : 8,
                            borderBottomLeftRadius: 8,
                        }}

                    >
                        {`${children}`}
                    </PrismLight>
                    <div
                        className={styles["copy-icon-container"]}
                        style={{
                            borderTopRightRadius: !!fileName.length ? 0 : 8,
                            borderBottomRightRadius: 8,


                        }}

                    >
                        {
                            haveCopied && <Tooltip title="已复制">
                                <SmileFilled style={{ color: "#FFFFFF" }} />
                            </Tooltip>
                        }
                        {
                            !haveCopied && <Tooltip title="点击复制">
                                <CopyOutlined style={{ color: "#FFFFFF" }} onClick={() => onClickCopy(`${children}`)} />
                            </Tooltip>
                        }
                    </div>
                </div>
            </div>
            {/* <div>
                    <CopyTwoTone />
                </div> */}


            <style jsx>
                {`
              .file-name-container {
                display: flex;
                width: 100%;
                max-width: 100%;
                background-color: #1d2b35d9;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                margin-top: 1em;
                white-space: pre-wrap;
                word-wrap: break-word;
                overflow-wrap: break-word;
                padding-bottom:1em;
              }
              .file-name {
                font-family: "Share Tech Mono", monospace;
                font-size: 14px;
                color: #fffecbf2;
                padding:15px;
                padding-bottom:0;
              }
            `}
            </style>
        </>
    )
}



