import { PropsWithChildren } from "react"
import { Affix, Divider, Typography, } from 'antd';
const { Title, Paragraph } = Typography;

export type MdxTitleProps = PropsWithChildren<{
    level?: 1 | 2 | 3 | 4 | 5
}>
export default function MdxTitle(props: MdxTitleProps) {
    const { children, level } = props


    return (
        <div style={{ position: Number(level) <= 2 ? "sticky" : "static", top: 0, }}>
            <Title level={level} style={{ textAlign: Number(level) <= 2 ? "center" : "left" }}>
                {children}
            </Title>
            {/* <Divider /> */}
        </div>
    )
}