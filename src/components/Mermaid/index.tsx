import React, { useEffect, useState } from 'react'
import { Mermaid } from 'mdx-mermaid/lib/Mermaid';
import { Skeleton } from 'antd';

type MermaidProps = {
    chart: string
}

export default function (props: MermaidProps) {
    const { chart } = props

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div style={{ margin: '1em 0' }}>
            {


                isClient ? (
                    <Mermaid chart={`${chart}`}
                        config={{

                            mermaid: {
                                suppressErrorRendering: false,
                                startOnLoad: true,
                                gantt: {},

                            },
                            output: "ast"

                        }} />
                ) : <Skeleton />
            }

        </div>
    )
}