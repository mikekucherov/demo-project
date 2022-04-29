import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: {
    name: string;
  };

  isHighlighted;
  addition = '!!!';

  constructor() { }

  ngOnInit(): void {
  }

  toUpperCaseWithAddition(name, addition) {
    console.count('UPPERCASED WITH ADDITION' + addition);
    return name.toUpperCase() + addition;
  }

}
