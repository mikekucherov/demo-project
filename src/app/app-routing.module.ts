import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pipes',
    pathMatch: 'full',
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./pages/pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./pages/directives/directives.module').then(
        (m) => m.DirectivesModule
      ),
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./pages/loading/loading.module').then(
        (m) => m.LoadingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
