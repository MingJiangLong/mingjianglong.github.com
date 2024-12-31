import { PropsWithChildren } from "react"
import styles from './index.module.css'
import { FireOutlined } from '@ant-design/icons'
import { Flex } from "antd"

type Props = {
}
export default function (props: PropsWithChildren<Props>) {
    const { children } = props


    return (
        <ol
            // style={{ marginLeft: 32 }}
            className={styles["ol-list"]}
        >
            {children}
        </ol>
    )
}