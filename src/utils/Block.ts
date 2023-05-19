export default class Block {
  canvas: HTMLCanvasElement
  content: CanvasRenderingContext2D | null
  hours = 0
  minutes = 0
  seconds = 0
  timer: NodeJS.Timer | null = null
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.content = this.canvas.getContext('2d')
    this.draw()
  }

  drawShell() {
    if (!this.content) return
    this.content.clearRect(0, 0, 600, 600)
    this.content.beginPath()
    this.content.arc(300, 300, 200, 0, 2 * Math.PI, false)
    this.content.fillStyle = 'pink'
    this.content.fill()
    this.content.lineWidth = 20
    this.content.strokeStyle = "skyblue";
    this.content.stroke()
    this.content.closePath()

    for (let i = 0; i < 12; i++) {
      this.content.save()
      this.content.lineWidth = 2;
      this.content.strokeStyle = '#333'
      this.content.translate(300, 300)
      this.content.rotate(i * 30 * Math.PI / 180)// 算出来的是弧度
      this.content.beginPath()
      this.content.moveTo(0, -170)
      this.content.lineTo(0, -190)
      this.content.stroke()
      this.content.closePath()
      this.content.restore()
    }
    for (let i = 0; i < 60; i++) {
      this.content.save()
      this.content.lineWidth = 1;
      this.content.strokeStyle = 'black'
      this.content.translate(300, 300)
      this.content.rotate(i * 6 * Math.PI / 180)
      this.content.beginPath()
      this.content.moveTo(0, -180)
      this.content.lineTo(0, -190)
      this.content.stroke()
      this.content.closePath()
      this.content.restore()
    }
  }

  drawHoursTag(num: number) {
    if (!this.content) return;
    this.content.save()
    this.content.beginPath()
    this.content.lineWidth = 3
    this.content.strokeStyle = 'cadetblue'
    this.content.translate(300, 300)
    this.content.rotate(num * 30 * Math.PI / 180)
    this.content.beginPath()
    this.content.moveTo(0, -90)
    this.content.lineTo(0, 10)
    this.content.stroke()
    this.content.closePath()
    this.content.restore()
  }
  drawMinutesTag(num: number) {
    if (!this.content) return;
    this.content.save()
    this.content.beginPath()
    this.content.lineWidth = 3
    this.content.strokeStyle = 'lightsteelblue'
    this.content.translate(300, 300)
    this.content.rotate(num * 6 * Math.PI / 180)
    this.content.beginPath()
    this.content.moveTo(0, -120)
    this.content.lineTo(0, 15)
    this.content.stroke()
    this.content.closePath()
    this.content.restore()
  }

  drawSecondsTag(num: number) {
    if (!this.content) return;
    this.content.save()
    this.content.beginPath()
    this.content.lineWidth = 1
    this.content.strokeStyle = 'coral'
    this.content.translate(300, 300)
    this.content.rotate(num * 6 * Math.PI / 180)
    this.content.beginPath()
    this.content.moveTo(0, -160)
    this.content.lineTo(0, 17)
    this.content.stroke()
    this.content.closePath()
    this.content.restore()
  }

  getCurrentTime() {
    const now = new Date();
    const hours = now.getHours()
    return {
      hours: hours > 12 ? hours - 12 : hours,
      minutes: now.getMinutes(),
      seconds: now.getSeconds()
    }
  }

  draw() {
    this.drawShell()
    const { hours, minutes, seconds } = this.getCurrentTime()
    this.drawSecondsTag(seconds)
    this.drawMinutesTag(minutes)
    this.drawHoursTag(hours)
  }
  start() {
    this.timer = setInterval(() => {
      this.draw()
    }, 1000)
  }
  stop() {
    if (!this.timer) return
    clearInterval(this.timer)
  }
}