import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { InitDirective } from './init/init.directive';
import { MultipleAsyncComponent } from './examples/multiple-async/multiple-async.component';

@NgModule({
  declarations: [DirectivesComponent, InitDirective, MultipleAsyncComponent],
  imports: [CommonModule, DirectivesRoutingModule],
})
export class DirectivesModule {}
