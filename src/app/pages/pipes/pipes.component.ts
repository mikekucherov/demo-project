import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  // TODO Fill array with random values
  cards = new Array(50).fill(1).map(v => {
    return {
      name: 'Mike'
    };
  });

  constructor() { }

  ngOnInit(): void {
  }

  performArrayItems(items: number[]) {
    console.log('PERFORMING...');
    return items.map(item => `Some text ${item}`);
  }

  performItem(item: number) {
    console.count('PERFORM ITEM...');
    return item + '123';
  }

  clickItem() {
    console.log('CLICK ITEM');
  }
}
