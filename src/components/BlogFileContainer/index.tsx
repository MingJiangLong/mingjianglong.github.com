import { I_BlogInfo } from "@/utils/readBlogs";
import { MDXRemote } from "next-mdx-remote";


type Props = {
    serializeResult: I_BlogInfo["serializeResult"]
}

export default function (props: Props) {
    const { serializeResult } = props
    return (
        <div style={{ padding: 14, flex: 1, margin: 14 }}>
            <MDXRemote {...serializeResult} />
        </div>
    )
}