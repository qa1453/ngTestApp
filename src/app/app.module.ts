import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { SplashComponent } from './views/splash/splash.component';

import { AuthService } from './auth/auth.service';

@NgModule({
   declarations: [
      AppComponent,
      ToolbarComponent,
      SidebarComponent,
      WelcomeComponent,
      SplashComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      AppMaterialModule
   ],
   providers: [AuthService],
   bootstrap: [AppComponent]
})
export class AppModule { }
