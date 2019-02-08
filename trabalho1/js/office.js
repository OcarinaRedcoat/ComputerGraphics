/*global THREE, requestAnimationFrame, console*/
var camera, scene, renderer;

var geometry, material, mesh;

var chair, wheels1, wheels2, wheels3, wheels4, leg, seat;

var Rot , angle = 0;

var acc, v0;

var zAtrito = 0.5;

var zSpeed;

var zMaxSpeed = 2;

var minSpeed = 1;

var chairSeat;

var dt;

var clock = new THREE.Clock();

var frustum = 150;

var keys = [];

var direction;

/*----------------------------------------------------------------
|
|                           Table
|
----------------------------------------------------------------*/
function addTableLeg(obj, x, y, z){
    'use strict';

    geometry = new THREE.CylinderGeometry(1, 1, 10);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addTableTop(obj, x, y, z){
    'use strict';

    geometry = new THREE.CubeGeometry(60, 1, 20);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createTable(x, y, z){
    'use strict';

    var table = new THREE.Object3D();

    material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });

    addTableTop(table, 0, 9, 0);
    addTableLeg(table, -25, 4, -8);
    addTableLeg(table, -25, 4, 8);
    addTableLeg(table, 25, 4, 8);
    addTableLeg(table, 25, 4, -8);

    scene.add(table);

    table.position.x = x;
    table.position.y = y;
    table.position.z = z;
}

