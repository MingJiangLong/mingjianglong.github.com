import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Light } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import java from 'react-syntax-highlighter/dist/cjs/languages/hljs/java';
import kotlin from 'react-syntax-highlighter/dist/cjs/languages/hljs/kotlin';
import oc from 'react-syntax-highlighter/dist/cjs/languages/hljs/objectivec';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import swift from 'react-syntax-highlighter/dist/cjs/languages/hljs/swift';
import xml from 'react-syntax-highlighter/dist/cjs/languages/hljs/xml';
import html from 'react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars';
// import react from 'react-syntax-highlighter/dist/cjs/languages/hljs/react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { Tooltip } from 'antd';
import styles from './index.module.css'
import { SmileFilled, CopyOutlined } from '@ant-design/icons';


Light.registerLanguage("js", js)
Light.registerLanguage("javascript", js)
Light.registerLanguage("ts", ts)
Light.registerLanguage("typescript", ts)
Light.registerLanguage("java", java)
Light.registerLanguage("kotlin", kotlin)
Light.registerLanguage("oc", oc)
Light.registerLanguage("swift", swift)
Light.registerLanguage("bash", bash)
Light.registerLanguage("shell", bash)
Light.registerLanguage("xml", xml)
Light.registerLanguage("vue", js)
Light.registerLanguage("react", js)
Light.registerLanguage("react-native", js)
Light.registerLanguage("html", html)


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
                    <Light
                        language={language}
                        style={vscDarkPlus}
                        showInlineLineNumbers
                        showLineNumbers
                        wrapLines
                        customStyle={{
                            flex: 1,
                            borderRadius: 0,
                            margin: 0,
                            borderTopLeftRadius: !!fileName.length ? 0 : 8,
                            borderBottomLeftRadius: 8,
                        }}

                    >
                        {`${children}`}
                    </Light>
                    <div
                        className={"copy-icon-container"}
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
            <style jsx>
                {`
              .file-name-container {
                display: flex;
                width: 100%;
                max-width: 100%;
                background-color: #d3e6f0;
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
                color: currentcolor;
                padding:15px;
                padding-bottom:0;
              }
            .copy-icon-container {
                background-color: #1c1c1c;
                padding: 15px;
            }
            `}
            </style>
        </>
    )

}



