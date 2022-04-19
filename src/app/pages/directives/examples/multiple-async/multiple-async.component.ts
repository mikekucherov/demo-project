import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-async',
  templateUrl: './multiple-async.component.html',
  styleUrls: ['./multiple-async.component.scss']
})
export class MultipleAsyncComponent implements OnInit {
  myStream$;

  constructor() { }

  ngOnInit(): void {
  }

}
