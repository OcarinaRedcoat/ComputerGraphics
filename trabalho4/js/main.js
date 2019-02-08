
'use strict'
//Global enviromnent

var dimension;
var scene;
var camera;
var renderer;
var trunk = 250;
var controls;
var directLight;
var pointLight;
var directional = 1;
var pointL = 1;
var ball;
var cube;
var pAuSa;

var animateFlag;

var ballRotation = 0;
var time;
var v0;
var zSpeed;
var zMaxSpeed = 8;
var dt;
var countB = 0;
var countS = 0;

var initState = true;
var runState = false;
var pause = false;

var temp_dt = 0;
var temp_v0 = 0;

var isPaused = false;


/*----------------------------------------------------------------
|
|                        Resize
|
----------------------------------------------------------------*/

function onResize() {

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = renderer.getSize().width / (renderer.getSize().height);
        camera.updateProjectionMatrix();
    }
    

}




/*----------------------------------------------------------------
|
|                           onKeyDown
|
----------------------------------------------------------------*/
function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {
        case 66: //B

            countB++;

            if (countB == 3) { // recomecar o movimento
                countB = 1;
            }
            if (countB == 1) {
                v0 = 0;
                time = new THREE.Clock();
            }
           
            break;
        case 68: //D
            if (directional == 1) {
                directLight.intensity = 0;
                directional = 0;
            }
            else {
                directLight.intensity = 1;
                directional = 1;
            }
            break;
        case 69: // E
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                    node.visible = !node.visible;
                }
            });
            break;
        case 76://L
            scene.children.forEach(function (element) {
                swapCalculus(element);
            });
            break;
        case 80: // P
            if (pointL == 1) {
                pointLight.intensity = 0;
                pointL = 0;
            }
            else {
                pointLight.intensity = 5;
                pointL = 1;
            }
            break;
        case 82: //R
            window.location.reload();
            break;
        case 83: // S
            countS++;
    
            if (countS == 1) {
                pause = true;
                createOrtographicCamera(1200, 0, 1200);
                time.stop();
            }
            if (countS == 2 ) {
                pause = false;
                createPerspectiveCamera(100, 100, 100);
                time.start();
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                controls.autoRotate = true;
                countS = 0;
            }
            break;
            case 87: // W
            scene.traverse(function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            });
        }
    }
    
    /*----------------------------------------------------------------
    |
    |                        onKeyUp
    |
    ----------------------------------------------------------------*/
    
    function onKeyUp(e){
    'use strict'
    
    switch (e.keyCode){
        case 37: // esquerda
        break;
        case 38:
        break;
        case 39: // direita
        break;
        case 40:
        break;
        case 66: //B
        break;
    }
    
}




/*----------------------------------------------------------------
|
|                         create Scene
|
----------------------------------------------------------------*/

function createScene() {
    'use strict'
    
    scene = new THREE.Scene();
    // scene.add(new THREE.AxisHelper(1000));
    
    // Directional Light
    directLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directLight.position.set(35, 50, 35);
    scene.add(directLight);
    
    
    // Pointlight
    pointLight = new THREE.PointLight(0xffffff, 5, 50, 2);
    pointLight.position.set(0, 40, 0);
    scene.add(pointLight);

    
    var chessTable = new ChessTable();
    scene.add(chessTable);
    
    ball = new Ball(20, 7.5, 0);
    scene.add(ball);

    cube = new magicCube();
    scene.add(cube);

    pAuSa = new Pause();
    scene.add(pAuSa);
    
}










/*----------------------------------------------------------------
|
|                      perspective camera
|
----------------------------------------------------------------*/

function createPerspectiveCamera(x, y, z) {
    'use strict';
    
    var aspect = window.innerWidth / window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, aspect, 1, 600);
    
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
    camera.lookAt(scene.position);
}



/*----------------------------------------------------------------
|
|                      ortographic camera
|
----------------------------------------------------------------*/
function createOrtographicCamera(x, y, z) {
    'use strict';
    
    var dimension = window.innerWidth / window.innerHeight;
    
    camera = new THREE.OrthographicCamera(trunk * dimension / -2, trunk * dimension / 2,
        trunk / 2, trunk / -2, 1, 500);
        
        camera.position.x = x;
        camera.position.y = y;
        camera.position.z = z;
        camera.lookAt(1200, 0, 0);
}





/*----------------------------------------------------------------
|
|                           FUNCTION ACCBALL
|
----------------------------------------------------------------*/





function accBall() {

    if (countB == 1) {
        
        dt = time.getDelta();
        v0 =  Math.min(v0 + countB*dt, zMaxSpeed);
        ball.rotatingMe(v0, dt);
    }
    else if (countB == 2 ) {
        
        dt = time.getDelta();
        v0 = Math.max(v0 - countB*dt, 0);
        ball.rotatingMe(v0, dt);
    }
}



/*----------------------------------------------------------------
|
|                           INIT
|
----------------------------------------------------------------*/
function init() {
    'use strict';
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    createScene();
    // createOrtographicCamera(300, 0, 300);
    createPerspectiveCamera(100, 100, 100);
    

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);

}



/*----------------------------------------------------------------
|
|                           RENDER
|
----------------------------------------------------------------*/
function render() {
    'use strict';
    renderer.render(scene, camera);
    
}

/*----------------------------------------------------------------
|
|                           update
|
----------------------------------------------------------------*/
function update() {
    'use strict'
    accBall();
}

/*----------------------------------------------------------------
|
|                           animate
|
----------------------------------------------------------------*/
function animate() {
    'use strict';

    requestAnimationFrame(animate);
    render();

    if (!pause) {
        update();
    }
    controls.update();

}