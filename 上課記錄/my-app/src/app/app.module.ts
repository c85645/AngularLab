import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CmpComponent } from './cmp/cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import { RouterModule } from '@angular/router';
import { MyserviceService } from './myservice.service';


@NgModule({
  declarations: [
    AppComponent,
    CmpComponent,
    ChangeTextDirective,
    SqrtPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'cmp',
        component:CmpComponent 
      }
    ])
  ],
  providers: [
    {
      provide: MyserviceService,
      useClass: MyserviceService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
