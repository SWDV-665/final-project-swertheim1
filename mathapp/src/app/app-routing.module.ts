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
  {
    path: 'subtraction-with-whole-numbers',
    loadChildren: () => import('./subtraction-with-whole-numbers/subtraction-with-whole-numbers.module').then( m => m.SubtractionWithWholeNumbersPageModule)
  },
  {
    path: 'subtraction-with-decimals',
    loadChildren: () => import('./subtraction-with-decimals/subtraction-with-decimals.module').then( m => m.SubtractionWithDecimalsPageModule)
  },  {
    path: 'subtraction-with-integers',
    loadChildren: () => import('./subtraction-with-integers/subtraction-with-integers.module').then( m => m.SubtractionWithIntegersPageModule)
  },
  {
    path: 'subtraction-with-fractions',
    loadChildren: () => import('./subtraction-with-fractions/subtraction-with-fractions.module').then( m => m.SubtractionWithFractionsPageModule)
  },
  {
    path: 'multiplication-with-fractions',
    loadChildren: () => import('./multiplication-with-fractions/multiplication-with-fractions.module').then( m => m.MultiplicationWithFractionsPageModule)
  },
  {
    path: 'multiplication-with-whole-numbers',
    loadChildren: () => import('./multiplication-with-whole-numbers/multiplication-with-whole-numbers.module').then( m => m.MultiplicationWithWholeNumbersPageModule)
  },
  {
    path: 'multiplication-with-integers',
    loadChildren: () => import('./multiplication-with-integers/multiplication-with-integers.module').then( m => m.MultiplicationWithIntegersPageModule)
  },
  {
    path: 'multiplication-with-decimals',
    loadChildren: () => import('./multiplication-with-decimals/multiplication-with-decimals.module').then( m => m.MultiplicationWithDecimalsPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
