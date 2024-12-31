import { PropsWithChildren } from "react";
import { MDXProvider } from '@mdx-js/react';
import MdxCode from "../MdxCode";
import { Divider } from 'antd';
import { MDXComponents } from 'mdx/types'
import MdxLink from "../MdxLink";
import MdxBlockquote from "../MdxBlockquote";
import MdxParagraph from "../MdxParagraph";
import MdxUl from "../MdxUl";
import MdxOl from "../MdxOl";
import MdxLi from "../MdxLi";
import MdxTitle from "../MdxTitle";
import Mermaid from "../Mermaid";
const components: MDXComponents = {
    code: (props) => <MdxCode {...props} />,
    // pre: (props) => <MdxPre {...props} />,
    h1: ({ children }) => <MdxTitle level={3} >{children}</MdxTitle>,
    h2: ({ children }) => <MdxTitle level={4}>{children}</MdxTitle>,
    h3: ({ children }) => <MdxTitle level={5}>{children}</MdxTitle>,
    h4: ({ children }) => <MdxTitle level={5}>{children}</MdxTitle>,
    h5: ({ children }) => <MdxTitle level={5}>{children}</MdxTitle>,
    h6: ({ children }) => <MdxTitle level={5}>{children}</MdxTitle>,
    p: (props) => <MdxParagraph {...props} />,
    a: ({ href, children }) => <MdxLink href={href}>{children}</MdxLink>,
    ul: (props) => (<MdxUl {...props} />),
    ol: (props) => (<MdxOl {...props} />),
    li: (props) => (<MdxLi {...props} />),
    blockquote: ({ children }) => <MdxBlockquote>{children}</MdxBlockquote>,
    img: ({ src, alt }) => <img src={src} alt={alt} style={{ maxWidth: '100%', borderRadius: '8px' }} />,
    hr: () => <Divider />,

    Mermaid: ({ chart }) => <Mermaid chart={`${chart}`} />
}

export type MdxContainerProps = PropsWithChildren<{

}>
export default function MdxContainer(props: MdxContainerProps) {

    const { children } = props
    return (
        <MDXProvider components={components}>
            {children}
        </MDXProvider>
    )
}