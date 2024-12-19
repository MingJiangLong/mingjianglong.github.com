import { PropsWithChildren } from "react"
import styles from './index.module.css'
type Props = {

}
export default function (props: PropsWithChildren<Props>) {
    const { children } = props
    return (
        <ol
            className={styles["ol-list"]}
            style={{
                fontSize: "calc(1rem + 0.1vw)",
                color: "#071013e6",
                margin: "1vh 0 1vh calc(2vw)",
            }}
        >
            {children}
        </ol>
    )
}