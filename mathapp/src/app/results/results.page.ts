import { Component, OnInit } from '@angular/core';
import { ResultsDataService } from '../results-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  sharedResults: any;

  constructor(private resultsDataService: ResultsDataService) { }

  ngOnInit() {
    this.sharedResults = this.resultsDataService.getSharedResults();
    console.log('Shared Results in ResultsPage:', this.sharedResults);
  }

}
