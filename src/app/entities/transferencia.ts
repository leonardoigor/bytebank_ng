export class Transferencia {
  valor: Number;
  destino: Number;
  date: Date | null
  constructor(data: { valor: Number, destino: Number }, date: Date | null = null) {
    this.valor = data.valor
    this.destino = data.destino
    if (date == null) {

      this.date = new Date()
    } else {
      this.date = date

    }

  }

  static build(data: { valor: Number, destino: Number }): Transferencia { return new Transferencia(data) }

  newInstance(): Transferencia { return new Transferencia({ valor: this.valor, destino: this.destino }, this.date) }
}
