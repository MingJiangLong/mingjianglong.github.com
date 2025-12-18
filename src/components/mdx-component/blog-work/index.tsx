import dayjs from "dayjs";
import { useMemo } from "react";
import { Button, notification } from "antd";
import BlogMermaid from "../blog-mermaid";


enum WorkStatus {
    DONE = 'done',// 已完成
    ACTIVE = 'active',// 激活
    PAUSED = "paused",// 暂停
    CRIT = "crit",// 关键任务
    PLANNED = "planned",// 计划任务
    IGNORED = "ignored"
}
interface WorkInfo {
    title: string
    day?: number
    status?: WorkStatus
}

type WorkContentProps = {
    data: WorkInfo[][]
}
export default function BlogWork(props: WorkContentProps) {
    const { data } = props;
    const now = dayjs();
    const startOfWeek = now.startOf('week').add(1, 'day').startOf('day'); // 一周的开始时间是周一 00:00
    const formattedData = useMemo(() => {
        let str = [0, 1, 2, 3, 4].map((_value, index) => {
            const workInfos = data[index] ?? [{ title: "暂无工作内容" }];
            const sectionTitle = `section 周${index + 1}任务`
            const currentDay = startOfWeek.add(index, 'day').format('YYYY-MM-DD')
            const works = workInfos.map((workInfo) => {
                const { title, status = "", day = 1 } = workInfo;
                return `${title} :${status},${currentDay}, ${day}d`
            })
            return [sectionTitle, ...works].join('\n')
        }).join('\n')

        return `
        gantt
        title ${startOfWeek.format('YYYY-MM-DD')}至${startOfWeek.add(6, 'day').format('YYYY-MM-DD')}工作内容
        dateFormat  YYYY-MM-DD
        ${str}
        `

    }, [data])


    function copyToClipboard() {
        const content = new Set();
        let start = 0
        data.forEach((workInfos) => {
            workInfos.forEach((workInfo) => {
                const { title, status } = workInfo;
                if (status == WorkStatus.IGNORED) return;
                content.add(`${start + 1}. ${title}`);
                start++;
            })
        })

        let str = `本周工作内容(${startOfWeek.format('YYYY-MM-DD')}到${startOfWeek.add(6, 'day').format('YYYY-MM-DD')})\n${Array.from(content).join('\n')}`
        notification.info({ type: 'success', message: "已复制工作内容到粘贴板" })
        navigator.clipboard.writeText(str);
    }



    return (
        <>
            <div>
                <Button onClick={copyToClipboard}>复制本周工作内容到粘贴板</Button>
            </div>
            <BlogMermaid chart={formattedData} />
        </>
    )
}