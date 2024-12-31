import { PropsWithChildren } from "react"
type Props = {

}
export default function (props: PropsWithChildren<Props>) {
    const { children } = props
    return (
        <li style={{ marginLeft: 32 }}>
            {children}
        </li>
    )
}