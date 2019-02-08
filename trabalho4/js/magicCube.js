'use strict'

class magicCube extends THREE.Object3D{

    constructor() {

        super();

        var texture = new THREE.TextureLoader().load("img/cubo.png");
        
        this._geometry = new THREE.BoxGeometry(10, 10, 10);
        this._material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture, bumpMap: texture});
        this._cube = new THREE.Mesh(this._geometry, this._material);
        this._cube.position.set(0, 7.5, 0);
        this.add(this._cube);
    }
}