import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AgePipe,

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
