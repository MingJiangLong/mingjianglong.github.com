import { I_BlogInfo, readColumnBlog, readColumnBlogsName } from "@/utils/readBlogs";
import BlogFileContainer from "@/components/BlogFileContainer";
import info from './index.json'
type Props = {
} & I_BlogInfo
export default function (props: Props) {
    const { serializeResult } = props
    return (
        <BlogFileContainer serializeResult={serializeResult} />
    )
}



export async function getStaticPaths() {
    const blogsName = await readColumnBlogsName(info.column)

    return {
        paths: blogsName.map(item => ({ params: { id: item } })),
        fallback: false, // 如果没有匹配的路径，返回 404
    };
}
export async function getStaticProps(path: { params: { id: string } }) {
    const temp = await readColumnBlog(info.column, path.params.id)
    return {
        props: {
            ...temp
        },
    }

}