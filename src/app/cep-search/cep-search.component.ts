import { Component } from '@angular/core';
import { ViaCepService } from '../servico/via-cep.service';
import { Subject, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css'],
})
export class CepSearchComponent {
  cep: string = '';
  cepInfo?: any;
  cepInputSubject = new Subject<string>();

  constructor( private viaCepService: ViaCepService ) {
    this.setupCepInputSubscription();
  }

  setupCepInputSubscription() {
    this.cepInputSubject
      .pipe(
        debounceTime(300), // Aguarde 300ms de inatividade
        switchMap((value) => this.searchCEP(value)) // Realize a pesquisa no CEP
      )
      .subscribe((data) => {
        this.cepInfo = data;
      });
  }

  onCepInputChange(event: any) {
    const value = event.target.value;
    this.cepInputSubject.next(value);
  }

  async searchCEP(cep: string): Promise<any> {
    this.viaCepService.getCEPInfo(this.cep).subscribe((data) => {
      this.cepInfo = data;
      console.log(data, '1');
    });
  }
}
