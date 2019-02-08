class Floor extends MovableObject {

  constructor(width, height, x, y, z) {

    var floor = new THREE.Object3D();

    
    // quando instanciar floor dou as dimensoes certas
    var geometry = new THREE.CubeGeometry(width, 1, height);
    var material = new THREE.MeshBasicMaterial({ color: 0x00FF00, wireframe: true});
    var mesh = new THREE.Mesh(geometry, material);
    
    super(0, 0, 0, height, width, mesh, 0, null);
    
    mesh.position.set(x, y, z);
    
    floor.add(mesh);
    
    this._width = width;
    this._height = height;
  }

  getHeight() {
    return this._height;
  }

  getWidth() {
    return this._width;
  }
}