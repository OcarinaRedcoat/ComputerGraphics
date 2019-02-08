
'use strict'
//Global enviromnent

var dimension;
var scene;
var camera;
var renderer;
var trunk = 250;
var rotObjectMatrix;
var light;
var night;
var Plane;
var Rot = 0
var spotLight1, spotLight2, spotLight3, spotLight4;


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
        case 37: // esquerda
            Rot = -1;
            break;
        case 38:
            Rot = 2;
            break;
        case 39: // direita
            Rot = 1;
            break;
        case 40:
            Rot = -2;
            break;
        case 49:  //1
            if (spotLight1.getSpotIntensity() == 1){
                this.spotLight1.spotLight.intensity = 0;
            }
            else{
                this.spotLight1.spotLight.intensity = 1;
            }
            break;
        case 50:  //2
            if (spotLight2.getSpotIntensity() == 1) {
                this.spotLight2.spotLight.intensity = 0;
            }
            else {
                this.spotLight2.spotLight.intensity = 1;
            }
            break;
        case 51:  //3
            if (spotLight3.getSpotIntensity() == 1) {
                this.spotLight3.spotLight.intensity = 0;
            }
            else {
                this.spotLight3.spotLight.intensity = 1;
            }
            break;
        case 52:  //4
            if (spotLight4.getSpotIntensity() == 1) {
                this.spotLight4.spotLight.intensity = 0;
            }
            else {
                this.spotLight4.spotLight.intensity = 1;
            }
            break;
        /*case 65: //A
            break;
        case 97: //a
            scene.traverse(function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            });
            break;*/
        case 71: //G
            scene.children.forEach(function(element){
                swapTo(element); 
            });
            break;
        case 76://L
            scene.children.forEach(function(element){
                swapCalculus(element);
            });
            break;
        case 78: //N
            if (night == 1){
                light.intensity = 0;
                night = 0;
            }
            else if (night == 0){
                light.intensity = 1;
                night = 1;
            }
            break;
        case 83: //S
            break;
        case 115: //s
            break;
        case 69: //E
            break;
        /*case 101: //e
            scene.traverse(function (node) {
                if (node instanceof THREE.AxisHelper) {
                    node.visible = !node.visible;
                }
            });
            break;*/
    }
}


function onKeyUp(e){
    'use strict'

    switch (e.keyCode){
        case 37: // esquerda
            Rot = 0;
            break;
        case 38:
            Rot = 0
            break;
        case 39: // direita
            Rot = 0;
            break;
        case 40:
            Rot = 0;
            break;
    }

}

function rotateAroundObjectAxis(object, axis, radians) {
    rotObjectMatrix = new THREE.Matrix4();
    rotObjectMatrix.makeRotationAxis(axis.normalize(), radians);

    object.matrix.multiply(rotObjectMatrix);
    object.rotation.setFromRotationMatrix(object.matrix);
}







function giveVertex() {
    
    var geometry = new THREE.BoxGeometry(20, 10, 20);
    var mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({ color: 0xffff00 }) );

    getVertexLog(geometry);
}



function getVertexLog(geometry) {

    let str =[];

    str += ("let geo = new THREE.Geometry();\n");
    str += ("let mat = new THREE.MeshBasicMaterial({color : 0x00ff00, wireframe: true});\n");
    str += ("\n");

    geometry.vertices.forEach((vertex, index) => {

        str += ("let v " +  index + " = new THREE.Vector3("+ vertex.x  + "," + vertex.y + "," + vertex.z + ");\n");
    });

    str += ("\n");

    geometry.vertices.forEach((vertex, index) => {
        str += ("geo.vertices.push(v" +  index  + ");\n");
    });

    geometry.faces.forEach((face, index) => {

        str += ("geo.faces.push( new THREE.face3(" + face.a + "," +  face.b + "," + face.c + "));\n");
    });

    str += ("\ngeo.computeFaceNormals();");
    str += ("let obj =  new THREE.Mesh(geo, mat);");
    
    console.log(str);
}





