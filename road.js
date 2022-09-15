class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    this.left = 90;
    this.right = 90;
    // this.left = this.x - this.width / 2;
    // this.right = this.x + this.width / 2;

    const infinity = 1000000;
    this.top = infinity;
    this.bottom = infinity;
  }

  draw(ctx) {
    ctx.lineWidth = 50;
    ctx.strokeStyle = "white";
    try {
      ctx.beginPath();
      ctx.moveTo(this.left, this.top);
      ctx.lineTo(this.left, this.bottom);

      ctx.beginPath();
      ctx.moveTo(this.right, this.top);
      ctx.lineTo(this.right, this.bottom);
      ctx.stroke();
    } catch (e) {
      console.error(e);
    }
  }
}
