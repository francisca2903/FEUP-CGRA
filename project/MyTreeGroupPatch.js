import { CGFobject } from '../lib/CGF.js';
import { MyBillboard } from './MyBillboard.js';

export class MyTreeGroupPatch extends CGFobject {
    constructor(scene, terrain, x, y, z) {
        super(scene);
        this.trees = [];
        this.x = x;
        this.y = y;
        this.z = z;
        this.terrain = terrain;

        const textures = ["images/billboardtree.png", "images/tree4.png", "images/tree3.png"];

        let index = 0;
        for (let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++){
                const offset_x = i * 8;
                const offset_z = j * 8;
                var tree_x = this.x + offset_x;
                var tree_z = this.z + offset_z;
                const texture = textures[index % textures.length];
                this.trees[index] = new MyBillboard(scene, tree_x, this.y, tree_z, texture);
                index++;    
            }
        }

        this.initBuffers()
    }

    display() {
        for (let i = 0; i < 9; i++) {
            this.tree[i].display();
        }

        for (let i = 0; i < 9; i++) {
            this.billboards[i].display();
        }
    }
}