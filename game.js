const THREE = require('./libs/three.js');


var canvas = wx.createCanvas();

var camera, scene, renderer;

var cube;


function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ canvas: canvas });
    
    renderer.setSize(canvas.width, canvas.height);
    
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z = 5;
}


function update(){
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
}

var animate = function () {
    requestAnimationFrame(animate);
    update();
    renderer.render(scene, camera);
};




init();
animate();