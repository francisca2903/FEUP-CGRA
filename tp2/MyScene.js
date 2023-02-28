import { CGFscene, CGFcamera, CGFaxis } from "../lib/CGF.js";
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";

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

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.diamond = new MyDiamond(this);
    this.triangle = new MyTriangle(this);
    this.parallelogram = new MyParallelogram(this);
    this.triangleSmall = new MyTriangleSmall(this);
    this.triangleBig = new MyTriangleBig(this);

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.scaleFactor = 1;
    this.displayTriangle = true;
    this.displayDiamond = true;
    this.displayParallelogram = true;
    this.displayTriangleSmall = true;
    this.displayTriangleBig = true;
  }
  initLights() {
    this.lights[0].setPosition(15, 2, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      0.4,
      0.1,
      500,
      vec3.fromValues(15, 15, 15),
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

    this.setDefaultAppearance();

    var sca = [
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
    ];

    this.multMatrix(sca);

    // ---- BEGIN Primitive drawing section

    //this.diamond.display();
    //if(this.displayDiamond) this.diamond.display();
    //if(this.displayTriangle) this.triangle.display();
 
    //if(this.displayTriangleSmall) this.triangleSmall.display();
    //if(this.displayTriangleBig) this.triangleBig.display();

    this.pushMatrix();
    var matrixTranslate = [1,0,0,0,
                       0,1,0,0,
                       0,0,1,0,
                       0,1,0,1];
    this.multMatrix(matrixTranslate);

    //this.translate(0,1,0);
    if(this.displayDiamond) this.diamond.display();
    this.popMatrix();

    var matrixRotate = [Math.cos(Math.PI),0,-Math.sin(Math.PI),0,
                        0,1,0,0,
                        Math.sin(Math.PI),0,Math.cos(Math.PI),0,
                        0,0,0,1];

    this.pushMatrix();
    this.multMatrix(matrixRotate);

    if(this.displayParallelogram) this.parallelogram.display();
    this.popMatrix();
//----------------------------
    var matrixTranslate = [1,0,0,0,
                           0,1,0,0,
                           0,0,1,0,
                           1,0,0,1];
    
    this.pushMatrix();                       
    this.multMatrix(matrixTranslate);
    if(this.displayTriangleSmall) this.triangleSmall.display();
    this.popMatrix();
//--------------------
    var matrixTranslate = [1,0,0,0,
                           0,1,0,0,
                           0,0,1,0,
                           0,-3,0,1];

    this.pushMatrix();
    this.multMatrix(matrixTranslate);
    if(this.displayTriangleBig) this.triangleBig.display();
    this.popMatrix();
//---------------
    var matrixTranslate_x = [1,0,0,0,
                             0,1,0,0,
                             0,0,1,0,
                             -1,0,0,1];

    var matrixTranslate_y = [1,0,0,0,
                             0,1,0,0,
                             0,0,1,0,
                             0,2.4,0,1];                             

    var matrixRotate = [Math.cos(Math.PI/4),Math.sin(Math.PI/4),0,0,
                        -Math.sin(Math.PI/4),Math.cos(Math.PI/4),0,0,
                        0,0,1,0,
                        0,0,0,1];
    this.pushMatrix();
    this.multMatrix(matrixTranslate_x);
    this.multMatrix(matrixTranslate_y);
    this.multMatrix(matrixRotate);
    if(this.displayTriangle) this.triangle.display();
    this.popMatrix();
//---------------------------
    // código q pode dar para o vermelho
  /*   var matrixRotate = [Math.cos(Math.PI/4),Math.sin(Math.PI/4),0,0,
                        -Math.sin(Math.PI/4),Math.cos(Math.PI/4),0,0,
                        0,0,1,0,
                        0,0,0,1];
    this.pushMatrix();
    this.multMatrix(matrixRotate);
    if(this.displayTriangleSmall) this.displayTriangleSmall.display();
    this.popMatrix();*/
//---------------------------
//rotação em z
   /* var matrixRotateA = [Math.cos(Math.PI+Math.PI/2+Math.PI/4),Math.sin(Math.PI+Math.PI/2+Math.PI/4),0,0,
                        -Math.sin(Math.PI+Math.PI/2+Math.PI/4),Math.cos(Math.PI+Math.PI/2+Math.PI/4),0,0,
                        0,0,1,0,
                        0,0,0,1];

     var matrixTranslate1 = [1,0,0,0,
                             0,1,0,0,
                             0,0,1,0,
                             1.3,0,0,1]; 
    var matrixTranslate2 = [1,0,0,0,
                             0,1,0,0,
                             0,0,1,0,
                             0,-0.7,0,1];                            

    this.pushMatrix();
    //this.multMatrix(matrixTranslate1);
    this.scale(1.07, 1.07, 1.07);
    this.multMatrix(matrixRotateA);
    this.multMatrix(matrixTranslate1);
    this.multMatrix(matrixTranslate2);
    this.triangleBig.display();
    this.popMatrix();
    */
    //----------------
    var matrixTranslateS = [1,0,0,0,
                            0,1,0,0,
                            0,0,1,0,
                            2,-2,0,1];

    var matrixRotateS = [Math.cos(-Math.PI/2),Math.sin(-Math.PI/2),0,0,
                        -Math.sin(-Math.PI/2),Math.cos(-Math.PI/2),0,0,
                        0,0,1,0,
                        0,0,0,1];
    

    this.pushMatrix();                       
    this.multMatrix(matrixRotateS);
    this.multMatrix(matrixTranslateS);
    if(this.displayTriangleSmall) this.triangleSmall.display();
    this.popMatrix();

    //---------------------------
    var matrixRotateT = [Math.cos(Math.PI),Math.sin(Math.PI),0,0,
                        -Math.sin(Math.PI),Math.cos(Math.PI),0,0,
                        0,0,1,0,
                        0,0,0,1];

    var matrixTranslateT = [1,0,0,0,
                          0,1,0,0,
                          0,0,1,0,
                          -0.5,1.5,0,1];

    this.pushMatrix();                       
    this.multMatrix(matrixRotateT);
    this.multMatrix(matrixTranslateT);
    this.scale(1.5, 1.5, 1.5);
    if(this.displayTriangle) this.triangle.display();
    this.popMatrix();

    
    // ---- END Primitive drawing section
  }
}
