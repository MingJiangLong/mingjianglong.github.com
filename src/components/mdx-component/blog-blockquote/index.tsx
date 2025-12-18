import { PropsWithChildren } from "react"

type Props = {
}

interface I_BLogBlockquote extends PropsWithChildren<{}> {

}
export function BlogBlockquote(props: I_BLogBlockquote) {


    const { children } = props
    return (
        <div
            style={{
                backgroundColor: "#20a4f326",
                padding: '5px 12px 5px',
                borderLeft: `5px solid #20a4f3e6`,
                borderRadius: 5
            }}
        >
            {
                children
            }
        </div>
    )
}