function createScene() {

    scene = new THREE.Scene();

    light = new THREE.DirectionalLight(0xffffff, 1.0);
    scene.add(light);

    // LEFT-WING

    var wing_lDOWN = new Malha(0x004380, "PHONG");
    wing_lDOWN.pushVertex(20, 0, 20);
    wing_lDOWN.pushVertex(120, 0, -20);
    wing_lDOWN.pushVertex(20, 0, -20);
    wing_lDOWN.pushFinalFace(2,1,0);
    wing_lDOWN.getGeo().computeFaceNormals();

    var wing_lUP = new Malha(0x004380, "PHONG");
    wing_lUP.pushVertex(20, 5, 20);
    wing_lUP.pushVertex(120, 5, -20);
    wing_lUP.pushVertex(20, 5, -20);
    wing_lUP.pushFinalFace(0, 1, 2);
    wing_lUP.getGeo().computeFaceNormals();


    var wing_ls1 = new Malha(0x004380, "PHONG");
    wing_ls1.pushVertex(20, 5, 20);
    wing_ls1.pushVertex(120, 0, -20);
    wing_ls1.pushVertex(20, 0, 20);
    wing_ls1.pushFinalFace(2, 1, 0);
    wing_ls1.getGeo().computeFaceNormals();


    var wing_ls2 = new Malha(0x004380, "PHONG");
    wing_ls2.pushVertex(20, 5, 20);
    wing_ls2.pushVertex(120, 5, -20);
    wing_ls2.pushVertex(120, 0, -20);
    wing_ls2.pushFinalFace(2, 1, 0);
    wing_ls2.getGeo().computeFaceNormals();


    var wing_ls3 = new Malha(0x004380, "PHONG");
    wing_ls3.pushVertex(20, 0, -20);
    wing_ls3.pushVertex(120, 5, -20);
    wing_ls3.pushVertex(120, 0, -20);
    wing_ls3.pushFinalFace(0, 1, 2);
    wing_ls3.getGeo().computeFaceNormals();


    var wing_ls4 = new Malha(0x004380, "PHONG");
    wing_ls4.pushVertex(20, 0, -20);
    wing_ls4.pushVertex(20, 5, -20);
    wing_ls4.pushVertex(120, 5, -20);
    wing_ls4.pushFinalFace(0, 1, 2);
    wing_ls4.getGeo().computeFaceNormals();


    var left_wing = new THREE.Group();
    left_wing.add(wing_lDOWN);
    left_wing.add(wing_lUP);
    left_wing.add(wing_ls1);
    left_wing.add(wing_ls2);
    left_wing.add(wing_ls3);
    left_wing.add(wing_ls4);


    //RIGHT-WING


    var wing_rDOWN = new Malha(0x004380, "PHONG");
    wing_rDOWN.pushVertex(20, 0, 20);
    wing_rDOWN.pushVertex(120, 0, -20);
    wing_rDOWN.pushVertex(20, 0, -20);
    wing_rDOWN.pushFinalFace(2, 1, 0);
    wing_rDOWN.getGeo().computeFaceNormals();

    var wing_rUP = new Malha(0x004380, "PHONG");
    wing_rUP.pushVertex(20, 5, 20);
    wing_rUP.pushVertex(120, 5, -20);
    wing_rUP.pushVertex(20, 5, -20);
    wing_rUP.pushFinalFace(0, 1, 2);
    wing_rUP.getGeo().computeFaceNormals();


    var wing_rs1 = new Malha(0x004380, "PHONG");
    wing_rs1.pushVertex(20, 5, 20);
    wing_rs1.pushVertex(120, 0, -20);
    wing_rs1.pushVertex(20, 0, 20);
    wing_rs1.pushFinalFace(2, 1, 0);
    wing_rs1.getGeo().computeFaceNormals();


    var wing_rs2 = new Malha(0x004380, "PHONG");
    wing_rs2.pushVertex(20, 5, 20);
    wing_rs2.pushVertex(120, 5, -20);
    wing_rs2.pushVertex(120, 0, -20);
    wing_rs2.pushFinalFace(2, 1, 0);
    wing_rs2.getGeo().computeFaceNormals();


    var wing_rs3 = new Malha(0x004380, "PHONG");
    wing_rs3.pushVertex(20, 0, -20);
    wing_rs3.pushVertex(120, 5, -20);
    wing_rs3.pushVertex(120, 0, -20);
    wing_rs3.pushFinalFace(0, 1, 2);
    wing_rs3.getGeo().computeFaceNormals();


    var wing_rs4 = new Malha(0x004380, "PHONG");
    wing_rs4.pushVertex(20, 0, -20);
    wing_rs4.pushVertex(20, 5, -20);
    wing_rs4.pushVertex(120, 5, -20);
    wing_rs4.pushFinalFace(0, 1, 2);
    wing_rs4.getGeo().computeFaceNormals();


    var right_wing = new THREE.Group();
    right_wing.add(wing_rDOWN);
    right_wing.add(wing_rUP);
    right_wing.add(wing_rs1);
    right_wing.add(wing_rs2);
    right_wing.add(wing_rs3);
    right_wing.add(wing_rs4);


    right_wing.translateY(5);
    right_wing.rotateZ(Math.PI);


    //BACKWING VERTICAL

    var back_wing_lside = new Malha(0x004380, "PHONG"); //V de vertical
    back_wing_lside.pushVertex(2, 0, -70);
    back_wing_lside.pushVertex(2, 50, -70);
    back_wing_lside.pushVertex(2, 0, -55);
    back_wing_lside.pushFinalFace(0, 1, 2);
    back_wing_lside.getGeo().computeFaceNormals();

    var back_wing_rside = new Malha(0x004380, "PHONG");
    back_wing_rside.pushVertex(-2, 0, -70);
    back_wing_rside.pushVertex(-2, 50, -70);
    back_wing_rside.pushVertex(-2, 0, -55);
    back_wing_rside.pushFinalFace(2, 1, 0);
    back_wing_rside.getGeo().computeFaceNormals();

    var back_wing_s1 = new Malha(0x004380, "PHONG");
    back_wing_s1.pushVertex(2, 50, -70);
    back_wing_s1.pushVertex(2, 0, -55);
    back_wing_s1.pushVertex(-2, 0, -55);
    back_wing_s1.pushFinalFace(2, 1, 0);
    back_wing_s1.getGeo().computeFaceNormals();

    var back_wing_s2 = new Malha(0x004380, "PHONG");
    back_wing_s2.pushVertex(2, 50, -70);
    back_wing_s2.pushVertex(-2, 50, -70);
    back_wing_s2.pushVertex(-2, 0, -55);
    back_wing_s2.pushFinalFace(0, 1, 2);
    back_wing_s2.getGeo().computeFaceNormals();

    var back_wing_s3 = new Malha(0x004380, "PHONG");
    back_wing_s3.pushVertex(-2, 0, -70);
    back_wing_s3.pushVertex(2, 50, -70);
    back_wing_s3.pushVertex(-2, 50, -70);
    back_wing_s3.pushFinalFace(2, 1, 0);
    back_wing_s3.getGeo().computeFaceNormals();

    var back_wing_s4 = new Malha(0x004380, "PHONG");
    back_wing_s4.pushVertex(2, 0, -70);
    back_wing_s4.pushVertex(-2, 0, -70);
    back_wing_s4.pushVertex(2, 50, -70);
    back_wing_s4.pushFinalFace(0, 1, 2);
    back_wing_s4.getGeo().computeFaceNormals();

    var back_wing_vertical = new THREE.Group();
    back_wing_vertical.add(back_wing_s1);
    back_wing_vertical.add(back_wing_s2);
    back_wing_vertical.add(back_wing_s3);
    back_wing_vertical.add(back_wing_s4);

    back_wing_vertical.add(back_wing_lside);
    back_wing_vertical.add(back_wing_rside);



    //BACKWING HORIZONTAL

    var back_wing_horizontal = new Malha(0x004380, "PHONG");

    back_wing_horizontal.pushVertex(15,1,4);
    back_wing_horizontal.pushVertex(15,1,-4);
    back_wing_horizontal.pushVertex(15,-1,4);
    back_wing_horizontal.pushVertex(15,-1,-4);

    back_wing_horizontal.pushVertex(-15,1,-4);
    back_wing_horizontal.pushVertex(-15,1,4);
    back_wing_horizontal.pushVertex(-15,-1,-4);
    back_wing_horizontal.pushVertex(-15,-1, 4);

    back_wing_horizontal.pushFinalFace(0,2,1);
    back_wing_horizontal.pushFinalFace(2,3,1);
    back_wing_horizontal.pushFinalFace(4,6,5);
    back_wing_horizontal.pushFinalFace(6,7,5);
    back_wing_horizontal.pushFinalFace(4,5,1);
    back_wing_horizontal.pushFinalFace(5,0,1);
    back_wing_horizontal.pushFinalFace(7,6,2);
    back_wing_horizontal.pushFinalFace(6,3,2);
    back_wing_horizontal.pushFinalFace(5,7,0);
    back_wing_horizontal.pushFinalFace(7,2,0);
    back_wing_horizontal.pushFinalFace(1,3,4);
    back_wing_horizontal.pushFinalFace(3,6,4);

    back_wing_horizontal.getGeo().computeFaceNormals();

    back_wing_horizontal.getObject().position.set(0, 30, -70);


    //COCKP

    var cockP = new Malha(0x66cccc, "LAMBERT");


    cockP.pushVertex(10,5,10);
    cockP.pushVertex(10,5,-10);
    cockP.pushVertex(10,-5,10);
    cockP.pushVertex(10,-5,-10);

    cockP.pushVertex(-10,5,-10);
    cockP.pushVertex(-10,5,10);
    cockP.pushVertex(-10,-5,-10);
    cockP.pushVertex(-10,-5,10);

    cockP.pushFinalFace(0,2,1);
    cockP.pushFinalFace(2,3,1);
    cockP.pushFinalFace(4,6,5);
    cockP.pushFinalFace(6,7,5);
    cockP.pushFinalFace(4,5,1);
    cockP.pushFinalFace(5,0,1);
    cockP.pushFinalFace(7,6,2);
    cockP.pushFinalFace(6,3,2);
    cockP.pushFinalFace(5,7,0);
    cockP.pushFinalFace(7,2,0);
    cockP.pushFinalFace(1,3,4);
    cockP.pushFinalFace(3,6,4);

    cockP.getGeo().computeFaceNormals();
    cockP.getObject().position.set(0, 0, 100);


    //FUSELAGEM

    var bodyPlane = new Malha(0xeeeeee, "STANDARD");

    bodyPlane.pushVertex(20,10,90);
    bodyPlane.pushVertex(20,10,-90);
    bodyPlane.pushVertex(20,-10,90);
    bodyPlane.pushVertex(20,-10,-90);

    bodyPlane.pushVertex(-20,10,-90);
    bodyPlane.pushVertex(-20,10,90);
    bodyPlane.pushVertex(-20,-10,-90);
    bodyPlane.pushVertex(-20,-10,90);

    bodyPlane.pushFinalFace( 0,2,1);
    bodyPlane.pushFinalFace( 2,3,1);
    bodyPlane.pushFinalFace( 4,6,5);
    bodyPlane.pushFinalFace( 6,7,5);
    bodyPlane.pushFinalFace( 4,5,1);
    bodyPlane.pushFinalFace( 5,0,1);
    bodyPlane.pushFinalFace( 7,6,2);
    bodyPlane.pushFinalFace( 6,3,2);
    bodyPlane.pushFinalFace( 5,7,0);
    bodyPlane.pushFinalFace( 7,2,0);
    bodyPlane.pushFinalFace( 1,3,4);
    bodyPlane.pushFinalFace( 3,6,4);

    bodyPlane.getGeo().computeFaceNormals();


    //SPOTLIGHT

    spotLight1 = new Spotlight(100, 100, 100);
    spotLight2 = new Spotlight(-100, 100, 100); 
    spotLight3 = new Spotlight(-100, 100, -100); 
    spotLight4 = new Spotlight(100, 100, -100);  

 
    
    
    Plane = new THREE.Group();
    Plane.add(bodyPlane);
    Plane.add(right_wing);
    Plane.add(left_wing);
    Plane.add(back_wing_horizontal);
    Plane.add(back_wing_vertical);
    Plane.add(cockP);

    scene.add(Plane);
    scene.add(spotLight1);
    scene.add(spotLight2);
    scene.add(spotLight3);
    scene.add(spotLight4);

}


