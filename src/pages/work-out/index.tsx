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
export async function getStaticProps(path: { params: { id: string } }) {
    const temp = await readColumnBlog(info.column, info.fileName)
    return {
        props: {
            ...temp
        },
    }

}