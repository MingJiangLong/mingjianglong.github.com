import { PropsWithChildren } from "react"
import { Typography } from 'antd'

const { Paragraph } = Typography
type Props = {

}
export default function (props: PropsWithChildren<Props>) {
    const { children } = props

    return (
        <Paragraph color="#071013f2" style={{ margin: "2em 0" }}>
            {children}
        </Paragraph >
    )
}