import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TopicsPage } from './topics/topics.page';
import { AdditionPage } from './addition/addition.page';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
    path: 'addition',
    loadChildren: () => import('./addition/addition.module').then( m => m.AdditionPageModule)
  },
  {
    path: 'subtraction',
    loadChildren: () => import('./subtraction/subtraction.module').then( m => m.SubtractionPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
