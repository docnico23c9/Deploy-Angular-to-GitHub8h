import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistroJosueComponent } from './registro-josue/registro-josue.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroJosueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
