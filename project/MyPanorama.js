import {CGFobject, CGFtexture, CGFappearance, CGFcamera} from '../lib/CGF.js';
import { MySphere } from './MySphere.js';
/**
 * MyPanorama
 * @constructor
 * @param {MyScene} scene - Reference to MyScene object
 * @param {CGFtexture} textureP - CFtexture 
 */
export class MyPanorama extends CGFobject {
    constructor(scene, textureP) {
      super(scene);
      this.textureP = new CGFtexture(this.scene, textureP);
      this.sphere = new MySphere(this.scene, 16, 8);

      this.initMaterials();
    }
  
    initMaterials() {

      this.appearance = new CGFappearance(this.scene);
      this.appearance.setEmission(1, 1, 1, 1);
      this.appearance.setTexture(this.textureP);
      this.appearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
        this.appearance.apply();

        //this.camera.position(50, 10, 15);

        // display the sphere
        this.sphere.display();
        
    }
  }