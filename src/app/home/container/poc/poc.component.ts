import { Component, OnInit } from '@angular/core';
//on doit ajouter limport de httpclient module
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {
  title : string = "hello";
  // logo : string = "https://mediasv6.truffaut.com/Articles/jpg/0044000/44945_001_350.jpg";
   name:string;
   counter : number = 0;
   email : string ;
   phone : number;
   about : string;
   varb : boolean = false;
   HEROES = [
     {id: 1, name:'Superman'},
     {id: 2, name:'Batman'},
     {id: 5, name:'BatGirl'},
     {id: 3, name:'Robin'},
     {id: 4, name:'Flash'}
  ];
 
  posts : any =[];
  //http linstance kon va travailler   avec
  constructor( private http : HttpClient) { }

  ngOnInit() {
     //on va telecharger des donnée d'1 api
     this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(resultat =>{
      //on prendre les posts et les mettre ds 1 tableau kon doit declarer
      this.posts = resultat;
     })
  }
  callfunction(){
    alert(this.name);
  }

  increment(){

this.counter ++;
  }

  decrement(){
    this.counter --;

  }
  submit(){
    let data={
      Name:this.name,
      Email:this.email,
      Phone:this.phone,
      About:this.about,
    }
    console.log(data);
// ns affiche format json en alert
alert(JSON.stringify(data));
// voir local storage ds inpect
localStorage.setItem('user',JSON.stringify(data));

this.varb = true;
  }
  annuler(){
    this.name = "";
    this.email = "";
    this.phone = null;
    this.about = "";
  }

}
