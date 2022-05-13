import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { LoadingIndicators } from './loading.model';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loadingIndicatorValue: LoadingIndicators | null = null;
  loadingIndicatorsEnum = LoadingIndicators;

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {}

  addCard() {
    this.loadingIndicatorValue = LoadingIndicators.Add;

    this.loadingService.createCard().then(
      () => {
        this.loadingIndicatorValue = null;
      },
      () => {
        this.loadingIndicatorValue = null;
      }
    );
  }

  deleteCard(cardId) {
    this.loadingIndicatorValue = cardId;

    this.loadingService.deleteCard(cardId).then(
      () => {
        this.loadingIndicatorValue = null;
      },
      () => {
        this.loadingIndicatorValue = null;
      }
    );
  }

  refreshCards() {
    this.loadingIndicatorValue = LoadingIndicators.Refresh;

    this.loadingService.refreshCards().then(
      () => {
        this.loadingIndicatorValue = null;
      },
      () => {
        this.loadingIndicatorValue = null;
      }
    );
  }
}
