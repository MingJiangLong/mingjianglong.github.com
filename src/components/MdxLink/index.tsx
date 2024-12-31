
import { Tooltip, Typography } from 'antd';
import { PropsWithChildren } from 'react';
const { Link } = Typography;
import {
    LinkOutlined
} from '@ant-design/icons';
type Props = {
    href?: string
}
export default function (props: PropsWithChildren<Props>) {

    const { children, href } = props
    return (
        <Tooltip color='#108ee9' title={href}>
            <Link href={href} target="_blank" rel="noopener noreferrer" style={{ padding: "0 3px" }}>
                <LinkOutlined style={{ paddingRight: 3, }} />
                {children}
            </Link>
        </Tooltip>
    )
}