document.getElementById('block-e3dbe3f7b4e0400f8cc8d9b0528dc201').innerHTML = '<canvas class="zdog-canvas" width="240" height="240"></canvas>';


let isSpinning = true;

// Made with Zdog

let earth = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  resize: true,
  zoom: 4,
});

// circle
let sphere = new Zdog.Shape({
  addTo: earth,
  diameter: 80,
  stroke: 100,
  color: '#5792FF',
});

//link 01
let link1 = new Zdog.Shape({
  addTo: sphere,
  path: [
    { z:   0},
    { z:  -60},
  ],
  translate: { z: -90},
  color: '#D9D9D9',
  stroke: 4,
  fill: true,
});

new Zdog.Shape({
  addTo: link1,
  translate: { z: -70},
  color: '#F5F5F5',
  stroke: 20,
  fill: true,
});

new Zdog.Shape({
  addTo: sphere,
  path: [
    { z:   0},
    { z:  60},
  ],
  translate: { z: 90},
  color: '#D9D9D9',
  stroke: 4,
  fill: true,
});

function animate() {
  earth.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();


