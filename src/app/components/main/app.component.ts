import { Component } from '@angular/core';
import { Transferencia } from '../../entities/transferencia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: Transferencia[] = []


  transferencia(transferencia: Transferencia) {
    this.transferencias.push(transferencia.newInstance());

  }
}
