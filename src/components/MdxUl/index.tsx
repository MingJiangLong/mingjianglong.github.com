import { PropsWithChildren } from "react"
import { Flex } from "antd"
type Props = {

}
export default function (props: PropsWithChildren<Props>) {
    const { children } = props
    return (
        <ul style={{ marginBottom: 20 }}>
            {children}
        </ul>
    )
}