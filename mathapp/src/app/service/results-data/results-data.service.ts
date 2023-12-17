import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ResultsDataService {

  constructor() { }

  private sharedResults: any;
  
  setSharedResults(sharedResults: any): void {
    this.sharedResults = sharedResults;
  }

  getSharedResults(){
    return this.sharedResults;
  }
}
