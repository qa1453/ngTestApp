import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';


@Component({
   selector: 'app-toolbar',
   templateUrl: './toolbar.component.html',
   styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

   isLoggedIn$: Observable<boolean>;

   constructor(private authService: AuthService) { }

   ngOnInit() {
      this.isLoggedIn$ = this.authService.isLoggedIn;
   }

   onLogout() {
      console.log("Logging Out");
      this.authService.logout();
   }

}
