import BlogCard from '@/components/BlogCard';
import { I_BlogInfo } from "@/utils/readBlogs";
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
type Props = {
    blogInfoArr: I_BlogInfo[]
    onPress: (fileName: string) => void
}

export default function (props: Props) {
    const { blogInfoArr, onPress } = props
    const route = useRouter();

    const [searchStr, setSearchStr] = useState("")
    const filteredBlogInfoArr = useMemo(() => {

        return blogInfoArr.filter(blogInfo => {
            return blogInfo.fileName.includes(searchStr) ||
                Object.values(blogInfo.frontMatter).map(item => `${item}`).some((item) => item.includes(searchStr))
        })
    }, [blogInfoArr, searchStr])
    function onClick(fileName: string) {
        onPress(fileName)
    }
    return (
        <div style={{ flex: 1, rowGap: 40, padding: 25, display: 'flex', flexDirection: "column", alignItems: 'center', overflowY: "scroll" }}>
            <div style={{ position: "sticky", top: 0, width: "100%", background: "#FFFFFF", zIndex: 100 }}>
                <Search placeholder="输入关键词搜索" onSearch={setSearchStr} />
            </div>
            {
                filteredBlogInfoArr.map(item => <BlogCard
                    key={item.frontMatter.title}
                    {...item.frontMatter}
                    onClick={() => onClick(item.fileName)}
                />)
            }
        </div>
    )
}