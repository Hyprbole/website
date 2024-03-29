
document.addEventListener("DOMContentLoaded", function(){
    //dom is fully loaded, but maybe waiting on images & css files


document.getElementById('block-e3dbe3f7b4e0400f8cc8d9b0528dc201').innerHTML = '<canvas class="zdog-canvas" width="240" height="240"></canvas>';
//init zfront
//Zfont.init(Zdog);


//initiate all variables
    //general
    var scale = 6;
    var zoom = 1;
    var isMobile = false; //initiate as false
    //links
var linkStart = -21;
var linkColor = '#D9D9D9';
var linkStroke = 1.5;
var pointSize = 40;
var pointColor = 'hsla(0, 0%, 94%, 0.6)';


    //clouds
var strokeBig = 20
var strokeSmall = 9

    //clicking
var timerStart = 0;
var timerEnd = 0;


//zzzdog
const TAU = Zdog.TAU;
let isSpinning = true;


//define all link endpoint variables
var end1 = -40;
var end2 = -60;
var end3 = -30;
var end4 = -44;
var end5 = -40;
var end6 = -133;
var end7 = -100;

//get canvas element
var canvas = document.getElementsByClassName('zdog-canvas');


// //change to projects page on double-click
// canvas[0].ondblclick = function () {

// };

// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if (isMobile) {
  //zoom = 1;
  
  scale = 2;
  pointSize = 10;
  strokeBig = 10;
  strokeSmall = 4;
}

// let description = new Zdog.Illustration({
//     element: '.zdog-canvas',
//     translate: {x: 40, y: 640},

//   });

// description.setSize(1,1)


//   let myFont = new Zdog.Font({
//     src: './inter.tff'
//   });

//   new Zdog.Text({
//     addTo: description,
//     font: myFont,
//     value: 'Tap to read about reliable design for an \ninterlinked but personal world',
//     fontSize: 30,
//     color: pointColor,
//     textAlign: 'left',
//     textBaseline: 'bottom',
//   });
  


// create illustration and handle clicking
  let earth = new Zdog.Illustration({
    element: '.zdog-canvas',
    scale: scale,
    dragRotate: true,
    rotate: {y: 40, x: 0},
    onDragStart: function() {
        isSpinning = false;
        const d = new Date();
        timerStart = d.getTime();
    },
    onDragEnd: function() {
        const d2 = new Date();
        timerEnd = d2.getTime();
        var difference = timerEnd - timerStart;
        console.log(difference);
        if (difference < 100) {
            //window.location.href = '/2.html';
            window.location.href = '/philosophy';
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
  rotate: {x: 20, y: 200,z:-200},
  color: linkColor,
  stroke: linkStroke,
  fill: true,
});

//add point1 to link1
let point1 = new Zdog.Shape({
  addTo: link1,
  translate: { z: end1 - 5},
  color: pointColor,
  stroke: pointSize,
  fill: true,
});

//attach project icon to point

var eyeGroup = new Zdog.Group({
    addTo: point1,
    scale: 0.2,
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


//create link2
let link2 = new Zdog.Shape({
    addTo: half1,
    path: [
      { z:  linkStart},
      { z:  end2},
    ],
    translate: { z: 0},
    rotate: {x: 149, y: 200,z:-10},
    color: linkColor,
    stroke: linkStroke,
    fill: true,
  });
  
  //add point2 to link2
  let point2 = new Zdog.Shape({
    addTo: link2,
    translate: { z: end2 - 5},
    color: pointColor,
    stroke: pointSize,
    fill: true,
  });


  //create link3
let link3 = new Zdog.Shape({
    addTo: half1,
    path: [
      { z:  linkStart},
      { z:  end3},
    ],
    translate: { z: 0},
    rotate: {x: TAU/2, y: TAU/1,z: TAU/4},
    color: linkColor,
    stroke: linkStroke,
    fill: true,
  });
  
  //add point3 to link3
  let point3 = new Zdog.Shape({
    addTo: link3,
    translate: { z: end3 - 5},
    color: pointColor,
    stroke: pointSize,
    fill: true,
  });


    //create link4
let link4 = new Zdog.Shape({
    addTo: half1,
    path: [
      { z:  linkStart},
      { z:  end4},
    ],
    translate: { z: 0},
    rotate: {x: TAU/1, y: TAU/3, z: TAU/2},
    color: linkColor,
    stroke: linkStroke,
    fill: true,
  });


  
  //add point4 to link4
  let point4 = new Zdog.Shape({
    addTo: link4,
    translate: { z: end4 - 5},
    color: pointColor,
    stroke: pointSize,
    fill: true,
  });

// //create link4.1
// let link4_1 = new Zdog.Shape({
//     addTo: point4,
//     path: [
//       { z:  0},
//       {x: 10, y: -10, z: -30 },
//     ],
//     translate: { z: 0},
//     rotate: {x: TAU/1, y: TAU/3, z: TAU/2},
//     color: linkColor,
//     stroke: linkStroke,
//     fill: true,
//   });

// //create link4.1
let link4_1 = new Zdog.Shape({
    addTo: point4,
    path: [
      { x: 2, y: 3, z: 0 },   // start
      { arc: [
        { x:  10, y: 15 }, // corner
        {x: 30, y: 12, z: 7 }, // end point
      ]},
    ],
    closed: false,
    stroke: 5,
    color: linkColor,
  });


//add point4.1 to link4.1
    let point4_1 = new Zdog.Shape({
        addTo: link4_1,
        translate: {x: 34, y: 12, z: 8  },
        color: pointColor,
        stroke: pointSize,
        fill: true,
      });



      //create link5
let link5 = new Zdog.Shape({
    addTo: half1,
    path: [
      { z:  linkStart},
      { z:  end5},
    ],
    translate: { z: 0},
    rotate: {x: TAU/-2, y: TAU/2, z: TAU/2},
    color: linkColor,
    stroke: linkStroke,
    fill: true,
  });


 
  
  //add point5 to link5
  let point5 = new Zdog.Shape({
    addTo: link5,
    translate: { z: end5 - 5},
    color: pointColor,
    stroke: pointSize,
    fill: true,
  });



  //--------------start of globe surface ---------

//   // light green lands
// const land1 = new Zdog.Ellipse({
//     // path: [
//     //   { x: 0, y:  0, z:  0 },
//     //   { x: -2, y: 0, z: 5 },
//     // ],
//     // translate: { x: 17, y: 5, z: 4 },
//     color: "#6FCC50",
//     closed: false,
//     stroke: 20,
//     rotate: {z: 10, x: 200, y: 30},
//     diameter: 45,
//     quarters: 0.2,
//     addTo: half1,
//   });
// //   land1.copy({
// //     scale: { x: -1 },
// //     translate: { x: -17, y: 0, z: 4 },
// //   })
  
// //   const land2 = new Zdog.Shape({
// //     path: [
// //       { x: 0, y:  0, z:  0 },
// //       { x: -10, y: 0, z: 4 },
// //     ],
// //     translate: { x: 13, y: -10, z: 10 },
// //     color: "#6FCC50",
// //     closed: false,
// //     fill: true,
// //     stroke: 7,
// //     addTo: half1,
// //   });
  
//   new Zdog.Shape({
//     path: [
//       { x: 0, y:  0, z:  0 },
//       { x: 5, y: 0, z: 4 },
//     ],
//     translate: { x: -13, y: -10, z: 10 },
//     color: "#6FCC50",
//     closed: false,
//     fill: true,
//     stroke: 7,
//     addTo: half1,
//   });
  
//   const land3 = new Zdog.Shape({
//     path: [
//       { x: 0, y:  0, z:  0 },
//       { x: -2, y: 0, z: 3 },
//     ],
//     translate: { x: 13, y: 13, z: 7 },
//     color: "#6FCC50",
//     closed: false,
//     fill: true,
//     stroke: 4,
//     addTo: half1,
//   });
//   land3.copy({
//     scale: { x: -1 },
//     translate: { x: -13, y: 13, z: 7 },
//   })
  
//   const land4 = new Zdog.Shape({
//     path: [
//       { x: 0, y:  0, z:  0 },
//       { x: -7, y: 0, z: 3 },
//     ],
//     translate: { x: 10, y: -3, z: 16 },
//     color: "#6FCC50",
//     closed: false,
//     fill: true,
//     stroke: 4,
//     addTo: half1,
//   });
//   land4.copy({
//     scale: { x: -1 },
//     translate: { x: -10, y: 3, z: 16 },
//   })
  
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
    stroke: strokeSmall,
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
    stroke:  strokeSmall,
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
    stroke: strokeBig,
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
    stroke: strokeBig,
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
    stroke: strokeBig,
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
    stroke: strokeSmall,
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
    stroke: strokeBig,
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
    stroke: strokeSmall,
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
    stroke: strokeBig,
    addTo: half1,
  });
  


function animate() {
    earth.rotate.y += isSpinning ? 0.03 : 0;
    earth.rotate.x += isSpinning ? -0.001 : 0;
    earth.updateRenderGraph();
    //description.updateRenderGraph();
    requestAnimationFrame( animate );
  }

// function animate() {
//   earth.updateRenderGraph();
//   requestAnimationFrame( animate );
// }

animate();

    });