function createPerspectiveCamera(x, y, z) {
    'use strict';

    var aspect = window.innerWidth / window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, aspect, 1, 600);

    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
    camera.lookAt(scene.position);
}


function rotationPlane() {

    if(Rot == 1) {
        Plane.rotateY(-Math.PI/100);
    }
    else if(Rot == -1) {
        Plane.rotateY(Math.PI/100);
    }
    else if(Rot == 2) {
        Plane.rotateX(-Math.PI/100);
    }
    else if(Rot == -2) {
        Plane.rotateX(Math.PI/100);
    }
}


function swapTo(objArray){
    objArray.children.forEach(function (element) {
        if (element instanceof Malha){
            element.switcheroo();
        }
        element.children.forEach(function(seconElement){
            if (seconElement instanceof Malha){
                seconElement.switcheroo();
            }
        });
    });
    }

function swapCalculus(objArray) {
    objArray.children.forEach(function (element) {
        if (element instanceof Malha) {
            element.changez();
        }
        element.children.forEach(function (seconElement) {
            if (seconElement instanceof Malha) {
                seconElement.changez();
            }
        });
    });
}

/*----------------------------------------------g------------------
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
    night = 1;
    //giveVertex();
    //createOrtographicCamera(-100, 0, 0);
    createPerspectiveCamera(250, 250, 250);

    animate();
    render();


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
    rotationPlane();
}

/*----------------------------------------------------------------
|
|                           animate
|
----------------------------------------------------------------*/
function animate() {
    'use strict';

    update();
    render();
    requestAnimationFrame(animate);
}