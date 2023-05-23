import { CGFobject, CGFshader, CGFtexture, CGFappearance } from '../lib/CGF.js';
import { MyPlane } from "./MyPlane.js";

/**
* MyTerrain
* @constructor
* @param scene - Reference to MyScene object
*/
export class MyTerrain extends CGFobject {

  constructor(scene) {
      super(scene);

      this.initMaterialsAndTextures();
      this.initShaders();

      this.plane = new MyPlane(this.scene, 30);
  }

  initShaders() {
      this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
      this.shader.setUniformsValues({uSamplerHeightMap: 1});
      this.shader.setUniformsValues({uSamplerAltimetry: 2});
  }

  initMaterialsAndTextures() {
      this.terrainTexture = new CGFtexture(this.scene, "images/terrain.jpg");
      this.heightTexture = new CGFtexture(this.scene, "images/heightmapMod3.jpg");
      this.altimetryTexture = new CGFtexture(this.scene, "images/altimetry.png");

      this.terrainMaterial = new CGFappearance(this.scene);
      this.terrainMaterial.setAmbient(0.6, 0.6, 0.6, 1.0);
      this.terrainMaterial.setDiffuse(0.7, 0.7, 0.7, 1.0);
      this.terrainMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
      this.terrainMaterial.setShininess(10.0);
      this.terrainMaterial.setTexture(this.terrainTexture);
  }

  display() {
      this.scene.setActiveShader(this.shader);

      this.terrainMaterial.apply();
      this.heightTexture.bind(1);
      this.altimetryTexture.bind(2);
      
      // display plane
      this.scene.pushMatrix();
      this.scene.translate(0,-90,0);
      this.scene.rotate(-Math.PI/2.0, 1, 0, 0);
      this.scene.scale(400, 400, 5);
      this.scene.plane.display();
      this.scene.popMatrix();

      this.scene.setActiveShader(this.scene.defaultShader);
  }
}