import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ImageHelperService } from '../service/image-helper/image-helper.service';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imagePath: string = '';

  constructor(private router: Router, private imageHelperService: ImageHelperService) {}

  openTopicsPage(problemType: any) {
    console.log('opening ', ' /', problemType, ' topics');

    //get image based on button click
    this.imagePath = this.imageHelperService.getImagePath(problemType);

    // Navigate to the 'topics' route with the selected problem type as a parameter and send button image as a queryParam
    console.log('image path: ', this.imagePath)
   
      this.router.navigate(['/topics', problemType], { queryParams: { imagePath: this.imagePath } })
  
  }
  breadcrumbItems = [
    { text: 'Home', routerLink: '/home' },
  ]
}

