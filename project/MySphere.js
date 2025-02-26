import {CGFobject} from '../lib/CGF.js';
/**
 * MySphere
 * @constructor
 * @param {MyScene} scene - Reference to MyScene object
 * @param {Int} slices - Refers to the number of slices around the Y axis
 * @param {Int} stacks - Refers to the number of stacks along the Y axis
 */
export class MySphere extends CGFobject {
    constructor(scene, slices, stacks) {
      super(scene);
      this.latDivs = stacks * 2;
      this.longDivs = slices;
  
      this.initBuffers();
    }
  
    initBuffers() {
      this.vertices = [];
      this.indices = [];
      this.normals = [];
      this.texCoords = [];
  
      var phi = 0;
      var theta = 0;
      var phiInc = Math.PI / this.latDivs;
      var thetaInc = (2 * Math.PI) / this.longDivs;
      var latVertices = this.longDivs + 1;
  
      var longD = 1 / this.longDivs;
      var latD = 1 / this.latDivs;
  
      // -- build an all-around stack at a time, starting on "north pole" and proceeding "south" -- //
      for (let latitude = 0; latitude <= this.latDivs; latitude++) {
        var sinPhi = Math.sin(phi);
        var cosPhi = Math.cos(phi);
  
        // -- in each stack, build all the slices around, starting on longitude 0 -- //
        theta = 0;
        for (let longitude = 0; longitude <= this.longDivs; longitude++) {
          // -- Vertices coordinates  -- //
          var x = 250 * Math.cos(theta) * sinPhi;
          var y = 250 * cosPhi;
          var z = 250 * Math.sin(-theta) * sinPhi;
          this.vertices.push(x, y, z);
  
          // -- Indices -- //
          if (latitude < this.latDivs && longitude < this.longDivs) {
            var current = latitude * latVertices + longitude;
            var next = current + latVertices;
            // pushing two triangles using indices from this round (current, current+1)
            // and the ones directly south (next, next+1) 
            // (i.e. one full round of slices ahead) 
  
          this.indices.push(next, current, current + 1);
          this.indices.push( next + 1, next, current + 1);

          }
  
          //--- Normals
          // at each vertex, the direction of the normal is equal to 
          // the vector from the center of the sphere to the vertex. 
          // in a sphere of radius equal to one, the vector length is one. 
          // therefore, the value of the normal is equal to the position vectro 
          this.normals.push(x, y, z);
          theta += thetaInc;
  
          // -- Texture Coordinates -- //
          var tu = 0.25 + longD * longitude;
          var tv = latD * latitude;
          this.texCoords.push(tu, tv);
  
        }
        phi += phiInc;
      }
  
      this.primitiveType = this.scene.gl.TRIANGLES;
      this.initGLBuffers();
    }
  }