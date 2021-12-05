document.getElementById('block-e3dbe3f7b4e0400f8cc8d9b0528dc201').innerHTML = '<canvas class="zdog-canvas" width="240" height="240"></canvas>';



//initiate all variables
var linkStart = -25;
var linkColor = '#D9D9D9';
var pointSize = 40;
var pointColor = '#F5F5F5';
var timerStart = 0;
var timerEnd = 0;

var zoom = 1;
var isMobile = false; //initiate as false
const TAU = Zdog.TAU;
var isSpinning = true;

//define all link endpoints
var end1 = -100;
var end2 = -60;
var end3 = -120;
var end4 = -160;
var end5 = -40;
var end6 = -133;
var end7 = -100;

//get canvas element
var canvas = document.getElementsByClassName('zdog-canvas');


//change to projects page on double-click
    //empty right now

// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if (isMobile) {
  zoom = 1
}


// create illustration and handle clicking
  let earth = new Zdog.Illustration({
    element: '.zdog-canvas',
    scale: 4,
    dragRotate: true,
    onDragStart: function() {
        const d = new Date();
        timerStart = d.getTime();
    },
    onDragEnd: function() {
        const d2 = new Date();
        timerEnd = d2.getTime();
        var difference = timerEnd - timerStart;
        console.log(difference);
        if (difference < 100) {
            window.location.href = '/2.html';
        }
    },
    resize: true,
    zoom: zoom,
  }); 

// create two halfs of earth
let half1 = new Zdog.Hemisphere({
  addTo: earth,
  diameter: 40,
  color: '#1976B5',
  fill: true,
});

let half2 = new Zdog.Hemisphere({
  addTo: earth,
  diameter: 40,
  rotate: { x: TAU/2 },
  color: '#105AAA',
});

//create link1
let link1 = new Zdog.Shape({
  addTo: half1,
  path: [
    { z:  linkStart},
    { z:  end1},
  ],
  translate: { z: 0},
  rotate: {x: 20},
  color: linkColor,
  stroke: 1.5,
  fill: true,
});

//add point1 to link1
let point1 = new Zdog.Shape({
  addTo: link1,
  translate: { z: end1 - 20},
  color: pointColor,
  stroke: pointSize,
  fill: true,
});

//attach project icon to point

var eyeGroup = new Zdog.Group({
    addTo: point1,
    scale: 0.5,
  });
  // eye white first
  new Zdog.Ellipse({
    addTo: eyeGroup,
    width: 160,
    height: 80,
    // ...
  });
  // then iris
  let iris = new Zdog.Ellipse({
    addTo: eyeGroup,
    diameter: 70,
    // ...
  });
  // then pupil
  iris.copy({
    diameter: 30,
    color: '#636',
  });
  // highlight last in front
  iris.copy({
    diameter: 30,
    translate: { x: 15, y: -15 },
    color: 'white',
  });


  // light green lands
