import React, { useEffect, useRef } from "react"
import Block from "@/utils/Block"



class Snow {

  /** 位置x */
  x!: number

  /** 位置y */
  y!: number

  /** 半径 */
  r!: number

  density!: number
  /** 透明度 */
  opacity!: number

  /** 摆动 */
  swing!: number

  constructor(public canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.buildSnow()
  }

  buildSnow() {
    const canvasWidth = this.canvas.width;
    const canvasHeight = this.canvas.height;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight
    this.r = Math.random() + .2;
    this.density = Math.random() * 0.5 + 0.5;
    this.opacity = Math.random();
    this.swing = Math.random(); // 用于左右摆动
  }

  draw() {
    const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }


  update() {
    // 垂直下落速度
    this.y += Math.pow(this.density, 2) + .1;

    // 模拟风力和摆动 (聚散飘舞感的核心)
    // 使用 Math.cos 或 Math.sin 制造左右摇摆的动态效果
    this.x += Math.cos(this.swing += 0.01);

    // 如果雪花超出屏幕，重置回顶部
    if (this.y > this.canvas.height || this.x > this.canvas.width || this.x < 0) {
      this.buildSnow();
      this.y = -10
    }
  }
}
/**
 *
 * @param props {HomeProps}
 */
export default function Home(props: HomeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // useEffect(() => {
  //   new Block(document.getElementById("block") as HTMLCanvasElement).start()
  // }, [])

  // 雪花数量
  const maxFlakes = 100;
  const flakes = useRef<Snow[]>([]);

  function init() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    for (let i = 0; i < maxFlakes; i++) {
      flakes.current.push(new Snow(canvas));
    }
    snowLoop();
  }

  function snowLoop() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < maxFlakes; i++) {
      flakes.current[i].update();
      flakes.current[i].draw();
    }
    requestAnimationFrame(snowLoop);
  }


  useEffect(() => {
    init()
  }, [])


  return (
    <div
      id="home"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <canvas id="snowCanvas" ref={canvasRef} style={{ flex: 1 }} />
    </div>
  )
}

type HomeProps = {}
