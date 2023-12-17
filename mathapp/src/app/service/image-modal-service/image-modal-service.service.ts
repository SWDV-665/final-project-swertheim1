import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from 'src/app/image.modal/image.modal.page';


@Injectable({
  providedIn: 'root'
})
export class ImageModalServiceService {

  constructor(private modalController: ModalController,  ) { 

  }
  async presentImageModal() {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: {
      
        
      },
    });

    return await modal.present();
  }
}
