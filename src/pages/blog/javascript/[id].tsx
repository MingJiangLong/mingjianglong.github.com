import { MDXRemote } from "next-mdx-remote"
import { I_BlogInfo, readColumnBlog, readColumnBlogsName } from "@/utils/readBlogs";

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
    const blogsName = await readColumnBlogsName("javascript")
    return {
        paths: blogsName.map(item => ({ params: { id: item } })),
        fallback: true, // 如果没有匹配的路径，返回 404
    };
}
export async function getStaticProps(path: { params: { id: string } }) {
    const temp = await readColumnBlog("javascript", path.params.id)
    return {
        props: {
            ...temp
        },
    }

}