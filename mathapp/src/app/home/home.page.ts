import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  openTopicsPage(problemType: any) {
    console.log('opening ', ' /', problemType, ' topics');
      // Navigate to the 'topics' route with the selected problem type as a parameter
     this.router.navigate(['/topics', problemType]);
  }
}

