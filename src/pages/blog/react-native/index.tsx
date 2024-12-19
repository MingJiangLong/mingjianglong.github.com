import BlogCard from '@/components/BlogCard';
import { I_BlogInfo, readColumnBlogs } from "@/utils/readBlogs";
import { useRouter } from 'next/router';
const COLUMN_NAME = "react-native"
type Props = {
    blogInfoArr: I_BlogInfo[]
}

export default function (props: Props) {
    const { blogInfoArr } = props
    const route = useRouter();
    function onClick(fileName: string) {
        route.push(`/blog/${COLUMN_NAME}/${fileName}`)
    }
    return (
        <div style={{ display: 'flex', flexDirection: "column", flex: 1, rowGap: 20, padding: 25 }}>
            {
                blogInfoArr.map(item => <BlogCard
                    key={item.frontMatter.title}
                    {...item.frontMatter}
                    onClick={() => onClick(item.fileName)}
                />)
            }
        </div>
    )
}


/**
 *  ### 主要工作读取 `mdx/**\/*.mdx`文件
 * @param props 
 * @returns 
 */
export async function getStaticProps() {
    const result = await readColumnBlogs(COLUMN_NAME)
    return {
        props: {
            blogInfoArr: result
        },
    }
}