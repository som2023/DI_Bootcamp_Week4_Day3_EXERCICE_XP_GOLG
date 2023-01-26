import { Component } from '@angular/core';
import { PrimeCalcService } from './prime-calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise_1_Use_Opaque_Token';

  constructor(private _primeSvc : PrimeCalcService){}
}
