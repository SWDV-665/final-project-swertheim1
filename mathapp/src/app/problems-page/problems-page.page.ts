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
   
  }

  
}



 


 