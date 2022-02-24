import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';

@Component({
  selector: 'my-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
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
  sortOn(order) {
    this.data = this.data.sort((a, b, order) => {
      let dateA: Date = new Date(a.date),
        dateB: Date = new Date(b.date);
      if ((order = 'asc')) {
        return dateA - dateB;
        this.order = 'asc';
      } else if ((order = 'desc')) {
        return dateB - dateA;
      }
    });
    console.log(this.data);
  }
}
