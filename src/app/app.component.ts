import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardList = [
    { title: 'Card 1', description: 'Descrição do Card 1' },
    { title: 'Card 2', description: 'Descrição do Card 2' },
    { title: 'Card 3', description: 'Descrição do Card 3' }
  ];

  constructor(public dialog: MatDialog) { }

  onMoreClicked(card: any) {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado');
    });
  }
}

