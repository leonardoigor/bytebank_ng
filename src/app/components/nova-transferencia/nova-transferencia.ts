import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from 'src/app/entities/transferencia';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.scss'],
})
export class NovaTransferenciaComponent {
  @Output() onTransferir = new EventEmitter<Transferencia>();
  transferencia: Transferencia = Transferencia.build({ valor: 0, destino: 0 });
  transferir() {

    let data = {
      valor: this.transferencia.valor,
      destino: this.transferencia.destino
    }

    this.transferencia = Transferencia.build(data);

    this.onTransferir.emit(this.transferencia.newInstance())

  }
}
