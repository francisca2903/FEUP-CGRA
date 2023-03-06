import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [

			-0.5, 0.5, -0.5,	//0
			-0.5, -0.5, -0.5,	//1
			0.5, 0.5, -0.5,	//2
			0.5, -0.5, -0.5,   //3
            -0.5, 0.5, 0.5,	//4
			-0.5, -0.5, 0.5,   //5
			0.5, 0.5, 0.5,	//6
			0.5, -0.5, 0.5,    //7

			
		];

		this.vertices = this.vertices.concat(this.vertices);
        this.vertices = this.vertices.concat(this.vertices);

		//Counter-clockwise reference of vertices
		this.indices = [

			3,1,0, //tras
			0,2,3,
			1,5,4, //esq
			4,0,1,
			7,3,2, //dir
			2,6,7,
			5,7,6, //frente
			6,4,5,
			4,6,2, //cima
			2,0,4,
			7,5,1, //baixo
			1,3,7
		];

		this.normals = [
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,

			0,1,0,
			0,-1,0,
			0,1,0,
			0,-1,0,
			0,1,0,
			0,-1,0,
			0,1,0,
			0,-1,0,

			-1,0,0,
			-1,0,0,
			1,0,0,
			1,0,0,
			-1,0,0,
			-1,0,0,
			1,0,0,
			1,0,0
		
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

