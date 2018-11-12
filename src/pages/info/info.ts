import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  strings:Array<string>;
  selected:string;

  constructor(public navCtrl: NavController) {
    this.strings = new Array<string>();

    this.strings.push('a');
    this.strings.push('b');

    var baseUrl = "https://people.onliner.by/2018/11/09/tuman-2";
    const Http = new XMLHttpRequest();
    Http.open("GET", baseUrl);
    Http.send();
    Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
    }

  

    // this.getRequest(baseUrl)
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => {
    //   console.log(error);
    // });
    
   

  }

  // getRequest(url: string): Promise<any> {
  //   return new Promise<any>(
  //     function (resolve, reject) {
  //       const request = new XMLHttpRequest();
  //       request.onload = function () {
  //         if (this.status === 200) {
  //           resolve(this.response);
  //         } else {
  //           reject(new Error(this.statusText));
  //         }
  //       };
  //       request.onerror = function () {
  //         reject(new Error('XMLHttpRequest Error: ' + this.statusText));
  //       };
  //       request.open('GET', url);
  //       request.send();
  //     });
  //   }

}
