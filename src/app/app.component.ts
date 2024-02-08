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
    { title: 'Card 3', description: 'Descrição do Card 3' },
    { title: 'Card 4', description: 'Descrição do Card 4' },
    { title: 'Card 5', description: 'Descrição do Card 5' },
    { title: 'Card 6', description: 'Descrição do Card 6' },
    { title: 'Card 7', description: 'Descrição do Card 7' },
    { title: 'Card 8', description: 'Descrição do Card 8' },
  ];

  constructor(public dialog: MatDialog) { }

  onMoreClicked(card: any) {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado');
    });
  }
}

