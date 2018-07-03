import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { GetStartedModule } from '../app/get_started/get_started.module';
import { LoginModule } from '../app/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    GetStartedModule,
    LoginModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ], { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
