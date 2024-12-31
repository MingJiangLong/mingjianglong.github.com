import { PropsWithChildren } from "react"

type Props = {
    className?: string
}
export default function (props: PropsWithChildren<Props>) {

    const { children } = props
    return (
        <blockquote
            style={{
                fontStyle: "italic",
                backgroundColor: "#20a4f326",
                padding: 10,
                borderLeft: `5px solid #20a4f3e6`,
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                margin: "2em 0"
            }}
        >
            {
                children
            }
        </blockquote>
    )
}