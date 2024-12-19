import { CSSProperties, PropsWithChildren } from 'react';
import { Prism, PrismLight } from 'react-syntax-highlighter';
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
    const language = className ? className.replace('language-', '') : 'js';
    return (
        <PrismLight language={language} style={config}>
            {`${children}`}
        </PrismLight>
    );
}



