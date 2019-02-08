'use strict'

class MovableObject extends THREE.Object3D{

    constructor( width, length, mesh) {

		this._width = width;
        this._length = length;
		this._mesh = mesh;
    }

    getObj() {
		return this._mesh;
	}


    update(){
        
    }

	// getObjectType() {
	// 	return this._objectType;
	// }

	// getCurrentX() {
	// 	return this._positionX;
	// }

	// getCurrentZ() {
	// 	return this._positionZ;
	// }

}