/*----------------------------------------------------------------
|
|                           Lamp
|
----------------------------------------------------------------*/
function addLampBase(obj, x, y, z){
    'use strict';

    geometry = new THREE.ConeGeometry(3.5, 2, 32);
    material = new THREE.MeshBasicMaterial({color: 0x42e2f4, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLampBody(obj, x, y, z){
    'use strict';

    geometry = new THREE.CylinderGeometry(0.5, 0.8, 35, 32);
    material = new THREE.MeshBasicMaterial({color: 0x42e2f4, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}
function addLampBall(obj, x, y, z){
    'use strict';

    geometry = new THREE.SphereGeometry(1.2, 32, 32);
    material = new THREE.MeshBasicMaterial({color: 0x42e2f4, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLamp2Body(obj, x, y, z){
    'use strict';

    geometry = new THREE.CylinderGeometry(0.5, 0.5, 13, 32);
    material = new THREE.MeshBasicMaterial({color: 0x42e2f4, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.rotation.x = (-7*Math.PI / 6);
    obj.add(mesh);
}

function addLampAbajur(obj, x, y, z){
    'use strict';

    geometry = new THREE.ConeGeometry(3, 7, 32, 1, true);
    material = new THREE.MeshBasicMaterial({color: 0x42e2f4, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.rotation.x = (-Math.PI / 6);
    obj.add(mesh);
}

function createLamp(x, y, z){
    'use strict';

    var lamp = new THREE.Object3D();

    addLampBase(lamp, -25, 0, 0);
    addLampBody(lamp, -25, 17.5, 0);
    addLampBall(lamp, -25, 35.8, 0);
    addLamp2Body(lamp, -25, 29.3, 4);   //35.8 - 13/2 = 29.3
    addLampAbajur(lamp, -25, 23, 7.5)


    /*var group = new THREE.Group();
    group.add(base);
    group.add(body);*/

    scene.add(lamp);

    lamp.position.x = x;
    lamp.position.y = y;
    lamp.position.z = z;
}

/*----------------------------------------------------------------
|
|                           CHAIR
|
----------------------------------------------------------------*/
function addChairWheel(obj, x, y, z){
    'use strict';

    geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5);
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairLeg(obj, x, y, z){
    'use strict';

    geometry = new THREE.BoxGeometry( 10, 0.5, 0.5 );
    material = new THREE.MeshBasicMaterial({color: 0xff3333, wireframe: true});
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChair2Leg(obj, x, y, z){
    'use strict';

    geometry = new THREE.BoxGeometry( 10, 0.5, 0.5 );
    material = new THREE.MeshBasicMaterial({color: 0xff3333, wireframe: true});
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(x, y, z);
    mesh.rotation.y = (Math.PI / 2);
    obj.add(mesh);
}

function addChairMainLeg(obj, x, y, z){
    'use strict'

    geometry = new THREE.CylinderGeometry(0.35, 0.35, 6, 16);
    material = new THREE.MeshBasicMaterial({color: 0x42e2f4, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairSeat(obj, x, y, z){
    'use strict';

    geometry = new THREE.BoxGeometry( 6, 0.5, 6);
    material = new THREE.MeshBasicMaterial({color: 0x42e2f4, wireframe: true});
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairBack(obj, x, y, z){
    'use strict';

    geometry = new THREE.BoxGeometry( 6, 0.5, 8);
    material = new THREE.MeshBasicMaterial({color: 0x42e2f4, wireframe: true});
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(x, y, z);
    mesh.rotation.x = (Math.PI / 2);
    obj.add(mesh);

}

function createChair(x, y, z){
    'use strict';

    seat = new THREE.Object3D();
    wheels1 = new THREE.Object3D();
    wheels2 = new THREE.Object3D();
    wheels3 = new THREE.Object3D();
    wheels4 = new THREE.Object3D();
    leg = new THREE.Object3D();
    addChairSeat(seat, 0, 7, 0);
    addChairBack(seat, 0, 10.75, 3.25);
    addChairMainLeg(seat, 0, 3.625, 0);

    addChairLeg(leg, 0, 0.375, 0);
    addChair2Leg(leg, 0, 0.375, 0);
    addChairWheel(wheels1, 5, 0, 0);
    addChairWheel(wheels2, -5, 0, 0);
    addChairWheel(wheels3, 0, 0, 5);
    addChairWheel(wheels4, 0, 0, -5);

    chair = new THREE.Group();
    chair.add(seat);
    chair.add(wheels1);
    chair.add(wheels2);
    chair.add(wheels3);
    chair.add(wheels4);
    chair.add(leg);
    scene.add(chair);

    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;

}

/*----------------------------------------------------------------
|
|                           SCENE
|
----------------------------------------------------------------*/
function createScene(){
    'use strict';

    scene = new THREE.Scene();

    scene.add(new THREE.AxisHelper(10));

    createTable(0, 0, 0);
    createLamp(40, 0, -20);
    createChair(0, 0, 30);
}

/*----------------------------------------------------------------
|
|                           CAMERA
|
----------------------------------------------------------------*/
function createCamera(x, y, z){
    'use strict';

    var dimension = window.innerWidth / window.innerHeight;

    camera = new THREE.OrthographicCamera(frustum*dimension/-2, frustum*dimension/2,
                                            frustum/2, frustum/-2,1, 150);

    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
    camera.lookAt(scene.position);
}


/*----------------------------------------------------------------
|
|                           RESIZE
|
----------------------------------------------------------------*/

function onResize() {
		var dimenson = window.innerWidth / window.innerHeight;

		camera.left   = - frustum*dimenson/2;
		camera.right  =   frustum*dimenson/2;
		camera.top    =   frustum/2;
		camera.bottom = - frustum/2;

		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
}

/*----------------------------------------------------------------
|
|                           KEYS
|
----------------------------------------------------------------*/
function onKeyDown(e){
    'use strict';

    switch (e.keyCode){
        case 37: //left
            Rot = - 1;
            //angle = -Math.PI/30; //sentido contrario ao dos ponteiros
            break;
        case 38: //up
            acc = -1;
            break;
        case 39: //right
            Rot = 1;
            //angle = Math.PT/30; //sentido dos ponteiros
            break;
        case 40: //down
            acc = 1;
            break;
        case 49: //1
            createCamera(50, 50, 50);
            break;
        case 50: //2
            createCamera(0, 100 ,0);
            break;
        case 51: //3
            createCamera(0, 50, 50);
            break;
        case 65: //A
        case 97: //a
            scene.traverse(function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            });
            break;
        case 83:  //S
        case 115: //s
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

function onKeyUp(e){
    'use strict'

    switch (e.keyCode){
        case 37:
            Rot = 0;
            angle = 0;
            break;
        case 38:
            acc = 0;
            dt = 0;
            clock.stop();
            break;
        case 39:
            Rot = 0;
            angle = 0;
            break;
        case 40:
            acc = 0;
            dt = 0;
            clock.stop();
            break;
    }

}

/*----------------------------------------------------------------
|
|                           Chair Movement
|
----------------------------------------------------------------*/

function movementChair(){
    var v0 = zSpeed;
    if (acc > 0){
        dt += clock.getDelta();
        v0 = Math.min(v0 + acc*dt, zMaxSpeed);
        //console.log(v0);
    }
    else if (acc < 0){
        dt += clock.getDelta();
        v0 = Math.max(v0 + acc*dt, -zMaxSpeed);
        //console.log(v0);
    }
    else{
        if (zSpeed > 0) {
            if (zSpeed - zAtrito < 0){
                v0 = 0;
                //console.log(v0);
            }
            else{
                v0 = (zSpeed - zAtrito);
                //console.log(v0);
            }
        }
    
        else if (zSpeed < 0){
            if (zSpeed + zAtrito > 0){
                v0 = 0;
                //console.log(v0);
            }
            else{
                v0 = (zSpeed + zAtrito);
                //console.log(v0);
            }
        }
        else{
            v0 = 0;
        }
    }

    chair.translateZ(v0*dt);
    zSpeed = v0;
}

function rotationChair() {
    'use strict'

    if(Rot == 1) {
        chair.rotateY(-Math.PI/100);
    }

    else if(Rot == -1) {
        chair.rotateY(Math.PI/100);
    }
}


/*----------------------------------------------------------------
|
|                           RENDER
|
----------------------------------------------------------------*/
function render(){
    'use strict';

    renderer.render(scene, camera);
}

/*----------------------------------------------------------------
|
|                           INIT
|
----------------------------------------------------------------*/
function init(){
    'use strict';

    zSpeed = 0;
    dt = 0;
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    createScene();
    createCamera(50, 50, 50);


    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

/*----------------------------------------------------------------
|
|                           ANIMATE
|
----------------------------------------------------------------*/
function update(){

    movementChair();
    rotationChair();

}

function animate(){
    'use strict';

    update();

    render();

    requestAnimationFrame(animate);
}
