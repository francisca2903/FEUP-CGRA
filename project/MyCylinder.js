import {CGFobject} from '../lib/CGF.js';

/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyCylinder extends CGFobject {
    constructor(scene, slices, stack, top, bottom) {
        super(scene);
        this.slices = slices;
        this.stack = stack;
        this.top = top;
        this.bottom = bottom;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        for (var j = 0; j < this.slices + 1; j++) {
            this.vertices.push(this.top*Math.cos(j * 2 * Math.PI / this.slices), 0, this.top*Math.sin(j * 2 * Math.PI / this.slices));
            this.vertices.push(this.bottom*Math.cos(j * 2 * Math.PI / this.slices), this.stack,this.bottom* Math.sin(j * 2 * Math.PI / this.slices));
        }
    
        for (var j = 0; j < this.slices * 2; j = j + 2) {
            this.indices.push(j, j + 2, j + 1,
                j + 1, j + 2, j + 2 + 1); 
            this.indices.push(j, j + 1, j + 2,
                j + 2 + 1, j + 2, j + 1);
        }

        for (var j = 0; j < this.slices + 1; j++) {
            this.normals.push(Math.cos(j * 2 * Math.PI / this.slices), 0, Math.sin(j * 2 * Math.PI / this.slices));
            this.normals.push(Math.cos(j * 2 * Math.PI / this.slices), 0, Math.sin(j * 2 * Math.PI / this.slices));
        }
        
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}