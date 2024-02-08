import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private dialog: MatDialog) { }

  sendContactRequest(data: any): Observable<any> {
    const successDialog = this.dialog.open(SuccessDialogComponent, {
      width: '300px'
    });

    return of({ status: 200, message: 'Contato solicitado com sucesso!' });
  }
}
