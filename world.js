document.getElementById('block-e3dbe3f7b4e0400f8cc8d9b0528dc201').innerHTML = '<canvas class="zdog-canvas" width="240" height="240"></canvas>';


let isSpinning = true;

// Made with Zdog

var linkPoint = -60

let earth = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  resize: true,
  zoom: 2,
});

// circle
let sphere = new Zdog.Shape({
  addTo: earth,
  diameter: 80,
  stroke: 100,
  color: '#008AED',
});

//link 01
let link1 = new Zdog.Shape({
  addTo: sphere,
  path: [
    { z:   linkPoint},
    { z:  -110},
  ],
  translate: { z: 0},
  rotate: {x: 20},
  color: '#D9D9D9',
  stroke: 2,
  fill: true,
});

new Zdog.Shape({
  addTo: link1,
  translate: { z: -120},
  color: '#F5F5F5',
  stroke: 20,
  fill: true,
});


let link2 = new Zdog.Shape({
  addTo: sphere,
  path: [
    { z:   linkPoint},
    { z:  -130},
  ],
  translate: { z: 0},
  rotate: {x: 100, y: 50},
  color: '#D9D9D9',
  stroke: 2,
  fill: true,
});

let link3 = new Zdog.Shape({
  addTo: sphere,
  path: [
    { z:   linkPoint},
    { z:  -130},
  ],
  translate: { z: 0},
  rotate: {x: 200, y: -50, z: 60},
  color: '#D9D9D9',
  stroke: 2,
  fill: true,
});

let link4 = new Zdog.Shape({
  addTo: sphere,
  path: [
    { z:   linkPoint},
    { z:  -90},
  ],
  translate: { z: 0},
  rotate: {x: 10, y: -200, z: -10},
  color: '#D9D9D9',
  stroke: 2,
  fill: true,
});

function animate() {
  earth.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();



