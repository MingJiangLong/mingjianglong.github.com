import { memo, PropsWithChildren } from "react";
import { MDXProvider } from '@mdx-js/react';
import { Anchor, Divider, FloatButton, Tag } from 'antd';
import { MDXComponents } from 'mdx/types'
import BlogCode from "../blog-code";
import BlogTitle from "../blog-title";
import BlogParagraph from "../blog-paragraph";
import BlogUl from "../blog-ul";
import BlogOl from "../blog-ol";
import BlogLi from "../blog-li";
import { BlogBlockquote } from "../blog-blockquote";
import BlogLink from "../blog-link";
import BlogMermaid from "../blog-mermaid";
import BlogWork from "../blog-work";
import { BlogAnchorProvider } from "../blog-anchor";
import { BlogAnchorContext } from "@/hooks/useAnchor";

const components: MDXComponents = {
    code: (props) => <BlogCode {...props} />,
    h1: props => <BlogTitle children={props.children} level={1} />,
    h2: props => <BlogTitle children={props.children} level={2} />,
    h3: props => <BlogTitle children={props.children} level={3} />,
    h4: props => <BlogTitle children={props.children} level={4} />,
    h5: props => <BlogTitle children={props.children} level={5} />,
    p: (props: any) => <BlogParagraph {...props} />,
    ul: (props) => (< BlogUl {...props} />),
    ol: (props) => (<BlogOl {...props} />),
    li: (props) => (<BlogLi {...props} />),
    blockquote: (props) => <BlogBlockquote {...props} />,
    img: ({ src, alt }) => {
        return <img src={src} alt={alt} style={{ maxWidth: '100%', borderRadius: '8px', padding: "2em" }} />
    },
    hr: () => <Divider />,

    /**
     * [百度](http//:www.baidu.com) 
     * <a href="http//:www.baidu.com">百度</a> 这个还不知道走的哪个
     * <BlogLink href="http//:www.baidu.com">百度</BlogLink>
     */
    a: props => <BlogLink {...props} />,
    BlogLink: props => <BlogLink {...props} />,

    Mermaid: ({ chart }) => <BlogMermaid chart={`${chart}`} />,
    WorkContent: ({ data }) => <BlogWork data={data} />,
    Tag: ({ children }) => <Tag>{children}</Tag>,
    BlogTitle: props => <BlogTitle {...props} />,
}


export type MdxContainerProps = PropsWithChildren<{

}>
export default function BlogProvider(props: MdxContainerProps) {
    const { children } = props
    return (
        <MDXProvider components={components}>
            {children}
        </MDXProvider>
    )
}