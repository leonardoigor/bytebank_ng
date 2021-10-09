import { Component } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';
import { Transferencia } from '../../entities/transferencia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: Transferencia[] = []


  constructor(private service: TransferenciaService) { }

  transferencia(transferencia: Transferencia) {
    this.service.adicitonar(transferencia.newInstance())

  }
}
