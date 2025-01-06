import React, { useEffect, useState } from 'react'
import { Mermaid } from 'mdx-mermaid/lib/Mermaid';

type MermaidProps = {
    chart: string
}

export default function (props: MermaidProps) {
    const { chart } = props

    useEffect(() => {
    }, [])
    return (
        <div style={{ margin: '1em 0' }}>
            <Mermaid chart={`${chart}`} />
        </div>
    )
}