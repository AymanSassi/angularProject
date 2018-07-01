import { Component, OnInit } from '@angular/core';

// 1ere etape
import {GlobalService} from "./../services/global.service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //2eme etape
  providers:[GlobalService]
})
export class HomeComponent implements OnInit {
// 3eme etape on va crer  des var
location : boolean;
//4eme etape 
  constructor(private global:GlobalService) { }
// 5eme etape
// ng on init se charge 1 seule fois
  ngOnInit() {
   // this.location = this.global.getUrlInfo();
  }
  
// a chq fois kil il ya 
ngDoCheck() {
  this.location = this.global.getUrlInfo();
}


}
