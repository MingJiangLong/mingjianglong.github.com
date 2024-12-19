import { PropsWithChildren } from "react";
// antd/dist/antd.css
import { MDXProvider } from '@mdx-js/react';
import MdxCode from "../MdxCode";
import { Divider, Typography } from 'antd';
const { Title, Paragraph } = Typography;
import { MDXComponents } from 'mdx/types'
import MdxLink from "../MdxLink";
import MdxBlockquote from "../MdxBlockquote";
import MdxParagraph from "../MdxParagraph";
import MdxUl from "../MdxUl";
import MdxOl from "../MdxOl";
import MdxLi from "../MdxLi";
const components: MDXComponents = {
    code: (props) => <MdxCode {...props} />,
    h1: ({ children }) => <Title >{children}</Title>,
    h2: ({ children }) => <Title level={2}>{children}</Title>,
    h3: ({ children }) => <Title level={3}>{children}</Title>,
    h4: ({ children }) => <Title level={4}>{children}</Title>,
    h5: ({ children }) => <Title level={5}>{children}</Title>,
    h6: ({ children }) => <Title level={5}>{children}</Title>,
    p: (props) => <MdxParagraph {...props} />,
    a: ({ href, children }) => <MdxLink href={href}>{children}</MdxLink>,
    ul: ({ children }) => (<MdxUl>{children}</MdxUl>),
    ol: ({ children }) => (<MdxOl>{children}</MdxOl>),
    li: ({ children }) => (<MdxLi>{children}</MdxLi>),
    blockquote: ({ children }) => <MdxBlockquote>{children}</MdxBlockquote>,
    img: ({ src, alt }) => <img src={src} alt={alt} style={{ maxWidth: '100%', borderRadius: '8px' }} />,
    hr: () => <Divider />,
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