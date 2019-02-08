'use strict'

//Global enviromnent

var dimension;
var scene;
var camera;
var renderer;
var trunk = 120;
var floorDone;

var scene_elements = [];

var cameraOn = 0;

var l_floor = 120; //floor length
var w_floor = l_floor/2; // floor width with an aspect ratio of 2:1 with the floor lenghtssss
var h_floor = 0; // floor height
var h_wall = Math.sqrt(l_floor*l_floor + w_floor*w_floor)/10;

var time;



/*----------------------------------------------------------------
|
|                           RESIZE
|
----------------------------------------------------------------*/

function onResize() {
    var dimension = window.innerWidth / window.innerHeight;
    
    if (window.innerHeight > 0 && window.innerWidth > 0) { // dividing by zero error preventer
        if (cameraOn == 0) {
            camera.left   = - trunk*dimension/2;
	        camera.right  =   trunk*dimension/2;
	        camera.top    =   trunk/2;
            camera.bottom = - trunk/2;
        }
        
        else if (cameraOn == 1 || cameraOn == 2) {
            if (window.innerHeight > 0 && window.innerWidth > 0) {
                camera.aspect = renderer.getSize().width / (renderer.getSize().height);
            }
        }
    }
    
	camera.updateProjectionMatrix();
    
    renderer.setSize( window.innerWidth, window.innerHeight);
}


/*----------------------------------------------------------------
|
|                           SCENE
|
----------------------------------------------------------------*/

function randomInRange(min, max) {
    return Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);
  }

function getDot(v1, v2) {
    var product = v1.position.x * v2.position.x + v1.position.z * v2.position.z;
    return product;
}

function createScene(){
    'use strict';
    

    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(666));
    

    var floor = new Floor(l_floor + 1, w_floor, 0, h_floor + 0.5, 0);
    
    var wall1 = new Wall(w_floor, h_wall, w_floor, h_wall/2 + h_floor + 1, 0);
    var wall2 = new Wall(w_floor, h_wall, -w_floor, h_wall/2 + h_floor + 1, 0);
    var wall3 = new Wall(l_floor - 1, h_wall, 0, h_wall/2 + h_floor + 1, w_floor/2 - 0.5);
    var wall4 = new Wall(l_floor - 1, h_wall, 0, h_wall/2 + h_floor + 1, -w_floor/2 + 0.5);

    var cameraBall = new Ball(h_wall / 2, 0, randomInRange(-l_floor / 2 + h_wall / 2, l_floor / 2 - h_wall / 2), h_floor + 0.5 + h_wall/2, randomInRange(-w_floor / 2 + h_wall / 2, w_floor / 2 - h_wall / 2));
    cameraBall.getObj().name = "ballWithCamera";

    var ball2 = new Ball(h_wall/2, 0, randomInRange(-l_floor/2 + h_wall/2, l_floor/2 - h_wall/2), h_floor + 0.5 + h_wall/2, randomInRange(-w_floor/2 + h_wall/2, w_floor/2 - h_wall/2));
    var ball3 = new Ball(h_wall/2, 0, randomInRange(-l_floor/2 + h_wall/2, l_floor/2 - h_wall/2), h_floor + 0.5 + h_wall/2, randomInRange(-w_floor/2 + h_wall/2, w_floor/2 - h_wall/2));
    var ball4 = new Ball(h_wall/2, 0, randomInRange(-l_floor/2 + h_wall/2, l_floor/2 - h_wall/2), h_floor + 0.5 + h_wall/2, randomInRange(-w_floor/2 + h_wall/2, w_floor/2 - h_wall/2));
    var ball5 = new Ball(h_wall/2, 0, randomInRange(-l_floor/2 + h_wall/2, l_floor/2 - h_wall/2), h_floor + 0.5 + h_wall/2, randomInRange(-w_floor/2 + h_wall/2, w_floor/2 - h_wall/2));
    var ball6 = new Ball(h_wall/2, 0, randomInRange(-l_floor/2 + h_wall/2, l_floor/2 - h_wall/2), h_floor + 0.5 + h_wall/2, randomInRange(-w_floor/2 + h_wall/2, w_floor/2 - h_wall/2));
    var ball7 = new Ball(h_wall/2, 0, randomInRange(-l_floor/2 + h_wall/2, l_floor/2 - h_wall/2), h_floor + 0.5 + h_wall/2, randomInRange(-w_floor/2 + h_wall/2, w_floor/2 - h_wall/2));
    var ball8 = new Ball(h_wall/2, 0, randomInRange(-l_floor/2 + h_wall/2, l_floor/2 - h_wall/2), h_floor + 0.5 + h_wall/2, randomInRange(-w_floor/2 + h_wall/2, w_floor/2 - h_wall/2));
    var ball9 = new Ball(h_wall/2, 0, randomInRange(-l_floor/2 + h_wall/2, l_floor/2 - h_wall/2), h_floor + 0.5 + h_wall/2, randomInRange(-w_floor/2 + h_wall/2, w_floor/2 - h_wall/2));
    var ball10 = new Ball(h_wall / 2, 0, randomInRange(-l_floor / 2 + h_wall / 2, l_floor / 2 - h_wall / 2), h_floor + 0.5 + h_wall / 2, randomInRange(-w_floor/2 + h_wall/2, w_floor/2 - h_wall/2));

    
    wall1.getObj().rotation.x = (Math.PI/2);
    wall1.getObj().rotation.z = (Math.PI/2);
    
    wall2.getObj().rotation.x = (Math.PI/2);
    wall2.getObj().rotation.z = (Math.PI/2);
    
    wall3.getObj().rotation.x = (Math.PI/2);
    
    wall4.getObj().rotation.x = (Math.PI/2);
    

    scene.add(floor.getObj());
    
    scene.add(wall1.getObj());
    scene.add(wall2.getObj());
    scene.add(wall3.getObj());
    scene.add(wall4.getObj());

    scene.add(cameraBall.getObj());
    scene.add(ball2.getObj());
    scene.add(ball3.getObj());
    scene.add(ball4.getObj());
    scene.add(ball5.getObj());
    scene.add(ball6.getObj());
    scene.add(ball7.getObj());
    scene.add(ball8.getObj());
    scene.add(ball9.getObj());
    scene.add(ball10.getObj());

    scene_elements.push(floor);
    
    scene_elements.push(wall1);
    scene_elements.push(wall2);
    scene_elements.push(wall3);
    scene_elements.push(wall4);

    scene_elements.push(cameraBall);

    scene_elements.push(ball2);
    scene_elements.push(ball3);
    scene_elements.push(ball4);
    scene_elements.push(ball5);
    scene_elements.push(ball6);
    scene_elements.push(ball7);
    scene_elements.push(ball8);
    scene_elements.push(ball9);
    scene_elements.push(ball10);
}




