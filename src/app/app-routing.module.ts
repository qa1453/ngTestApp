import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { SplashComponent } from './views/splash/splash.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
   { path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
   { path: 'splash', component: SplashComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
