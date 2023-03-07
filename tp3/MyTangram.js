import {CGFobject} from '../lib/CGF.js';
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
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene);
        this.triangleBig = new MyTriangleBig(this.scene);
        this.triangleSmallRed =new MyTriangleSmall(this.scene);
        this.triangleOrange = new MyTriangle(this.scene);
   
	}
	
	display() {
                // Diamond

                var matrixTranslate = [1,0,0,0,
                                   0,1,0,0,
                                   0,0,1,0,
                                   0,1,0,1];

                this.scene.pushMatrix();                   
                this.scene.multMatrix(matrixTranslate);
            
                //this.translate(0,1,0);
                this.diamond.display();
                this.scene.popMatrix();

                // Parallelogram
            
                var matrixRotate = [Math.cos(Math.PI),0,-Math.sin(Math.PI),0,
                                    0,1,0,0,
                                    Math.sin(Math.PI),0,Math.cos(Math.PI),0,
                                    0,0,0,1];
            
                this.scene.pushMatrix();
                this.scene.multMatrix(matrixRotate);
            
                this.parallelogram.display();
                this.scene.popMatrix();
            
                // Small Triangle purple

                var matrixTranslate = [1,0,0,0,
                                       0,1,0,0,
                                       0,0,1,0,
                                       1,0,0,1];
                
                this.scene.pushMatrix();                       
                this.scene.multMatrix(matrixTranslate);
                this.triangleSmall.display();
                this.scene.popMatrix();
           
                // Big Triangle Blue

                var matrixTranslate = [1,0,0,0,
                                       0,1,0,0,
                                       0,0,1,0,
                                       0,-3,0,1];
            
                this.scene.pushMatrix();
                this.scene.multMatrix(matrixTranslate);
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
        this.triangleSmall.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleSmallRed.enableNormalViz();
        this.triangleOrange.enableNormalViz();     
    }
}