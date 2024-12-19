import { PropsWithChildren } from "react"
import { Typography } from 'antd'

const { Paragraph } = Typography
type Props = {

}
export default function (props: PropsWithChildren<Props>) {
    const { children } = props

    return (
        <Paragraph color="#071013f2" >
            {children}
        </Paragraph >
    )
}