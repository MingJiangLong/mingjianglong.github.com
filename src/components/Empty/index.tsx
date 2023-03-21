import React from "react"

/**
 *
 * @param props {EmptyProps}
 */
export default function Empty(props: EmptyProps) {
  return <div style={{ width: "100%", height: "100%" }}>暂无数据</div>
}

type EmptyProps = {}
