import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.page.html',
  styleUrls: ['./topics-page.page.scss'],
})
export class TopicsPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openProblemsPage() {
    this.router.navigate(['../problems-page']);
  }
}