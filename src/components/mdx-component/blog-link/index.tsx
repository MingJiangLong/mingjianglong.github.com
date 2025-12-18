import { PropsWithChildren, useState } from "react"
import styles from "./index.module.css"
import { Tooltip, Typography } from 'antd';
const { Link } = Typography;

interface I_BlogLinkProps extends PropsWithChildren<{}> {
    href?: string
}
export default function BlogLink(
    props: I_BlogLinkProps
) {
    const { children, href } = props;
    return (
        <Tooltip color='#108ee9' title={href}>
            <Link href={href} target="_blank" rel="noopener noreferrer" >
                {children}
            </Link>
        </Tooltip>
    )
}
