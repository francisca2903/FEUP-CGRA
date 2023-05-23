import {CGFobject} from '../lib/CGF.js';
import { MyBirdEgg } from './MyBirdEgg.js';

export class MyEggs extends CGFobject {
    constructor(scene, nrEggs) {
      super(scene);
      this.nrEggs = nrEggs;
      this.eggs = [];

      for (var i = 0; i < this.nrEggs; i++) {
        var newEgg = new MyBirdEgg(this.scene); 
        this.eggs.push(newEgg);
      }
     
      this.initBuffers();
    }

    
    display(){

        // display the eggs
        for(let i = 0; i < this.nrEggs; i++) {
            this.scene.pushMatrix();
            this.scene.translate(i, 0, 0);  
            this.eggs[i].display();
            this.scene.popMatrix();
        }

      }
    
  }