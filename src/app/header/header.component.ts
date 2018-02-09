import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = true;
  listOfName = ['shruti','rajesh','suraj','swatej'];
  constructor() { }

  ngOnInit() {
   
  }
    submitData(){
        console.log(this.name);
        this.name=!this.name;
    }
    showAlert(){
      alert('event binding');
    }
  persons = [{
    name:'mythiri',
    country: 'US'
  },
  {
    name:'mythriis',
    country:'IND'
  },{
    name:'amazon',
    country: 'UK'
  }]

}
