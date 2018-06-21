import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  total = 0;
  constructor() {}
  ngOnInit(){}
  addOne(): void {
    this.total +=1;
  }
  subOne(): void {
    this.total -=1;
  }
}
