'use strict'

class Pause extends THREE.Object3D{

    constructor() {

        super();

        var texture = new THREE.TextureLoader().load("img/pause");
        
        this._geometry = new THREE.BoxGeometry(30, 30, 130);
        this._material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture});
        this._pause = new THREE.Mesh(this._geometry, this._material);
        this._pause.position.set(1160, 0, 0);
        this._pause.rotation.x = Math.PI / 2;
        this.add(this._pause);

        this._geometry = new THREE.BoxGeometry(30, 30, 130);
        this._material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture});
        this._pause = new THREE.Mesh(this._geometry, this._material);
        this._pause.position.set(1230, 0, 0);
        this._pause.rotation.x = Math.PI / 2;
        this.add(this._pause);
    }
}