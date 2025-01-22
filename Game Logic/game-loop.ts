import { CanvasInitializer } from "./Helpers/initializer.class.js";
import { Shape } from "./Helpers/shape.class.js";

const canvas = document.querySelector("canvas")!;

const canvasInitializer = new CanvasInitializer(canvas, [
  new Shape(0, 0, 10, 10, "red"),
  new Shape(10, 10, 10, 10, "blue"),
  new Shape(20, 20, 10, 10, "rosybrown"),
]);

window.requestAnimationFrame(
  canvasInitializer.initialize.bind(canvasInitializer)
);
