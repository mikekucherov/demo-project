import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectivesComponent implements OnInit {
  myStream$ = of(false);
  otherStream$ = of(false);

  coldStream$ = new Observable((subscriber) => {
    const timestamp = Math.random();
    subscriber.next(timestamp);
  });

  constructor() {}

  ngOnInit(): void {}
}
