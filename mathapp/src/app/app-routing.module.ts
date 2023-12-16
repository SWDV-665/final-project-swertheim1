import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TopicsPage } from './topics/topics.page';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'topics/:problemType',
    loadChildren: () => import('./topics/topics.module').then((m) => m.TopicsPageModule)
  },
  {
    path: 'problems-page',
    loadChildren: () => import('./problems-page/problems-page.module').then( m => m.ProblemsPagePageModule)
  },

  {
    path: 'subtraction',
    loadChildren: () => import('./subtraction/subtraction.module').then( m => m.SubtractionPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'addition-with-whole-numbers',
    loadChildren: () => import('./addition-with-whole-numbers/addition-with-whole-numbers.module').then( m => m.AdditionWithWholeNumbersPageModule)
  },

  {
    path: 'addition-with-decimals',
    loadChildren: () => import('./addition-with-decimals/addition-with-decimals.module').then( m => m.AdditionWithDecimalsPageModule)
  },
  {
    path: 'addition-with-fractions',
    loadChildren: () => import('./addition-with-fractions/addition-with-fractions.module').then( m => m.AdditionWithFractionsPageModule)
  },
  {
    path: 'addition-with-integers',
    loadChildren: () => import('./addition-with-integers/addition-with-integers.module').then( m => m.AdditionWithIntegersPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
