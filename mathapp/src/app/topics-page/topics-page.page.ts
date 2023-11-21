import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.page.html',
  styleUrls: ['./topics-page.page.scss'],
})
export class TopicsPagePage implements OnInit {

  constructor(private router: Router) { }
  
  openProblemsPage() {
    this.router.navigateByUrl('/problems-page');
  }
  
  ngOnInit() {
  }

}
