import {CGFobject, CGFtexture, CGFappearance} from '../lib/CGF.js';
import { MyCircle } from './MyCircle.js';
import { MyCylinder } from './MyCylinder.js';

export class MyNest extends CGFobject {
    constructor(scene) {
      super(scene);
  
      this.circle = new MyCircle(this.scene, 16);
      this.cilinder = new MyCylinder(this.scene, 10, 0.5, 1, 1);
      this.nrEggs = 0;
      this.eggs = [];
     
      this.initMaterials();
    }

    initMaterials(){

        this.appearance1 = new CGFappearance(this.scene);
        this.appearance1.setEmission(1, 1, 1, 1);
        this.appearance1.loadTexture('images/nestTexture.jpeg');
        this.appearance1.setTextureWrap('REPEAT', 'REPEAT');

    }

    addEgg(egg) {
      this.eggs.push(egg);
      this.nrEggs++;
    }

    display(){

        // display the base
        this.scene.pushMatrix();
        this.appearance1.apply();
        this.circle.display(); 
        this.scene.popMatrix();

        //display the sides 
        this.scene.pushMatrix();
        this.appearance1.apply();
        this.scene.scale(1, 1, 1); 
        this.cilinder.display();
        this.scene.popMatrix();

          //display the eggs
          if (this.nrEggs > 0) {
            for (let i = 0; i < this.nrEggs; i++) {
              this.scene.pushMatrix();
              // adjust position as necessary
              this.scene.translate(0, i * 0.2, 0);
              this.eggs[i].display();
              this.scene.popMatrix();
            }
          }
      }

      }
    
  