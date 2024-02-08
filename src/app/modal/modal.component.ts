import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servico/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  selectedOption: string = '';
  contactForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  selectContactOption(option: string) {
    this.selectedOption = option;

    const nonSelectedControl = option === 'telefone' ? 'email' : 'phoneNumber';
    const nonSelectedControlRef = this.contactForm.get(nonSelectedControl) as FormControl;

    if (nonSelectedControlRef) {
      nonSelectedControlRef.clearValidators();
      nonSelectedControlRef.updateValueAndValidity();
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

  contact() {
    if (this.contactForm.valid) {
      const requestData = {
        option: this.selectedOption,
        phoneNumber: this.contactForm.value.phoneNumber,
        email: this.contactForm.value.email
      };

      this.apiService.sendContactRequest(requestData).subscribe(
        (response) => {
          if (response.status === 200) {
            this.dialogRef.close();
          } else {

          }
        },
        (error) => {
          alert('Erro ao solicitar contato. Por favor, tente novamente.');
        }
      );
    }
  }
}
