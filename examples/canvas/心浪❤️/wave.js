class Wave {
  constructor({
    canvasWidth, // 轴长
    canvasHeight, // 轴高
    waveWidth = 0.055, // 波浪的宽度数越小越宽
    waveHeight = 6, // 设置波浪的高度
    speed = 0.4, // 速度
    xOffset = 0,
    colors = ["#dbb77a", "#bf8f38"],
  }) {
    this.points = [];
    this.startX = 0;
    this.colors = colors;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.waveWidth = waveWidth;
    this.waveHeight = waveHeight;
    this.speed = speed;
    this.xOffset = xOffset;
  }
  getChartColor(ctx) {
    const radius = this.canvasWidth / 2;
    const grd = ctx.createLinearGradient(
      radius,
      radius,
      radius,
      this.canvasHeight
    );
    grd.addColorStop(0, this.colors[0]);
    grd.addColorStop(1, this.colors[1]);
    return grd;
  }
  // 波浪内部的绘制
  draw(ctx) {
    ctx.save();
    const points = this.points;
    ctx.beginPath();
    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      ctx.lineTo(point[0], point[1]);
    }
    ctx.lineTo(this.canvasWidth, this.canvasHeight);
    ctx.lineTo(this.startX, this.canvasHeight);
    ctx.lineTo(points[0][0], points[0][1]);
    ctx.fillStyle = this.getChartColor(ctx);
    ctx.fill();
    ctx.restore();
  }
  // 更新波浪
  update({ nowRange } = {}) {
    this.points = [];
    const {
      startX,
      canvasWidth, // 轴长
      canvasHeight,
      waveWidth,
      waveHeight,
      speed,
      xOffset,
    } = this;
    for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
      const y =
        waveHeight * Math.sin((startX + x) * waveWidth + xOffset);
      const dY = canvasHeight * (1 - (nowRange / 100));
      this.points.push([x, y + dY]);
    }
    this.xOffset += this.speed;
  }
}
