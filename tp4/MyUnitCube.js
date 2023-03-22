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
			0.5, -0.5, 0.5    //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, //tras
			2, 1, 0,
			1, 3, 2, //tras
			2, 3, 1,
            4, 5, 6, //frente
			6, 5, 4,
            5, 7, 6, //frente
			6, 7, 5,
            0, 1, 4, //lado esq
			4, 1, 0,
            1, 5, 4, //lado esq
			4, 5, 1,
            0, 4, 2, //cima
			2, 4, 0,
            4, 6, 2, //cima
			2, 6, 4,
            5, 1, 7, //baixo
			7, 1, 5,
            1, 3, 7, //baixo
			7, 3, 1,
            6, 2, 7, //direito
			7, 2, 6,
            2, 3, 7,  //direito
			7, 3, 2,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

