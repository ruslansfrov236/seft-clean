import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";




@NgModule({
  declarations:[NavbarComponent,HeaderComponent],
  imports:[ CommonModule  ,HttpClientModule ],
  exports:[NavbarComponent,HeaderComponent]
})


export class SharedModule
{

}
