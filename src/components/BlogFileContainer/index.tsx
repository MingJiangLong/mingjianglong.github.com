import { I_BlogInfo } from "@/utils/readBlogs";
import { Anchor, FloatButton, Row } from "antd";
import { MDXRemote } from "next-mdx-remote";
import { BlogAnchorProvider } from "../mdx-component/blog-anchor";
import BlogProvider from "../mdx-component/blog-provider";
import { BlogAnchorContext } from "@/hooks/useAnchor";
import { useRef } from "react";


type Props = {
    serializeResult: I_BlogInfo["serializeResult"]
}

export default function (props: Props) {
    const { serializeResult } = props
    return (
        <BlogAnchorProvider>
            <div style={{ display: 'flex', flexDirection: "row", flex: 1, }}>

                <div
                    id="blog-container"
                    style={{
                        display: "flex", flexDirection: "column",
                        flex: 1, overflow: "scroll", padding: "2em"
                    }}
                >
                    <BlogProvider>
                        <MDXRemote {...serializeResult} />
                    </BlogProvider>
                </div>
                <BlogAnchorContext.Consumer>
                    {
                        (anchorInfo) => {
                            return (
                                <Anchor
                                    items={anchorInfo.anchors}
                                    style={{ width: "12vw" }}
                                    getContainer={() => document.getElementById("blog-container") ?? window}
                                />
                            )
                        }
                    }
                </BlogAnchorContext.Consumer>
            </div>
        </BlogAnchorProvider>
    )
}