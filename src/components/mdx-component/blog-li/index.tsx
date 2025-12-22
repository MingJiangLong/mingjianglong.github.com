import React, { PropsWithChildren, useMemo } from "react";
import BlogParagraph from "../blog-paragraph";

export default function BlogLi(props: PropsWithChildren<{}>) {


    // 偶然children只有两个元素->强制补齐3个
    const children = useMemo(() => {
        let nextChildren = props.children;
        if (!Array.isArray(nextChildren)) return nextChildren;
        if (nextChildren.length !== 3) {
            return (
                <BlogParagraph>
                    {nextChildren}
                </BlogParagraph>
            )
        }
        return nextChildren;
    }, [props.children])

    return (
        <li>
            {children}
        </li>
    )
}