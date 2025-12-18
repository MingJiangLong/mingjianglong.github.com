import { PropsWithChildren } from "react"
import { Typography } from 'antd'
const { Paragraph } = Typography
type I_BlogParagraph = Parameters<typeof Paragraph>[0]
export default function BlogParagraph(props: I_BlogParagraph) {
    return (
        <Paragraph {...props} style={{ marginTop: 5 }} />
    )
}