// GPU is a constructor and namespace for browser
const gpu = new GPU();
const multiplyMatrix = gpu.createKernel(function(a, b) {
    let sum = 0;
    for (let i = 0; i < 512; i++) {
        sum += a[this.thread.y][i] * b[i][this.thread.x];
    }
    return sum;
}).setOutput([512, 512]);

const a = [3, 4]
const b = [5, 6]

const c = multiplyMatrix(a, b);