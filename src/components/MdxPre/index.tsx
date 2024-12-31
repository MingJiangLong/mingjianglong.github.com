import { PropsWithChildren } from "react";

type Props = {}
export default function (props: PropsWithChildren<Props>) {

    return (
        <pre style={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            {props.children}
        </pre>
    );
}