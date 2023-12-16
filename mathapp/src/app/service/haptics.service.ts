import { Injectable } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root'
})
export class HapticsService {
  constructor() {}

  hapticsImpactMedium = async () => {
    console.log('hapticsImpactMedium called')
    await Haptics.impact({style: ImpactStyle.Medium});
  };
  
}
