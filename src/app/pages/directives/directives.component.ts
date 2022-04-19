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
  myStream$ = interval(1000).pipe(take(5));
  otherStream$ = interval(1000).pipe(
    map((v) => v * 2),
    take(5)
  );

  coldStream$ = new Observable((subscriber) => {
    const timestamp = Math.random();
    subscriber.next(timestamp);
  });

  constructor() {}

  ngOnInit(): void {}
}
