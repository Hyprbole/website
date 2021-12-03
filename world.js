document.getElementById('block-e3dbe3f7b4e0400f8cc8d9b0528dc201').innerHTML = '<canvas class="zdog-canvas" width="240" height="240"></canvas>';
window.onunload = function(){};


let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  // stop spinning when drag starts
  onDragStart: function() {
    isSpinning = false;
  },
});

// circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  translate: { z: 40 },
  stroke: 20,
  color: '#636',
});

// square
new Zdog.Rect({
  addTo: illo,
  width: 80,
  height: 80,
  translate: { z: -40 },
  stroke: 12,
  color: '#E62',
  fill: true,
});

function animate() {
  illo.rotate.y += isSpinning ? 0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();


