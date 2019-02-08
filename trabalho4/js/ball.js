'use strict'

class Ball extends THREE.Object3D {

    constructor(x, y, z) {

        super();

        var texture = new THREE.TextureLoader().load("img/snooker.png");

        this._geometry = new THREE.SphereGeometry(5, 40, 40);
        this._material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture, opacity: 1});
        this._sphere = new THREE.Mesh(this._geometry, this._material);


        this._sphere.position.set(x, y, z);
        this.add(this._sphere);

    }


    rotatingMe(initTime, timeDiff) {
        
        if(initTime != 0) {
            
            this._sphere.rotation.x += -0.05 * initTime;
            this.rotateY(initTime * timeDiff);
        }
        else {
            this.rotateY(initTime * timeDiff);
        }
    }

    getPosition() {
        return console.log(this._sphere.position);
    }


    changez() {
        switch (this._type) {
            case "PHONG":
                this._mesh.material = new THREE.MeshBasicMaterial({
                    color: this._color,
                });
                this._type = "BASIC"
                break;
            case "LAMBERT":
                this._mesh.material = new THREE.MeshBasicMaterial({
                    color: this._color,
                });
                this._type = "BASIC"
                break;
            case "STANDARD":
                this._mesh.material = new THREE.MeshBasicMaterial({
                    color: this._color,
                });
                this._type = "BASIC"
                break;
            case "BASIC":
                this._mesh.material = new THREE.MeshStandardMaterial({
                    color: this._color,
                    metalness: 0.5,
                    roughness: 0.5
                });
                this._type = "STANDARD";
                break;

        }
    }
}