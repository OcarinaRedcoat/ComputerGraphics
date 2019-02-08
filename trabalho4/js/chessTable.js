'use strict'

class ChessTable extends THREE.Object3D{

    constructor() {

        super();

        // TABLES SIDES

        var texture = new THREE.TextureLoader().load("img/wood.jpg");

        this._geometry = new THREE.BoxGeometry(100, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0x7d3e11, map: texture, transparent: true, opacity: 1});
        this._table = new THREE.Mesh(this._geometry, this._material);
        this._table.position.set(0, 0, 45);
        this.add(this._table);

        this._geometry = new THREE.BoxGeometry(100, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0x7d3e11, map: texture, transparent: true, opacity: 1 });
        this._table = new THREE.Mesh(this._geometry, this._material);
        this._table.position.set(0, 0, -45);
        this.add(this._table);

        this._geometry = new THREE.BoxGeometry(100, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0x7d3e11, map: texture, transparent: true, opacity: 1 });
        this._table = new THREE.Mesh(this._geometry, this._material);
        this._table.position.set(-45, 0, 0);
        this._table.rotation.y = Math.PI / 2;
        this.add(this._table);

        this._geometry = new THREE.BoxGeometry(100, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0x7d3e11, map: texture, transparent: true, opacity: 1 });
        this._table = new THREE.Mesh(this._geometry, this._material);
        this._table.position.set(45, 0, 0);
        this._table.rotation.y = Math.PI / 2;
        this.add(this._table);


        // 32 WHITE SQUARES

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(35, 0, 35);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(25, 0, 25);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(15, 0, 15);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(5, 0, 5);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-5, 0, -5);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-15, 0, -15);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-25, 0, -25);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-35, 0, -35);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(35, 0, 15);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(35, 0, -5);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(35, 0, -25);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(25, 0, 5);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(25, 0, -15);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(25, 0, -35);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(15, 0, 35);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(15, 0, -5);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(15, 0, -25);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(5, 0, 25);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(5, 0, -15);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(5, 0, -35);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-5, 0, 35);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-5, 0, 15);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-5, 0, -5);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-5, 0, -25);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-15, 0, 25);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-15, 0, 5);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-15, 0, -35);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-25, 0, 35);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-25, 0, 15);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-25, 0, -5);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-35, 0, 25);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-35, 0, 5);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-35, 0, -15);
        this.add(this._whiteSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: 1 });
        this._whiteSquares = new THREE.Mesh(this._geometry, this._material);
        this._whiteSquares.position.set(-35, 0, -35);
        this.add(this._whiteSquares);



        // 32 BLACK SQUARES

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture});
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(35, 0, 25);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(35, 0, 5);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(35, 0, -15);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(35, 0, -35);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(25, 0, -25);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(25, 0, -5);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(25, 0, 15);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(25, 0, 35);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(15, 0, 25);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(15, 0, 5);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(15, 0, -15);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(15, 0, -35);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(5, 0, -25);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(5, 0, -5);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(5, 0, 15);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(5, 0, 35);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-5, 0, 25);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-5, 0, 5);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-5, 0, -15);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-5, 0, -35);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-15, 0, -25);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-15, 0, -5);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-15, 0, 15);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-15, 0, 35);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-25, 0, 25);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-25, 0, 5);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-25, 0, -15);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-25, 0, -35);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-35, 0, -25);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-35, 0, -5);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-35, 0, 15);
        this.add(this._BlackSquares);

        this._geometry = new THREE.BoxGeometry(10, 5, 10);
        this._material = new THREE.MeshLambertMaterial({ color: 0xa26a42, map: texture, transparent: true, opacity: 1 });
        this._BlackSquares = new THREE.Mesh(this._geometry, this._material);
        this._BlackSquares.position.set(-35, 0, 35);
        this.add(this._BlackSquares);

    }

}