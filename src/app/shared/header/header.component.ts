import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  msjcard:boolean=false
  constructor( private http:HttpClient){}

  ngOnInit(): void {

  }
MesajCard(){
  this.msjcard=!this.msjcard
}


}
