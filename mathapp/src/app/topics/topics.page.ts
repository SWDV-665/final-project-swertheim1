import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // openProblemsPage() {
  //   this.router.navigate(['../problems-page']);
  // }

  openAdditionPage() {
    this.router.navigate(['../addition']);
  }

}