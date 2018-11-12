import { Component, 
        ElementRef,
         ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  info = InfoPage;

  imgurlOnliner = "https://gc.onliner.by/images/logo/onliner_logo.v3.png?token=1541770588";

  constructor(public navCtrl: NavController) {

  }

    //   /**
    //   * 'plug into' DOM canvas element using @ViewChild
    //   */
    // @ViewChild('canvas') canvasEl : ElementRef;



    // /**
    //    * Reference Canvas object
    //    */
    //   private _CANVAS  : any;
    
    
    
    // /**
    //    * Reference the context for the Canvas element
    //    */
    //     private _CONTEXT : any;

        
    //    x = 100;
    //    y = 200;
    //    dx = 5;
    //    dy = 5;
    //    interval;


    // ionViewDidLoad()
    // {
    //   this._CANVAS 	    = this.canvasEl.nativeElement;
    //   this._CANVAS.width  	= window.innerWidth;
    //   this._CANVAS.height 	= 500;

    //   this.initialiseCanvas();
    //   this.interval = setInterval(() => { this.draw() }, 10);
    // }

    // initialiseCanvas()
    // {
    //   if(this._CANVAS.getContext)
    //   {
    //       this.setupCanvas();
    //   }
    // }

    // setupCanvas()
    // {
    //   this._CONTEXT = this._CANVAS.getContext('2d');
    // }

    // clearCanvas()
    // {
    //   this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    //   this.setupCanvas();
    // }

    // drawCircle()
    // {
    //   // this.clearCanvas();
    //   this.x = 100;
    //   this.y = 200;
    //   this.dx = 5;
    //   this.dy = 5;
    //   setInterval(() => { this.draw() }, 100);

    //   // // x, y, radius, startAngle, endAngle
    //   // this._CONTEXT.arc(this._CANVAS.width/2, this._CANVAS.height/2, 80, 0, 2 * Math.PI);
    //   // this._CONTEXT.lineWidth = 1;
    //   // this._CONTEXT.strokeStyle = '#cccccc';
    //   // this._CONTEXT.stroke();
    // }



    // draw(){
    //   // this.clearCanvas();
    //   this.clearCanvas();
    //   this._CONTEXT.beginPath();
    //   this._CONTEXT.arc(this.x,this.y,20,0,Math.PI*2,true);
    //   this._CONTEXT.lineWidth = 1;
    //   this._CONTEXT.strokeStyle = '#cccccc';
    //   this._CONTEXT.stroke();
    //   this.x+=this.dx;
    //   this.y+=this.dy;
    //   if(this.x >= this._CANVAS.width){
    //     this.x = this._CANVAS.width;
    //     this.dx = -this.dx;
    //   }
    //   if(this.x <= 0){
    //     this.x = 0;
    //     this.dx = -this.dx;
    //   }
    //   if(this.y <= 0){
    //     this.y = 0;
    //     this.dy = -this.dy;
    //   }
    //   if(this.y >= this._CANVAS.height){
    //     this.y = this._CANVAS.height;
    //     this.dy = -this.dy;
    //   }
      
    // }

    // drawSquare()
    // {
    //   clearInterval(this.interval);
    //   this.clearCanvas();
    //   this._CONTEXT.beginPath();
    //   this._CONTEXT.rect(this._CANVAS.width/2 - 100, this._CANVAS.height/2 - 100, 200, 200);
    //   this._CONTEXT.lineWidth = 1;
    //   this._CONTEXT.strokeStyle = '#cccccc';
    //   this._CONTEXT.stroke();
    // }

    // drawTriangle()
    // {
    //   clearInterval(this.interval)
    //   this.clearCanvas();
    //   this._CONTEXT.beginPath();
    //   this._CONTEXT.moveTo(this._CANVAS.width/2 - 100, this._CANVAS.height/2 + 100);
    //   this._CONTEXT.lineTo(this._CANVAS.width/2 + 100, this._CANVAS.height/2 + 100);
    //   this._CONTEXT.lineTo(this._CANVAS.width/2, this._CANVAS.height/2);
    //   this._CONTEXT.lineTo(this._CANVAS.width/2 -100, this._CANVAS.height/2 + 100);
    //   this._CONTEXT.lineWidth = 1;
    //   this._CONTEXT.strokeStyle = '#cccccc';
    //   this._CONTEXT.stroke();
    // }


}
