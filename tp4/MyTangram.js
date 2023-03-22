import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
	
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene, [
            0, 0.5,
            0, 1,
			0.5, 1,
        ]);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene, [
            0, 0, 
            0.25, 0.25, 
            0, 0.5  
        ]);
        this.triangleBig = new MyTriangleBig(this.scene);
        this.triangleSmallRed =new MyTriangleSmall(this.scene, [
            0.25, 0.75, 
            0.5, 0.5, 
            0.75, 0.75  
        ]);
        this.triangleOrange = new MyTriangle(this.scene, [
            1, 1, 
            0.5, 0.5, 
            1, 0 
        ]);

        this.initMaterials();
   
	}

    initMaterials(){

        //------ Applied Material
        this.tangramMaterial = new CGFappearance(this.scene);
        this.tangramMaterial.setAmbient(1, 1, 1, 1);
        this.tangramMaterial.setDiffuse(1, 1, 1, 1);
        this.tangramMaterial.setSpecular(1, 1, 1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png');
        this.tangramMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // colors
        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.green.setDiffuse(0, 1.0, 0, 1.0);
        this.green.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.green.setShininess(10.0);

        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.yellow.setDiffuse(1.0, 1.0, 0.0, 1.0);
        this.yellow.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.yellow.setShininess(10.0);

        this.pink = new CGFappearance(this.scene);
        this.pink.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.pink.setDiffuse(1.0, 192.0/255, 203.0/255, 1.0);
        this.pink.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.pink.setShininess(10.0);

        this.purple = new CGFappearance(this.scene);
        this.purple.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.purple.setDiffuse(128.0/255, 0.0, 128.0/255, 1.0);
        this.purple.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.purple.setShininess(10.0);

        this.red = new CGFappearance(this.scene);
        this.red.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.red.setDiffuse(1.0, 0.0, 0.0, 1.0);
        this.red.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.red.setShininess(10.0);

        this.orange = new CGFappearance(this.scene);
        this.orange.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.orange.setDiffuse(1.0, 165.0/255, 0.0, 1.0);
        this.orange.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.orange.setShininess(10.0);

        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.blue.setDiffuse(0.0, 150.0/255, 1.0, 1.0);
        this.blue.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.blue.setShininess(10.0);
    }
	
	display() {

        this.tangramMaterial.apply();

                // Diamond
                var matrixTranslate = [1,0,0,0,
                                   0,1,0,0,
                                   0,0,1,0,
                                   0,1,0,1];

                this.scene.pushMatrix();                   
                this.scene.multMatrix(matrixTranslate);
            
                //this.translate(0,1,0);
                //this.green.apply();
                this.diamond.display();
                this.scene.popMatrix();

                // Parallelogram
            
                var matrixRotate = [Math.cos(Math.PI),0,-Math.sin(Math.PI),0,
                                    0,1,0,0,
                                    Math.sin(Math.PI),0,Math.cos(Math.PI),0,
                                    0,0,0,1];
            
                this.scene.pushMatrix();
                this.scene.multMatrix(matrixRotate);
                //this.yellow.apply();
                this.parallelogram.display();
                this.scene.popMatrix();
            
                // Small Triangle purple

                var matrixTranslate = [1,0,0,0,
                                       0,1,0,0,
                                       0,0,1,0,
                                       1,0,0,1];
                
                this.scene.pushMatrix();                       
                this.scene.multMatrix(matrixTranslate);
                //this.purple.apply();
                this.triangleSmall.display();
                this.scene.popMatrix();
           
                // Big Triangle Blue

                var matrixTranslate = [1,0,0,0,
                                       0,1,0,0,
                                       0,0,1,0,
                                       0,-3,0,1];
            
                this.scene.pushMatrix();
                this.scene.multMatrix(matrixTranslate);
                //this.blue.apply();
                this.triangleBig.display();
                this.scene.popMatrix();
            
                // Triangle pink

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
                this.scene.pushMatrix();
                this.scene.multMatrix(matrixTranslate_x);
                this.scene.multMatrix(matrixTranslate_y);
                this.scene.multMatrix(matrixRotate);
                //this.pink.apply();
                this.triangle.display();
                this.scene.popMatrix();
            
                // Small triangle red

                var matrixTranslateS = [1,0,0,0,
                                        0,1,0,0,
                                        0,0,1,0,
                                        2,-2,0,1];
            
                var matrixRotateS = [Math.cos(-Math.PI/2),Math.sin(-Math.PI/2),0,0,
                                    -Math.sin(-Math.PI/2),Math.cos(-Math.PI/2),0,0,
                                    0,0,1,0,
                                    0,0,0,1];
                
            
                this.scene.pushMatrix();                       
                this.scene.multMatrix(matrixRotateS);
                this.scene.multMatrix(matrixTranslateS);
                //this.red.apply();
                this.triangleSmallRed.display();
                this.scene.popMatrix();
            
                // Triangle orange

                var matrixRotateT = [Math.cos(Math.PI),Math.sin(Math.PI),0,0,
                                    -Math.sin(Math.PI),Math.cos(Math.PI),0,0,
                                    0,0,1,0,
                                    0,0,0,1];
            
                var matrixTranslateT = [1,0,0,0,
                                      0,1,0,0,
                                      0,0,1,0,
                                      -0.5,1.5,0,1];
            
                this.scene.pushMatrix();                       
                this.scene.multMatrix(matrixRotateT);
                this.scene.multMatrix(matrixTranslateT);
                this.scene.scale(1.5, 1.5, 1.5);
                //this.orange.apply();
                this.triangleOrange.display();
                this.scene.popMatrix();
            
	}

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangle.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleSmallRed.enableNormalViz();
        this.triangleOrange.enableNormalViz();
        
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangle.disableNormalViz();  
        this.triangleSmall.disableNormalViz();
        this.triangleBig.disableNormalViz();
        this.triangleSmallRed.disableNormalViz();
        this.triangleOrange.disableNormalViz();     
    }
}