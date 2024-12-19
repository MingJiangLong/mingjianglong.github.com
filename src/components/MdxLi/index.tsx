import { PropsWithChildren } from "react"
type Props = {

}
export default function (props: PropsWithChildren<Props>) {
    const { children } = props
    return (
        <li
            style={{
                marginBottom: '2vh',
            }}
        >
            {children}
        </li>
    )
}