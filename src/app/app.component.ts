import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data = [
    {
      date: '12-Jan-2012',
      address: '705',
      topic: 'some thing',
      homework: 'lession no 2',
    },
    {
      date: '10-Jan-2012',
      address: '705',
      topic: 'some thing',
      homework: 'lession no 2',
    },
    {
      date: '11-Jan-2012',
      address: '705',
      topic: 'some thing',
      homework: 'lession no 2',
    },
  ];
  ngOnInit() {}
  sortOn() {
    this.lessons = this.lessons.sort((order, a, b) => {
      let dateA: Date = new Date(a.date),
        dateB: Date = new Date(b.date);
      if ((order = 'asc')) {
        return dateA - dateB;
      } else if ((order = 'desc')) {
        return dateB - dateA;
      }
    });
    console.log(this.lessons);
  }
}