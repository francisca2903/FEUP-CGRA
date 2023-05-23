import {CGFobject, CGFappearance} from '../lib/CGF.js';
/**
 * MyCircle
 * @constructor
 * @param {MyScene} scene - Reference to MyScene object
 * @param {Int} slices - Refers to the number of slices around the Y axis
 */
export class MyCircle extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }

    initBuffers() {

        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var deltaAng = 2 * Math.PI / this.slices; //angle diference between vertices

        for(var i = 0; i < this.slices; i++, ang += deltaAng) {

            var cos = Math.cos(ang);
            var sin = Math.sin(ang);

            this.vertices.push(cos, 0, sin);
            this.normals.push(0, 1, 0);
            this.texCoords.push(0.5 + cos/2, 0.5 - sin/2);

        }

        for (var i = 0; i < this.slices; i++) {
            this.indices.push(this.slices, (i+1) % this.slices, i);
        }

        this.vertices.push(0, 0, 0);
        this.normals.push(0, 1, 0);
        this.texCoords.push(0.5, 0.5);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}
