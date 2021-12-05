document.getElementById('block-e3dbe3f7b4e0400f8cc8d9b0528dc201').innerHTML = '<canvas class="zdog-canvas" width="240" height="240"></canvas>';


let isSpinning = true;
var linkStart = -60;
var pointSize = 40;
var zoom = 2;

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if (isMobile) {
  zoom = 1
}

  let earth = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
    resize: true,
    zoom: zoom,
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
    { z:   linkStart},
    { z:  -110},
  ],
  translate: { z: 0},
  rotate: {x: 20},
  color: '#D9D9D9',
  stroke: 2,
  fill: true,
});




let link2 = new Zdog.Shape({
  addTo: sphere,
  path: [
    { z:   linkStart},
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
    { z:   linkStart},
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
    { z:   linkStart},
    { z:  -90},
  ],
  translate: { z: 0},
  rotate: {x: 10, y: -200, z: -10},
  color: '#D9D9D9',
  stroke: 2,
  fill: true,
});

let link5 = new Zdog.Shape({
  addTo: sphere,
  path: [
    { z:   linkStart},
    { z:  -90},
  ],
  translate: { z: 0},
  rotate: {x: -96, y: 300, z: -250},
  color: '#D9D9D9',
  stroke: 2,
  fill: true,
});

new Zdog.Shape({
  addTo: link1,
  translate: { z: -120},
  color: '#F5F5F5',
  stroke: pointSize,
  fill: true,
});

new Zdog.Shape({
  addTo: link2,
  translate: { z: -120},
  color: '#F5F5F5',
  stroke: pointSize,
  fill: true,
});

new Zdog.Shape({
  addTo: link3,
  translate: { z: -170},
  color: '#F5F5F5',
  stroke: pointSize,
  fill: true,
});

new Zdog.Shape({
  addTo: link4,
  translate: { z: -120},
  color: '#F5F5F5',
  stroke: pointSize,
  fill: true,
});

new Zdog.Shape({
  addTo: link5,
  translate: { z: -120},
  color: '#F5F5F5',
  stroke: pointSize,
  fill: true,
});

function animate() {
  earth.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();


