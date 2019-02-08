'use strict'

class Spotlight extends THREE.Object3D{

    constructor(x, y, z) {
        'use strict'

        super();
        //var body = new THREE.Object3D();
        
        this.geometry1 = new THREE.ConeGeometry(6, 20, 32);
        this.material1 = new THREE.MeshStandardMaterial({ color: 0x00FF00});
        this.cone = new THREE.Mesh(this.geometry1, this.material1);
        this.cone.position.set(x, y, z);

        this.add(this.cone);


        this.geometry2 = new THREE.SphereGeometry(5, 32, 32);
        this.material2 = new THREE.MeshBasicMaterial({ color: 0xffffff});
        this.sphere = new THREE.Mesh(this.geometry2, this.material2);
        this.sphere.position.set(x, y-10, z);

        this.add(this.sphere); 


        this.spotLight = new THREE.SpotLight(0xffffff, 1, 300, Math.PI/10, 0.2);
        this.spotLight.position.set(x, y - 20, z);

        this.add(this.spotLight);

        //var spotter = new THREE.SpotLightHelper(this.spotLight);
        //scene.add(spotter);
    }

    getSpotIntensity(){
        return this.spotLight.intensity;
    }
}