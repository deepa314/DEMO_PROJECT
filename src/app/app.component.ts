import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  title = 'demo-project';

  constructor(private router:Router){
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/' || val.url == '/login' || val.url == '/sign-up' ) {
          this.isSidePanelVisible = false;
        }
        
        else {
          this.isSidePanelVisible = true;
        }
      }
    });
  }

  ngOnInit(): void {
      
  }
  

  
 

 

}


 



 




