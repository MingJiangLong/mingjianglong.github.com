import CommonBlogsHome from '@/components/CommonBlogsHome';
import { I_BlogInfo, readColumnBlogs } from "@/utils/readBlogs";
import { useRouter } from 'next/router';
import info from './index.json'
type Props = {
    blogInfoArr: I_BlogInfo[]
}

export default function (props: Props) {
    const { blogInfoArr } = props
    const route = useRouter();
    function onClick(fileName: string) {
        route.push(`/doc/${fileName}`)
    }
    return (
        <CommonBlogsHome blogInfoArr={blogInfoArr} onPress={onClick} />
    )
}


/**
 *  ### 主要工作读取 `mdx/**\/*.mdx`文件
 * @param props 
 * @returns 
 */
export async function getStaticProps() {
    const result = await readColumnBlogs(info.column)
    return {
        props: {
            blogInfoArr: result
        },
    }
}