const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const rectSize = [100, 100];
context.save();
context.translate(-0.5 * rectSize[0], -0.5 * rectSize[1]);
context.fillStyle = 'red';
context.beginPath();
context.rect(canvas.width * 0.5, canvas.height * 0.5, 100, 100);
context.fill();
context.restore(); // 恢复状态
