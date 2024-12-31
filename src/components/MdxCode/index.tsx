import { CSSProperties, PropsWithChildren } from 'react';
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
import { Divider } from 'antd';



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
    return (
        <>
            <>
                {
                    !!fileName.length && (
                        <div className="file-name-container">
                            <p className="file-name">{fileName}</p>
                        </div>
                    )
                }
                <PrismLight
                    language={language}
                    style={config}
                    customStyle={{
                        borderRadius: 8,
                        borderTopLeftRadius: !!fileName.length ? 0 : 8,
                        borderTopRightRadius: !!fileName.length ? 0 : 8,
                        marginTop: !!fileName.length ? 0 : '1em',
                    }}

                >
                    {`${children}`}
                </PrismLight>

            </>

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



