import { MyBird } from "./MyBird.js";

export class MyAnimatedObject
{
    constructor(scene, s=0, e=1, st=0, d=1)
    {
        //super(scene);
        this.scene=scene;
        this.obj=new MyBird(scene);

        this.startVal=s;
        this.endVal=e;
        this.animStartTimeSecs=st;
        this.animDurationSecs=d;
        this.length=(this.endVal-this.startVal);
        this.aux = 0;
        this.animVal=this.startVal;

    }

    tween(x)
    {
        const c4 = (2 * Math.PI) / 2;
        
        return x === 0
            ? 0
            : x === 1
            ? 1
            : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);        
        //Math.sin((x * 10 - 10.75) * c4);  -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);        
    }

    update(timeSinceAppStart)
    {
      // Animation based on elapsed time since animation start
      var elapsedTimeSecs=timeSinceAppStart-this.animStartTimeSecs;

      if (elapsedTimeSecs>=0 && elapsedTimeSecs<=this.animDurationSecs/2)
          this.animVal=this.startVal + (elapsedTimeSecs/this.animDurationSecs) * this.length;
          
      this.aux = this.tween(elapsedTimeSecs/this.animDurationSecs) * this.length;

      this.animVal=this.startVal + this.tween(elapsedTimeSecs/this.animDurationSecs) * this.length;
    }

    display()
    {
        this.scene.pushMatrix();
        this.scene.translate(0,this.animVal,0);
        this.obj.display();
        this.scene.popMatrix();
    }
}