import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/entities/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.transferencias = this.service.transferencias
  }

}
