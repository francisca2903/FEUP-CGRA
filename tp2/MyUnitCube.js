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
			1, 3, 2, //tras
            4, 5, 6, //frente
            5, 7, 6, //frente
            0, 1, 4, //lado esq
            1, 5, 4, //lado esq
            0, 4, 2, //cima
            4, 6, 2, //cima
            5, 1, 7, //baixo
            1, 3, 7, //baixo
            6, 2, 7, //direito
            2, 3, 7  //direito
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

