import { useAnchor } from '@/hooks/useAnchor';
import { Divider, Typography, } from 'antd';
import { use, useEffect, useRef } from 'react';
const { Title, } = Typography;
export default function BlogTitle(
    props: Parameters<typeof Title>[0]
) {

    const divRef = useRef<HTMLDivElement>(null)

    const anchors = useAnchor();
    function onAddAnchorAndSetId() {
        console.log("title", props.children);
        const children = props.children;
        if (typeof children !== "string") return;
        const id = anchors.addAnchors?.(children);
        divRef.current?.setAttribute("id", id ?? "");
    }

    useEffect(() => {
        onAddAnchorAndSetId()
    }, [])
    return (
        <div style={{ marginTop: 5 }} ref={divRef}>
            <Title {...props} />
            <Divider />
        </div>
    )
}
