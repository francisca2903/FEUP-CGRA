import {CGFobject} from '../lib/CGF.js';

/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
    constructor(scene, slices, stack) {
        super(scene);
        this.slices = slices;
        this.stack = stack;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];


        // vértices
        for (var j = 0; j < this.slices; j++) {
            for (var i = 0; i < 2; i++) {
                this.vertices.push(Math.cos((j + i) * Math.PI * 2 / this.slices), 0, Math.sin((j + i) * Math.PI * 2 / this.slices));
                this.vertices.push(Math.cos((j + i) * Math.PI * 2 / this.slices), this.stack, Math.sin((j + i) * Math.PI * 2 / this.slices));
            }
        }

        // indices
        for (var j = 0; j < this.slices * 4; j = j + 4) {
            this.indices.push(j, j + 2, j + 1, j + 1, j + 2, j + 3); 
            this.indices.push(j, j + 1, j + 2, j + 3, j + 2, j + 1);
        }


        // normais
        for (var j = 0; j < this.slices; j++) {
            for (var i = 0; i < 2; i++) {
                this.normals.push(Math.cos(((j) * Math.PI * 2 / this.slices) + Math.PI * 2 / (this.slices * 2)), 0, Math.sin(((j) * Math.PI * 2 / this.slices) + Math.PI * 2 / (this.slices * 2)));
                this.normals.push(Math.cos(((j) * Math.PI * 2 / this.slices) + Math.PI * 2 / (this.slices * 2)), 0, Math.sin(((j) * Math.PI * 2 / this.slices) + Math.PI * 2 / (this.slices * 2)));
            }
        }

        // text coord
       /* for (var j = 0; j < this.slices; j++) {
            for (var i = 0; i < 2; i++) {
                this.texCoords.push((j + i) / this.slices, 1);
                this.texCoords.push((j + i) / this.slices, 0);
            }
        }*/

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}