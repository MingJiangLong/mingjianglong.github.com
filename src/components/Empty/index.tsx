import Image from "next/image"
import React from "react"
/**
 *
 * @param props {EmptyProps}
 */
export default function Empty(props: EmptyProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <Image
        width="100"
        height="100"
        alt="..."
        src="/nodata.png"
        style={{
          height: "20em",
          width: "20em",
          marginTop:"10em"
        }}
      /> */}
      <img
        src="/images/nodata.png"
        alt="..."
        style={{
          height: "20em",
          width: "20em",
          marginTop: "10em",
        }}
      />
      <h5 style={{ marginTop: "2em" }}>没得咯~</h5>
    </div>
  )
}

type EmptyProps = {}
