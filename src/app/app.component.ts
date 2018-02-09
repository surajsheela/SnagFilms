import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(public http:HttpServiceService){
      var result = http.filmList();
      console.log(result);
  }
  ngOnInit(){
    this.http.getFilemListfromApi().subscribe((res)=>{
        var obj=res.json();
        var filmsObj=obj.films;
        var filmArray=new Array();
        filmArray=filmsObj.film;
        var imagesArray=new Array();
        var i=0;
        for(let entry of filmArray)
        {  
          imagesArray[i]=entry.images.image[0].src;
          i++;
        }
        for(var j=0;j<imagesArray.length;j++)
        {
        console.log(imagesArray[j]);
        var a=document.createElement("IMG");
      a.setAttribute("src",imagesArray[j]);
      document.getElementById("Images").appendChild(a);
        }
    });
  }
}
