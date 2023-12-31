import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-image.modal',
  templateUrl: './image.modal.page.html',
  styleUrls: ['./image.modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {

    this.modalController.dismiss();
  }

}
