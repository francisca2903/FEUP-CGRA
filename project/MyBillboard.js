import {CGFobject, CGFappearance, CGFshader} from "../lib/CGF.js";
import { MyQuad } from "./MyQuad.js";

export class MyBillboard extends CGFobject{
    constructor(scene, x, y , z, texture){
        super(scene);
        this.x = x;
        this.y = y;
        this.z = z;
        this.texture = texture;
        this.angle = 0;
        this.quad = new MyQuad(this.scene);


        this.initMaterials();
        this.initShaders();
    }

    initMaterials(){
        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(0.1, 0.1, 0.1, 1);
        this.appearance.setDiffuse(0.9, 0.9, 0.9, 1);
        this.appearance.setSpecular(0.1, 0.1, 0.1, 1);
        this.appearance.setShininess(10.0);
        this.appearance.loadTexture(this.texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    initShaders() {
        this.shader = new CGFshader(this.scene.gl, "shaders/texture3anim.vert", "shaders/texture3anim.frag");
		this.shader.setUniformsValues({ timeFactor: 0 });
    }

    calculate_angle(){
        const cameraPosition = this.scene.camera.position;
        const treeToCamera = [
            cameraPosition[0] - this.x,
            cameraPosition[1] - this.y,
            cameraPosition[2] - this.z,
        ];

        this.angle = Math.atan2(treeToCamera[0], treeToCamera[2]);

    }

    update(t) {
        this.time = Math.sin(t/1000); // t is typically the current time in milliseconds
    }

    display(){

        this.calculate_angle();
        this.scene.setActiveShader(this.shader);
        this.shader.setUniformsValues({ timeFactor: this.time });

        // display billboard
        this.scene.pushMatrix();
        this.scene.setGlobalAmbientLight(1.0, 1.0, 1.0, 1.0);
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.scale(6, 10 , 1);
        this.appearance.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);

    }

    
}