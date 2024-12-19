import { PropsWithChildren } from "react"

export type MdxTitleProps = PropsWithChildren<{
    title?: string
}>
export default function MdxTitle(props: MdxTitleProps) {
    const { children, title } = props
    return (
        <div>
            {children ?? title}
        </div>
    )
}