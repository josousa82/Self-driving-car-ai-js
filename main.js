const canvas = document.getElementById("myCanvas");

const width = (canvas.width = 300);

const ctx = canvas.getContext("2d");
const road = new Road(width / 2, width * 0.9);
const car = new Car(100, 100, 30, 50);
console.table(road);
animate();

function animate() {
  car.update();
  canvas.height = window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate);
}
