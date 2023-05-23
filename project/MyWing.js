import {CGFobject, CGFtexture, CGFappearance, CGFcamera} from '../lib/CGF.js';
import { MyTriangle } from './MyTriangle.js';
import { MyParallelogram } from './MyParallelogram.js';

export class MyWing extends CGFobject {
    constructor(scene) {
      super(scene);

      this.triangle = new MyTriangle(this.scene, [
        0, 0.5,
        0, 1,
        0.5, 1,
      ]);
      this.parallelogram = new MyParallelogram(this.scene);

    
    }

    display(){
       
         this.scene.pushMatrix();
         this.scene.scale(1,0.5,1);
         this.scene.scale(0.5,1,0.5);
         this.parallelogram.display();
         this.scene.popMatrix();

         this.scene.pushMatrix();
         this.scene.translate(0.25,1.3,0);
         this.scene.scale(0.25,0.3,0);
         this.triangle.display();
         this.scene.popMatrix();
 
    }
}