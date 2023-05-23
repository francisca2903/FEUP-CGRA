import {CGFobject, CGFtexture, CGFappearance} from '../lib/CGF.js';
import { MySmallSphere } from './MySmallSphere.js';


export class MyBirdEgg extends CGFobject {
    constructor(scene) {
      super(scene);
  
      this.smallSphere = new MySmallSphere(this.scene, 16, 8, 0.1);
     
      this.initMaterials();
    }

    initMaterials(){

        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(0.7, 0.7, 0.7, 1);
        this.appearance.setDiffuse(0.9, 0.9, 0.9, 1);
        this.appearance.setSpecular(0.1, 0.1, 0.1, 1);
        this.appearance.setShininess(10.0);
        this.appearance.loadTexture('images/eggTexture.jpeg');
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

    }
    display(){

        // display the egg
        this.scene.pushMatrix();
        this.scene.scale(1, 1.5, 1); // elongate along YY
        this.appearance.apply();
        this.smallSphere.display();
        this.scene.popMatrix();

      }
    
  }