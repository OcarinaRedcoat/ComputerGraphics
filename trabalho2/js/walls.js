
'use strict'

class Wall extends MovableObject {

    constructor(width, height, x, y, z) {
        var wall = new THREE.Object3D();

     
        var geometry = new THREE.CubeGeometry(width, 1, height);
        var material = new THREE.MeshBasicMaterial({ color: 0x696969, wireframe: true});
        var mesh = new THREE.Mesh(geometry, material);
        
        super(0,0,0,height, width, mesh, 0, null);

        mesh.position.set(x, y, z);

        wall.add(mesh);
    }

    movementWithCollision(){

    }

    movementWithNoCollision(){

    }
}