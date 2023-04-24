import {CGFobject, CGFtexture, CGFappearance, CGFcamera} from '../lib/CGF.js';
import { MyPlane } from './MyPlane.js';
import { MyPyramid } from './MyPyramid.js';
import { MySmallSphere } from './MySmallSphere.js';
import { MyTriangle } from './MyTriangle.js';
import { MyCylinder } from './MyCylinder.js';

export class MyBird extends CGFobject {
    constructor(scene) {
      super(scene);
  
      this.smallSphere = new MySmallSphere(this.scene, 16, 8);
      this.smallSphere1 = new MySmallSphere(this.scene, 16, 8);
      this.pyramid = new MyPyramid(this.scene,4, 1);
      this.plane1 = new MyPlane(this.scene, 5);
     // this.triangle = new MyTriangle(this.scene);
     this.triangle = new MyTriangle(this.scene, [
      0, 0.5,
      0, 1,
      0.5, 1,
    ]);
    this.cylinder = new MyCylinder(this.scene, 9, 0.5, 0.2, 0.2);
     
      this.initMaterials();
    }

    initMaterials(){

        this.black = new CGFappearance(this.scene);
        this.black.setAmbient(0, 0, 0, 1.0);
        this.black.setDiffuse(0, 0, 0, 1.0);
        this.black.setSpecular(0, 0, 0, 1.0);
        this.black.setShininess(0.0);

        this.orange = new CGFappearance(this.scene);
        this.orange.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.orange.setDiffuse(1.0, 165.0/255, 0.0, 1.0);
        this.orange.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.orange.setShininess(10.0);

        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(0.3, 0.2, 0.3, 1.0);
        this.blue.setDiffuse(0.0, 150.0/255, 1.0, 1.0);
        this.blue.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.blue.setShininess(10.0);

        this.appearance = new CGFappearance(this.scene);
        this.appearance.setEmission(1, 1, 1, 1);
        this.appearance.loadTexture('images/birdTexture.jpeg');
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

    }
    display(){

        // display the head
        this.blue.apply();
        this.smallSphere.display();

        // display the body
        this.appearance.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.3, -1, 0);
        this.scene.scale(1.4, 1, 1);
        this.smallSphere1.display();
        this.scene.popMatrix();

        //display the beak
        this.scene.pushMatrix();
        this.scene.translate(-0.45, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(0.2, 0.2, 0.2);
        this.orange.apply();
        this.pyramid.display();
        this.scene.popMatrix();

        //display the neck
        this.scene.pushMatrix();
        this.scene.translate(0, -0.7, 0);
        this.blue.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        //display the wings left
        this.scene.pushMatrix();
        this.appearance.apply();
        this.scene.translate(0.5,-1,0.6);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.rotate(-Math.PI/3, 0, 0, 1);
        this.scene.rotate(-Math.PI/4, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.scale(0.2,0.5,1);
        this.scene.gl.disable(this.scene.gl.CULL_FACE);
        this.smallSphere.display();
        this.scene.popMatrix();

        //display the wings right
        this.scene.pushMatrix();
        this.appearance.apply();
        this.scene.translate(0.5,-1,-0.6);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(-Math.PI/3, 0, 0, 1);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.scale(0.2,0.5,1);
        this.scene.gl.disable(this.scene.gl.CULL_FACE);
        this.smallSphere.display();
        this.scene.popMatrix();

        // display the eyes
        this.scene.pushMatrix();
        this.scene.translate(-0.3, 0.2, 0.3);
        this.scene.scale(0.2, 0.2, 0.2);
        this.black.apply();
        this.smallSphere1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.3, 0.2, -0.3);
        this.scene.scale(0.2, 0.2, 0.2);
        this.black.apply();
        this.smallSphere1.display();
        this.scene.popMatrix();

        // display the cauda
        this.scene.pushMatrix();
        this.appearance.apply();
        this.scene.translate(1,-1,0);
        this.scene.scale(0.2,0.2,0.2);
        this.smallSphere.display();
        this.scene.popMatrix();

        // display the leg left
        this.scene.pushMatrix();
        this.scene.translate(0.3, -1.7, 0.1);
        this.scene.scale(0.25,0.5,0.25);
        this.orange.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.orange.apply();
        this.scene.translate(0.26,-1.7,0.1);
        this.scene.scale(0.2,0.1,0.1);
        this.smallSphere.display();
        this.scene.popMatrix();

        //display the leg right 
        this.scene.pushMatrix();
        this.scene.translate(0.3, -1.7, -0.1);
        this.scene.scale(0.25,0.5,0.25);
        this.orange.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.orange.apply();
        this.scene.translate(0.26,-1.7,-0.1);
        this.scene.scale(0.2,0.1,0.1);
        this.smallSphere.display();
        this.scene.popMatrix();


      }
    
  }