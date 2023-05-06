import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Slider } from './footer.modul';

@Injectable()
export class FooterService {
 private url = "https://seftclean-default-rtdb.firebaseio.com/"
  constructor(private http:HttpClient) { }


  getSlider():Observable<Slider[]>{
    return this.http
                  .get<Slider[]>(this.url+ "slider.json")
                  .pipe(
                    map( data=>{
                        const  slider:Slider[]=[];

                       for(let key in data){


                          slider[0]=({...data[key] , id:key})


                       }
                        return slider;

                      }



                    )
                  )
  }


}
