import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations:[ 
    trigger('mostrar',[
            state('open', style({
            
            opacity: 1
            
          })),
          state('closed', style({
            
            opacity: 0
          })),
          transition('open => closed', [
            animate(2500)
          ]),
          transition('closed => open', [
            animate(2500)
          ]),
    ]),
      ]
    
    
 
})
export class MainPageComponent implements OnInit {

  public isOpen: boolean = false;
  

  constructor(
  ) {
   
   }

  

  ngOnInit(): void {
    console.log('OK');
   setTimeout(()=>{
     this.isOpen = true;
  }, 100)
    
  }


 
 

  
}
