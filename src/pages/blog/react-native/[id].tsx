import { MDXRemote } from "next-mdx-remote"
import { I_BlogInfo, readColumnBlog, readColumnBlogsName } from "@/utils/readBlogs";

const COLUMN_NAME = "react-native"
type Props = {
} & I_BlogInfo
export default function (props: Props) {
    const { serializeResult } = props
    return (
        <div style={{ padding: 14 }}>
            <MDXRemote {...serializeResult} />
        </div>
    )

}



export async function getStaticPaths() {
    const blogsName = await readColumnBlogsName(COLUMN_NAME)

    return {
        paths:  blogsName.map(item => ({ params: { id: item } })),
        fallback: true, // 如果没有匹配的路径，返回 404
    };
}
export async function getStaticProps(path: { params: { id: string } }) {
    const temp = await readColumnBlog(COLUMN_NAME, path.params.id)
    return {
        props: {
            ...temp
        },
    }

}