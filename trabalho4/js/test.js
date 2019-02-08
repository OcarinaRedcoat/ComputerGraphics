var camera, scene, renderer, geometry, material, mesh;

// Boolean for start and restart
var initAnim = true;
var runAnim = false;
//var isPlay = false;
var theta = 0;












function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {
        case 82: //R
            ResetParameters();
            break;
        case 83: // S
            //   initAnim = false;
            //   runAnim = true;
            startAnimation();
            break;
    }
}


// initAnim corresponde ao estado inicial do programa
// runAnim corresponde no nosso caso ao movimento da bola
// sem o isPlay se o cubo tiver a rodar e clicar R ele volta ao inicio mas continua a rodar 




function startAnimation() {
    'use strict';
    if (initAnim) { //bola sem se mexer
      initAnim = false; //
      runAnim = true;
    }
    
    // Start and Pause 
    if (runAnim) { 
      //startButton.innerHTML = 'Pause';
      runAnim = false;
      //isPlay = true;
      animate();
      } 
      else {
            //startButton.innerHTML = 'Restart';
            runAnim = true;
            //isPlay = false;
      }
}





 // Reset Button
   function ResetParameters() {

   // Set StartButton to Start  
   //startButton.innerHTML = 'Start';

   // Boolean for Stop Animation
   initAnim = true;
   runAnim = false;
   theta = 0;
   //isPlay = false;
   render();
   }






function init() {
    'use strict';
 // Buttons startButton and resetButton
 //var startButton = document.getElementById( 'startButtonId' );
 //var resetButton = document.getElementById( 'resetButtonId' );

 



    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 500;
    scene.add(camera);

    geometry = new THREE.CubeGeometry(200, 200, 200);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    window.addEventListener("keydown", onKeyDown);
}

function animate(delta) {
    'use strict';
    console.log(runAnim);
    if (runAnim) return;
    requestAnimationFrame(animate);
    theta += 0.01;
    render();
}

function render() {
    'use strict';
    mesh.rotation.y = theta;
    renderer.render(scene, camera);
}

