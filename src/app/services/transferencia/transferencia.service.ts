import { Injectable } from '@angular/core';
import { Transferencia } from 'src/app/entities/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {


  private transferencia: Transferencia[]
  constructor() {
    this.transferencia = []
  }


  get transferencias() { return this.transferencias }

  adicitonar(transferencia: Transferencia) {
    this.transferencia.push(transferencia.newInstance())
  }
}
