import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.scss'],
})
export class NovaTransferenciaComponent {
  valor: Number = 12;
  destino: Number = 12;
  transferir() {
    console.log(
      'SOlicitar nova transferencia',
      this.valor.toFixed(9),
      this.destino
    );
  }
}
