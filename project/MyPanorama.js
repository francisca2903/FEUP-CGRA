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
      this.scene.pushMatrix();
  
      this.scene.translate(this.scene.camera.position[0], this.scene.camera.position[1], this.scene.camera.position[2]);

      this.appearance.apply();
  
      // display the sphere
      this.sphere.display();
      
      this.scene.popMatrix();

      /*this.appearance.apply();
  
      // display the sphere
      this.sphere.display();*/
    
        
    }
  }