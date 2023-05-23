import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MyPanorama } from "./MyPanorama.js";
import { MyPlane } from "./MyPlane.js";
import { MySphere } from "./MySphere.js";
import { MyBird } from "./MyBird.js";
import { MyTerrain } from "./MyTerrain.js";
import { MyEggs } from "./MyEggs.js";
import { MyNest } from "./MyNest.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();

  }
  init(application) {
    super.init(application);
    
    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.setUpdatePeriod(50);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.plane = new MyPlane(this,30);
    this.sphere = new MySphere(this, 16, 8);
    this.panorama = new MyPanorama(this, "images/panorama4.jpg");
    this.bird = new MyBird(this);
    this.terrain = new MyTerrain(this);
    this.eggs = new MyEggs(this, 4);
    this.nest = new MyNest(this);

    //Objects connected to MyInterface
    this.displayAxis = false;
    this.scaleFactor = 1;
    this.speedFactor = 1;
    this.displaySphere = false;
    this.displayPlane = true;

    this.enableTextures(true);

    // earth
    //this.texture1 = new CGFtexture(this, "images/earth.jpg");
    //this.appearance = new CGFappearance(this);
    //this.appearance.setTexture(this.texture1);
    //this.appearance.setTextureWrap('REPEAT', 'REPEAT');

    // terrain
    this.texture = new CGFtexture(this, "images/terrain.jpg");
    this.appearance = new CGFappearance(this);
    this.appearance.setEmission(1, 1, 1, 1);
    this.appearance.setTexture(this.texture);
    this.appearance.setTextureWrap('REPEAT', 'REPEAT');
    
  }

 update() {
      this.checkKeys();
  }
  
  checkKeys() {
    var text="Keys pressed: ";
    var keysPressed=false;

    if (this.gui.isKeyPressed("KeyW")) {
      text+= " W ";
      keysPressed = true;
      this.bird.accelerate(1); 
    }
    else if (this.gui.isKeyPressed("KeyS")) {
      text+= " S ";
      keysPressed = true;
      this.bird.accelerate(-1);
    }
    if (this.gui.isKeyPressed("KeyA")) {
      this.bird.turn(1);

    }
    else if (this.gui.isKeyPressed("KeyD")) {
      this.bird.turn(-1);
    }
    if(this.gui.isKeyPressed("KeyR")) {
        this.bird.x = 0;
        this.bird.y = 0;
        this.bird.z = 0;
        this.bird.orientation = 0;
        this.bird.speed = 0;
    }
    if(this.gui.isKeyPressed("KeyP")) {
      this.bird.goDown();
    }

    if (keysPressed)
        console.log(text);
        this.bird.update();
  }


  initLights() {
    this.lights[0].setPosition(15, 0, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      1.35,
      0.1,
      1000,
      vec3.fromValues(50, 10, 15),
      vec3.fromValues(0, 0, 0)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // Draw axis
    if (this.displayAxis) this.axis.display();

    // ---- BEGIN Primitive drawing section

    // display of the plane
    /*this.pushMatrix();
    this.appearance.apply();
    this.translate(0,-50,0);
    this.scale(400,400,400);
    this.rotate(-Math.PI/2.0,1,0,0);
    if(this.displayPlane) this.plane.display();
    this.popMatrix();*/

    // display of the sphere
    if(this.displaySphere) this.sphere.display();

    // display of the panorama
    this.panorama.display();

    // display of the bird
    this.pushMatrix();
    this.translate(0, 0, 0);
    this.bird.display();
    this.popMatrix();

    // display of the terrain
    this.terrain.display();

    // display of the eggs
    this.pushMatrix();
    this.translate(70, -60, 0);
    this.scale(15,15,15);
    this.eggs.display();
    this.popMatrix();
    
    // display the nest
    this.pushMatrix();
    this.translate(0, -60, 40);
    this.scale(10,10,10);
    this.nest.display();
    this.popMatrix();


    // ---- BEGIN Primitive drawing section

    // ---- END Primitive drawing section
  }
}