const land1 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -2, y: 0, z: 5 },
    ],
    translate: { x: 17, y: 5, z: 4 },
    color: "#6FCC50",
    closed: false,
    fill: true,
    stroke: 7,
    addTo: half1,
  });
  land1.copy({
    scale: { x: -1 },
    translate: { x: -17, y: 0, z: 4 },
  })
  
  const land2 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -10, y: 0, z: 4 },
    ],
    translate: { x: 13, y: -10, z: 10 },
    color: "#6FCC50",
    closed: false,
    fill: true,
    stroke: 7,
    addTo: half1,
  });
  
  new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: 5, y: 0, z: 4 },
    ],
    translate: { x: -13, y: -10, z: 10 },
    color: "#6FCC50",
    closed: false,
    fill: true,
    stroke: 7,
    addTo: half1,
  });
  
  const land3 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -2, y: 0, z: 3 },
    ],
    translate: { x: 13, y: 13, z: 7 },
    color: "#6FCC50",
    closed: false,
    fill: true,
    stroke: 4,
    addTo: half1,
  });
  land3.copy({
    scale: { x: -1 },
    translate: { x: -13, y: 13, z: 7 },
  })
  
  const land4 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -7, y: 0, z: 3 },
    ],
    translate: { x: 10, y: -3, z: 16 },
    color: "#6FCC50",
    closed: false,
    fill: true,
    stroke: 4,
    addTo: half1,
  });
  land4.copy({
    scale: { x: -1 },
    translate: { x: -10, y: 3, z: 16 },
  })
  
  // light clouds
  const cloud1 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -2, y: 0, z: 5 },
    ],
    translate: { x: 20, y: 7, z: 4 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 5,
    addTo: half1,
  });
  
  new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: 3, y: 0, z: 1 },
    ],
    translate: { x: -5, y: 7, z: 20 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 5,
    addTo: half1,
  });
  
  const cloud2 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -5, y: 0, z: 10 },
    ],
    translate: { x: 23, y: 2, z: 4 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 4,
    addTo: half1,
  });
  cloud2.copy({
    scale: { x: -1 },
    translate: { x: -23, y: 2, z: 4 },
  })
  
  const cloud3 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -2, y: 0, z: 5 },
    ],
    translate: { x: 20, y: -2, z: 7 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 2,
    addTo: half1,
  });
  cloud3.copy({
    scale: { x: -1 },
    translate: { x: -20, y: -2, z: 7 },
  })
  
  const cloud4 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -2, y: 0, z: 5 },
    ],
    translate: { x: 18, y: -10, z: 7 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 3,
    addTo: half1,
  });
  cloud4.copy({
    scale: { x: -1 },
    translate: { x: -18, y: -10, z: 7 },
  })
  
  // dark clouds
  const cloud5 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: 0, y: 0, z: -3 },
    ],
    translate: { x: 20, y: -8, z: -3 },
    color: "#A6B3DA",
    closed: false,
    fill: true,
    stroke: 3,
    addTo: half1,
  });
  cloud5.copy({
    scale: { x: -1 },
    translate: { x: -20, y: -8, z: -3 },
  })
  
  const cloud6 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -4, y: 0, z: -7 },
    ],
    translate: { x: 20, y: 0, z: -8 },
    color: "#A6B3DA",
    closed: false,
    fill: true,
    stroke: 6,
    addTo: half1,
  });
  cloud6.copy({
    scale: { x: -1 },
    translate: { x: -20, y: 0, z: -8 },
  })
  
  const cloud7 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -3, y: 0, z: -3 },
    ],
    translate: { x: 15, y: 15, z: -8 },
    color: "#A6B3DA",
    closed: false,
    fill: true,
    stroke: 3,
    addTo: half1,
  });
  cloud7.copy({
    scale: { x: -1 },
    translate: { x: -15, y: 15, z: -8 },
  })
  
  new Zdog.Shape({
    path: [
      { x: 0, y:  0, z: 0 },
      { x: -5, y:  0, z: 0 },
    ],
    translate: { x: -5, y: -4, z: -18 },
    color: "#A6B3DA",
    fill: true,
    stroke: 8,
    addTo: half1,
  });
  
  // dark green lands
  const land5 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z: 0 },
      { x: 2.5, y:  0, z: 2 },
    ],
    translate: { x: 7, y: 7, z: -16 },
    color: "#489268",
    fill: true,
    stroke: 4,
    addTo: half1,
  });
  land5.copy({
    scale: { x: -1 },
    translate: { x: -7, y: 12, z: -16 },
  })
  
  const land6 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z: 0 },
      { x: 10, y:  0, z: 9 },
    ],
    translate: { x: 5, y: -2, z: -17 },
    color: "#489268",
    fill: true,
    stroke: 8,
    addTo: half1,
  });
  
  const land7 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z: 0 },
      { x: 2.5, y:  0, z: 5 },
    ],
    translate: { x: 13, y: -10, z: -10 },
    color: "#489268",
    fill: true,
    stroke: 4,
    addTo: half1,
  });
  land5.copy({
    scale: { x: -1 },
    translate: { x: -13, y: -10, z: -10 },
    stroke: 5,
  })
  


function animate() {
  earth.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();




