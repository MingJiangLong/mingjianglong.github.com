
class Start {
  x = 0
  y = 0
  color = 'grey'
  context: CanvasRenderingContext2D | null
  canvas: HTMLCanvasElement
  timer: NodeJS.Timeout | null = null

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext("2d")
  }

  randomPosition() {
    this.x = this.canvas.height * Math.random()
    this.y = this.canvas.width * Math.random()
  }

  randomColor() {
    this.color = Math.random() < 0.5 ? 'grey' : 'white'
  }


  draw() {
    if (!this.context) return;
    this.randomColor()
    this.randomPosition()
    this.context?.beginPath();
    this.context.arc(this.x, this.y, 0.05, 0, 2 * Math.PI);
    this.context.strokeStyle = Math.random() < 0.5 ? 'grey' : 'white'
    this.context.stroke();
    this.context.closePath()
  }
}

class MeteorRain {
  x = -1;//流星的横坐标
  y = -1;//流星的纵坐标
  lgth = -1;//流星的长度
  angle = 30; //倾斜角度
  width = -1;//流星所占宽度，及矩形的宽度
  height = -1;//流星所占高度，及矩形的高度
  speed = 1;//速度
  offset_x = -1;//横轴移动偏移量
  offset_y = -1;//纵轴移动偏移量
  alpha = 1; //透明度

  context: CanvasRenderingContext2D | null
  canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
  }
  init() {
    this.alpha = 1;//透明度
    this.angle = 30; //流星倾斜角
    this.speed = Math.ceil(Math.random() + 0.5); //流星的速度

    let x = Math.random() * 80 + 180;
    let cos = Math.cos(this.angle * 3.14 / 180);
    let sin = Math.sin(this.angle * 3.14 / 180);

    this.lgth = Math.ceil(x);//流星长度

    this.width = this.lgth * cos;  //流星所占宽度，及矩形的宽度
    this.height = this.lgth * sin; //流星所占高度，及矩形的高度
    this.offset_x = this.speed * cos * 3.5;
    this.offset_y = this.speed * sin * 3.5;

    // this.getPos(i);
  }

  countPos() {
    //往左下移动,x减少，y增加
    this.x = this.x - this.offset_x;
    this.y = this.y + this.offset_y;
  }

  draw() {
    if (!this.context) return
    this.context.save()
    this.context.beginPath();
    this.context.lineWidth = 2.5
    this.context.globalAlpha = this.alpha

    const line = this.context.createLinearGradient(this.x, this.y, this.x + this.width, this.y - this.height)

    line.addColorStop(0, "rgba(255, 255, 255, 1)");
    line.addColorStop(1, "rgba(255, 255,255 , 0)");

    if (this.alpha < 0) this.alpha = -this.alpha

    this.context.strokeStyle = line
    this.context.moveTo(this.x, this.y)
    this.context.lineTo(this.x + this.width, this.y - this.height)
    this.context.closePath()
    this.context.stroke()
    this.context.restore()
  }

}

class HomeCanvas {

  startTimer: NodeJS.Timeout | null = null
  startNumber = 0

  shineNumber = 0;
  canvas = document.createElement("canvas")
  context = this.canvas.getContext("2d")
  container: HTMLElement
  constructor(container: HTMLElement) {
    this.container = container
  }

}