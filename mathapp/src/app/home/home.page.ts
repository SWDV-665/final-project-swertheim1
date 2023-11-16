import { Component, OnInit} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonImg],
})
export class HomePage implements OnInit{
  constructor() {}

  ngOnInit() {
  }


}