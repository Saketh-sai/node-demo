import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'node-demo';

  public  titleRes : string = "" ;
  public  desc : string = "" ;
  public  price : string = "" ;
  public  rating : string = "" ;
  public  stock : string = "" ;
  public  brand : string = "" ;
display: boolean = false;
  

constructor(private http : HttpClient ){}
  

ngOnInit()
 {
    
  this.getData();
  }

getData(){

  
}


load(){

  this.display = true;
  console.log("Data loaded");

  this.http.get('http://localhost:3000/api/getProduct').subscribe( res => {
    console.log(res);
    
    var s = JSON.stringify(res);
    var str = JSON.parse(s);

    console.log(str.title);
    this.title = str.title;
    this.brand = str.brand;
    this.rating = str.rating;
    this.price = str.price;
    this.desc = str.description;

    console.log(this.rating );

  });

}


}
