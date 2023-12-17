import { Injectable } from '@angular/core';
import { toLower } from 'ionicons/dist/types/components/icon/utils';


@Injectable({
  providedIn: 'root'
})
export class ImageHelperService {

  constructor() { 
    console.log('image helper service constructor');
  }
  
  getImagePath(problemType: string): string {
    problemType = problemType.toLowerCase();
    
    var path = (`assets/images/${problemType}.png`)
    console.log('get image path', path);
    return path;
  }
}
