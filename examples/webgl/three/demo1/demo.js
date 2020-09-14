// 1. 设置场景
const scene = new THREE.Scene();
// 2. 设置相机
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

// 3. 设置绘制对象
const renderer = new THREE.WebGLRenderer();

renderer.setClearColor(new THREE.Color(0xeeeeee));
renderer.setSize(window.innerWidth, window.innerHeight);

// 4. 设置辅助测试工具
const axes = new THREE.AxesHelper(20);
scene.add(axes);

// 5. 设置平面
const planeGeometry = new THREE.PlaneGeometry(70, 50, 1, 1);
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane);

// 6. 设置立方体
const cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -4;
cube.position.y = 3;
cube.position.z = 0;
scene.add(cube);

// 7. 设置球体
const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x7777ff,
  wireframe: true,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 20;
sphere.position.y = 4;
sphere.position.z = -2;
scene.add(sphere);

// 8. 将renderer的输出挂载到body上
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);