import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-problems-page',
  templateUrl: './problems-page.page.html',
  styleUrls: ['./problems-page.page.scss'],
})


export class ProblemsPageComponent implements OnInit {
  
   
  randomNumber1!: number | undefined;
  randomNumber2!: number | undefined;

  constructor(private route: ActivatedRoute) {}
 
  ngOnInit() {
    // Generate random numbers when the page loads
    this.randomNumber1 = this.generateRandomNumber(1, 100);
    this.randomNumber2 = this.generateRandomNumber(101, 200);
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}



 


 