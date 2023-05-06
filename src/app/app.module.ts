import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { ProductModule } from "./products/products.module";
import { AppRoutingModule } from "./shared/app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { FooterModule } from "./footer/footer.module";




@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FooterModule,
    ProductModule,
    HttpClientModule,






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
