import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceService {
  public films={};
  constructor(public http: Http) { }
   filmList(){
     this.films=[{director:'Trivikram',movieName:'Attarintikidaredi'},
     {director:'Trivikram',movieName:'Attarintikidaredi'},
     {director:'Trivikram',movieName:'Attarintikidaredi'}]
     return this.films;
   }
   getFilemListfromApi(){
      return this.http.get('http://www.snagfilms.com/apis/films.json?limit=10').map((res=>{
        return res;
      }));
   }
}
