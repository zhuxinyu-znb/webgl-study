function main() {
    var canvas = document.getElementById('webgl');
    var gl = canvas.getContext('3d');
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}