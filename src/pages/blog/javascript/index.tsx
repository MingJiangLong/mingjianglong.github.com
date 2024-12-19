import BlogCard from '@/components/BlogCard';
import { I_BlogInfo, readColumnBlogs } from "@/utils/readBlogs";
import { useRouter } from 'next/router';
type Props = {
    blogInfoArr: I_BlogInfo[]
}

export default function (props: Props) {
    const { blogInfoArr } = props
    const route = useRouter();
    function onClick(fileName: string) {
        route.push(`/blog/javascript/${fileName}`)
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
    const result = await readColumnBlogs("javascript")
    return {
        props: {
            blogInfoArr: result
        },
    }
}