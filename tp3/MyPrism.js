import {CGFobject} from '../lib/CGF.js';

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyPrism extends CGFobject {

    constructor(scene, slices, stacks){
    super(scene);
    this.slices = slices;
    this.stacks = stacks;
    this.initBuffers();
}
	
initBuffers() {
    this.vertices = [];
            this.indices = [];
            this.normals = [];
    
                var y = 0;
                var stack = 0;
                var ang = 0;
                var i = 0;
                var alphaAng = 2*Math.PI/this.slices;
                var cicle = 1;
                        while(stack < this.stacks){
                            if(cicle == 1){
                                this.vertices.push(Math.cos(ang), y, -Math.sin(ang));
                                this.vertices.push(Math.cos(ang), y, -Math.sin(ang));
                            }
                            else if(cicle == 2){
                                this.vertices.push(Math.cos(ang), y+(1/this.stacks), -Math.sin(ang));
                                this.vertices.push(Math.cos(ang), y+(1/this.stacks), -Math.sin(ang));
                            }
                            if(i != 0 && i != 1){
                                switch(cicle){
                                    case 1:
                                        this.indices.push((4*stack*this.slices)+i, (4*stack*this.slices)+i-1, (4*stack*this.slices)+0);
                                        break;
                                    case 2:
                                        this.indices.push((4*stack*this.slices)+2*this.slices+i-2,(4*stack*this.slices)+2*this.slices+i,(4*stack*this.slices)+2*this.slices);
                                        break;
                                    case 3:
                                        this.indices.push((4*stack*this.slices)+i-1, (4*stack*this.slices)+i, (4*stack*this.slices)+i+2*this.slices);
                                        break;
                                    case 4:
                                        this.indices.push((4*stack*this.slices)+i+2*this.slices, (4*stack*this.slices)+i-1+2*this.slices, (4*stack*this.slices)+i-1);
                                        break;
                                    }        
                                }
                            else{
                                switch(cicle){
                                    case 3:
                                        this.indices.push((4*stack*this.slices)+2*this.slices-1, (4*stack*this.slices)+0, (4*stack*this.slices)+i+2*this.slices);
                                        break;
                                    case 4:
                                        this.indices.push((4*stack*this.slices)+i+2*this.slices, (4*stack*this.slices)+4*this.slices-1, (4*stack*this.slices)+2*this.slices-1);
                                        break;
                                    } 
                                }
            
                                ang+=Math.PI/this.slices;
                                this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
                                ang-=Math.PI/this.slices;
                                ang-=Math.PI/this.slices;
                                this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
                                ang+=Math.PI/this.slices;
                                ang+=alphaAng;
                                i+=2;
                                if(i == 2*this.slices){
                                    cicle++;
                                    i=0;
                                    ang=0;   
                                }
                                if(cicle > 4){
                                    y+=(1/this.stacks);
                                    cicle = 1;
                                    stack++;
                                } 
                            }

    //The defined indices (and corresponding vertices)
    //will be read in groups of three to draw triangles
    this.primitiveType = this.scene.gl.TRIANGLES;

    this.initGLBuffers();
}
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
    
    }



