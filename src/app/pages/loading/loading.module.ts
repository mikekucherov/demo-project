import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import {LoadingRoutingModule} from "./loading-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {DirectivesModule} from "../directives/directives.module";



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    LoadingRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    DirectivesModule
  ]
})
export class LoadingModule { }
