import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CmpComponent } from './cmp/cmp.component';
import { ChangeTextDirective } from './change-text.directive';


@NgModule({
  declarations: [
    AppComponent,
    CmpComponent,
    ChangeTextDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
