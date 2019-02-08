 'use strict'

class Malha extends THREE.Object3D {

    constructor(color, type) {
        
        super();
        
        this._geometry = new THREE.Geometry();
        this._color = new THREE.Color( color );
        this._type = type;
        /*this._lambertMaterial = new THREE.MeshLambertMaterial();
        this._phongMaterial = new THREE.MeshPhongMaterial();
        this._standartMaterial = new THREE.Mes*/
        
        if (type == "PHONG") {

            this._material = new THREE.Mesh(this._geometry, new THREE.MeshPhongMaterial({color: this._color, shininess: 100}));
        }
        else if(type == "LAMBERT") {
            
            this._material = new THREE.Mesh(this._geometry, new THREE.MeshLambertMaterial({color: this._color, transparent: true, opacity: 0.5}));
        }
        else {

            this._material = new THREE.Mesh(this._geometry, new THREE.MeshStandardMaterial({color: this._color, metalness: 0.5, roughness: 0.5}));
        }
        this._mesh = this._material;
        this.add(this._mesh);
    }
    
    pushVertex(x, y, z) {
        this._geometry.vertices.push(new THREE.Vector3(x, y, z)); 
    }
    
    pushFinalFace(ind1, ind2, ind3) {
        this._geometry.faces.push( new THREE.Face3( ind1, ind2, ind3 ));
    }

    getGeo() {
        return this._geometry;
    }

    getObject(){
        return this._mesh;
    }

    getType(){
        if (this._type == "PHONG"){
            console.log(this._type);
        }
        else if (this._type == "LAMBERT"){
            console.log(this._type);
        }

    }

    switcheroo() {
        switch(this._type){
            case "PHONG":
                //material = this._lambertMaterial;
                this._mesh.material = new THREE.MeshLambertMaterial({
                    color: this._color,
                    transparent: true, 
                    opacity: 0.5
                });
                this._type = "LAMBERT"
                break;
            case "LAMBERT":
                //material = this._phongMaterial;
                this._mesh.material = new THREE.MeshPhongMaterial({
                    color: this._color,
                    shininess: 50 /*envMaps: reflection*/
                });
                this._type = "PHONG"
                break;
            case "STANDARD":
                break;
            case "BASIC":
                break;
        }
    }

    changez(){
        switch(this._type){
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