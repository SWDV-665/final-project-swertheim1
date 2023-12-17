import { Component, OnInit } from '@angular/core';
import { ResultsDataService } from '../service/results-data/results-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  sharedResults: any;

  constructor(private resultsDataService: ResultsDataService, private router: Router) { }

  ngOnInit() {
    this.sharedResults = this.resultsDataService.getSharedResults();
    console.log('Shared Results in ResultsPage:', this.sharedResults);
  }

  handleButtonClick() {
    this.router.navigate([`/home`]);;
    }

    breadcrumbItems = [
      { text: 'Home', routerLink: '/home' },
      { text: 'Results', routerLink: '/results'}
    ]

}

  

