import { Shape } from "./shape.class.js";

export class CanvasInitializer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  shapes: Shape[];

  constructor(canvas: HTMLCanvasElement, shapes: Shape[]) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.shapes = shapes;
  }

  initialize() {
    this.draw();
    window.requestAnimationFrame(this.initialize.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.shapes.forEach((shape) => {
      this.ctx.fillStyle = shape.color;
      //   shape.x = shape.x + 1;

      this.ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
    });
  }
}
