import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { CallPipe } from './call/call.pipe';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ExamplePipe } from './example.pipe';

@NgModule({
  declarations: [PipesComponent, CallPipe, UserCardComponent, ExamplePipe],
  imports: [CommonModule, PipesRoutingModule],
})
export class PipesModule {}
