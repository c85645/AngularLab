import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.css']
})
export class CmpComponent implements OnInit {
  newcomponent = "Entered in new component created";
  constructor() { }

  ngOnInit() {
    console.log("Hello");
  }

}
