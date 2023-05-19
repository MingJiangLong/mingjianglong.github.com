import React, { useEffect } from "react"
import Block from "@/utils/block"
/**
 *
 * @param props {HomeProps}
 */
export default function Home(props: HomeProps) {
  useEffect(() => {
    new Block(document.getElementById("block") as HTMLCanvasElement).start()
  }, [])
  return (
    <div
      id="home"
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas id="block" height={800} width={800} />
    </div>
  )
}

type HomeProps = {}
