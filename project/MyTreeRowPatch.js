import { CGFobject } from '../lib/CGF.js';
import { MyBillboard } from './MyBillboard.js';

export class MyTreeRowPatch extends CGFobject {
    constructor(scene, x, y, z) {
        super(scene);
        this.trees = [];
        this.x = x;
        this.y = y;
        this.z = z;

        const textures = ["images/billboardtree.png", "images/tree4.png", "images/tree3.png"];

        for (let i = 0; i < 6; i++) {
            var offset = i * 8;
            var tree_x = i * 1.5 + offset;
            const texture = textures[i % textures.length];
            this.trees[i] = new MyBillboard(scene, this.x, this.y, this.z + tree_x, texture);
        }

        this.initBuffers()
    }

    display() {
        for (let i = 0; i < 6; i++) {
            this.tree[i].display();
        }

        for (let i = 0; i < 9; i++) {
            this.billboards[i].display();
        }
    }
}