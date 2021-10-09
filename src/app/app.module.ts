import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { NovaTransferenciaComponent } from './components/nova-transferencia/nova-transferencia';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { AppComponent } from './components/main/app.component';
import { registerLocaleData } from '@angular/common';
import LocalePt from '@angular/common/locales/pt';
registerLocaleData(LocalePt, 'pt-br')

@NgModule({
  declarations: [AppComponent, NovaTransferenciaComponent, ExtratoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
