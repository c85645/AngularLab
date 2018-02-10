import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  isavailable = false;
  todaydate;
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};

  clickFunction(event) {
    if (this.isavailable) {
      this.isavailable = false;
    } else {
      this.isavailable = true;
    }
  }

  changeMonths(event){
    console.log("Changed month from the Dropdown.");
    console.log(event);
  }

  constructor(private myservice: MyserviceService){}
  ngOnInit(){
    this.todaydate = this.myservice.showTodayDate();
  }
}
