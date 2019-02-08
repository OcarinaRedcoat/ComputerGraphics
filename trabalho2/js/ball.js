'use strict'

class Ball extends MovableObject{

    constructor(radius, acc, x, y, z){

        var ball = new THREE.Object3D();
        
        var speedo = function (min, max) {
            return Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);
        }
        
        var speedX = speedo(-1,1);
        var speedZ = speedo(-1,1);
        
        super(acc, speedX, speedZ, 2*radius, 2*radius, ball, radius, null);

        this._vectorSpeed = new THREE.Vector3(speedX, 0, speedZ);
                
        var material = new THREE.MeshBasicMaterial({ color: 0xffff12, wireframe: true});
        var geometry = new THREE.SphereGeometry(radius, 32, 32);
        var mesh = new THREE.Mesh(geometry, material);

        this._rotationSpeed = Math.PI/6;
        this._radius = radius;


        ball.add(mesh);
        ball.add(new THREE.AxisHelper(10));

        ball.position.set(x, y, z);
        

    }

    getRotationSpeed(){
        return this._rotationSpeed
    }

    getRadius() {
        return this._radius;
    }


    setAcc(velocity){
        super._currentSpeed = velocity;
    }

    

    update(scene_elements, dt){

        var collision = null;

        var rot = this._mesh.rotation;
        var pos = this._mesh.position;
        
        var rotX = rot.x;
		var rotY = rot.y;
		var rotZ = rot.z;

		/* Current position */
		var posX = pos.x;
		var posY = pos.y;
        var posZ = pos.z;
        

        this.movementWithNoCollision(); /* Moves the object to see if there is collision */
        collision = super.checkCollision(this, scene_elements); /* Checks collision */
		
		this._mesh.position.set(posX, posY, posZ);	/* Brings the position back to the current frame */
		this._mesh.rotation.set(rotX, rotY, rotZ);	/* Brings the rotation back to the current frame */

		if (collision == null) {
            this.movementWithNoCollision();
            //this.ballRotation(dt);
		}

		else {
			this.movementWithCollision(collision);
		}
    }

    movementWithCollision(collision){
        
        var division = 0;

        var vectorNewSpeed = new THREE.Vector3(0,0,0); //v1
                
        var centerVectorWall = new THREE.Vector3(this.getCurrentX() - collision.getObj().position.x, 0, this.getCurrentZ() - collision.getObj().position.z);
        
        // console.log(collision.position.x);
        if(collision.getObjectType() == 1) { //se forem parede
            
            division = ((this._vectorSpeed).dot(centerVectorWall)) / (centerVectorWall.lengthSq());
            centerVectorWall.multiplyScalar(division);
            vectorNewSpeed.subVectors(this._vectorSpeed,centerVectorWall);
            //console.log(vectorNewSpeed.subVectors(this._vectorSpeed,centerVectorWall));
            // console.log(vectorNewSpeed);
            //this._mesh.translateX(vectorNewSpeed.x);
            //this._mesh.translateZ(vectorNewSpeed.z);
            
        }
    }
    

    movementWithNoCollision(dt){

        var mesh = this._mesh;
        var speedX = this._vectorSpeed.x;
        var speedZ = this._vectorSpeed.z;

        mesh.translateX(speedX);
        mesh.translateZ(speedZ);

    }

    ballRotation(dt){
        var m = new THREE.Matrix4();
        var dir = new THREE.Vector3();
        dir = this._vectorSpeed.clone();

        var teta = (this._vectorSpeed.length()*dt)/this._radius;
        dir.normalize();
        dir.cross(new THREE.Vector3(0,-1,0));


        m.makeRotationAxis(dir,teta)

        this._mesh.applyMatrix(m);
    }

  }