/*----------------------------------------------------------------
|
|                           CAMERA
|
----------------------------------------------------------------*/
function createOrtographicCamera(x, y, z){
    'use strict';

    var dimension = window.innerWidth / window.innerHeight;

    camera = new THREE.OrthographicCamera(trunk*dimension/-2, trunk*dimension/2,
                                            trunk/2, trunk/-2,1, 150);

    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
    camera.lookAt(scene.position);
}

function createPerspectiveCamera(x, y, z) {
    'use strict';

    var aspect = window.innerWidth / window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, aspect, 50, 400);

    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
    camera.lookAt(scene.position);
}

function createMovableCamera() {
    'use strict';

    var aspect = window.innerWidth / window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, aspect, 50, 400);
    var movBall = scene.getObjectByName('ballWithCamera');

    camera.position.x = movBall.position.x;
    camera.position.y = movBall.position.y;
    camera.position.z = movBall.position.z + 50;

    camera.lookAt(camera.position);
}




/*----------------------------------------------------------------
|
|                           onKeyDown
|
----------------------------------------------------------------*/
function onKeyDown(e){
    'use strict';

    switch (e.keyCode){
        case 49: //1
            cameraOn = 0;
            //createOrtographicCamera(0, 20, 0); //ortogonal camera
            break;
        case 50: //2
            cameraOn = 1;
            //createPerspectiveCamera(50, 80, 100); //perspective camera
            break;
        case 51: //3
            cameraOn = 2;
            break;
        case 52:
            cameraOn = 3;
            break;
        case 65: //A
        case 97: //a
            scene.traverse(function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            });
            break;
        case 83://S
            break;
        case 115: //s
            break;
        case 69:  //E
        case 101: //e
            scene.traverse(function (node) {
                if (node instanceof THREE.AxisHelper) {
                    node.visible = !node.visible;
                }
            });
            break;
        }
}




/*----------------------------------------------------------------
|
|                           INIT
|
----------------------------------------------------------------*/
function init(){
    'use strict';

    time = new THREE.Clock();

    zSpeed = 0;
    dt = 0;
    
    renderer = new THREE.WebGLRenderer({antialias: true});

    scene_elements = [];

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createScene();
    createOrtographicCamera(0, 30, 0);

    //animate();
    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}



/*----------------------------------------------------------------
|
|                           RENDER
|
----------------------------------------------------------------*/
function render(){
    'use strict';
    renderer.render(scene, camera);
    
    if (cameraOn == 0) {
        createOrtographicCamera(0, 20, 0);
        //obter corrdenadas da bola
    }

    else if (cameraOn == 1) {
        createPerspectiveCamera(50, 80, 100);
    }
    
    else if (cameraOn == 2) {
        createMovableCamera();
    }

    else if (cameraOn == 3) {
        createOrtographicCamera(0,0,20);
    }
}




/*----------------------------------------------------------------
|
|                           update
|
----------------------------------------------------------------*/
function update(){
    var interval = time.getDelta();
    for (var i = 0; i < scene_elements.length; i++){
        var element = scene_elements[i];
        element.update(scene_elements, interval);
    }
}


/*----------------------------------------------------------------
|
|                           animate
|
----------------------------------------------------------------*/
function animate(){
    'use strict';

    update();
    render();
    requestAnimationFrame(animate);
}