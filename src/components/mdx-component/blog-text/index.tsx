

import { Typography, TypographyProps } from "antd";
import { HTMLAttributes, PropsWithChildren } from "react";
const { Text } = Typography

export default function BlogText(
    props: PropsWithChildren<
        {
            text: string
        } & HTMLAttributes<HTMLSpanElement>["style"]
    >
) {
    const { text, children, ...rest } = props;
    return (
        <Text style={{
            color: "#2184ff",
            ...rest
        }}>{children || text}</Text>
    )
}

