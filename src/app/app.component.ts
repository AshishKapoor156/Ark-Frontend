import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '****bhobdiya****';

  getName(name : string, last : string){
    
    window.console.warn(name,last);
  }

  

}
