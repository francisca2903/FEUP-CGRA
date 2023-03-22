import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
import { CGFappearance } from "../lib/CGF.js";
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
                
        this.quad = new MyQuad(this.scene);
        this.initMaterials();
   
	}

        initMaterials(scene) {
       
                //mine side material
                this.mineSide = new CGFappearance(this.scene);
                this.mineSide.setAmbient(1, 1, 1, 1.0);
                this.mineSide.setDiffuse(1, 1, 1, 1.0);
                this.mineSide.setSpecular(1, 1, 1, 1.0);
                this.mineSide.setShininess(10.0);
                this.mineSide.loadTexture('images/mineSide.png');
                this.mineSide.setTextureWrap('REPEAT', 'REPEAT');
        
                //mine top material
                this.mineTop = new CGFappearance(this.scene);
                this.mineTop.setAmbient(1, 1, 1, 1.0);
                this.mineTop.setDiffuse(1, 1, 1, 1.0);
                this.mineTop.setSpecular(1, 1, 1, 1.0);
                this.mineTop.setShininess(10.0);
                this.mineTop.loadTexture('images/mineTop.png');
                this.mineTop.setTextureWrap('REPEAT', 'REPEAT');
        
                //mine bottom material
                this.mineBottom = new CGFappearance(this.scene);
                this.mineBottom.setAmbient(1, 1, 1, 1.0);
                this.mineBottom.setDiffuse(1, 1, 1, 1.0);
                this.mineBottom.setSpecular(1, 1, 1, 1.0);
                this.mineBottom.setShininess(10.0);
                this.mineBottom.loadTexture('images/mineBottom.png');
                this.mineBottom.setTextureWrap('REPEAT', 'REPEAT');

        }

	
	display() {

        // Front face
        this.mineSide.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();
        
        // Back face
        this.mineSide.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.quad.display();
        this.scene.popMatrix();

        // Right face
        this.mineSide.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        // Left face
        this.mineSide.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();
        
        // Top face
        this.mineTop.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        // Down face
        this.mineBottom.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI/2, -1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

	}
}