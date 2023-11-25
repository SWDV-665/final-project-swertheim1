import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.page.html',
  styleUrls: ['./addition.page.scss'],
})
export class AdditionPage implements OnInit {

  randomNumber1!: number | undefined;
  randomNumber2!: number | undefined;

  constructor(private route: ActivatedRoute) {}
 
  ngOnInit() {
    // Generate random numbers when the page loads
    this.randomNumber1 = this.generateRandomNumber(1, 20);
    this.randomNumber2 = this.generateRandomNumber(1, 20);
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}