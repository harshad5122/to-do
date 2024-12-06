import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { messages } from '../../Constants/Messages';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent {
  @Input() title: string = 'Modal Title';
  @Input() content: string = 'Modal Content';
  @Input() firstBtnName: string = 'Confirm';
  @Input() email: string = '';
  @Input() type: string = '';
  @Output() closeModal = new EventEmitter<void>();
  @Output() confirmAction = new EventEmitter<void>();

  readonly EMAIL_ADDRESS_HELP_TEXT: string = messages.EMAIL_ADDRESS_HELP_TEXT;
  readonly EMAIL_ADDRESS_LABEL: string = messages.EMAIL_ADDRESS_LABEL;
  readonly CLOSE_BTN_LABEL: string = messages.CLOSE_BTN_LABEL;
  readonly SEND_BTN_LABEL: string = messages.SEND_BTN_LABEL;
  readonly EMAIL_ADDRESS_PLACEHOLDER: string = messages.EMAIL_ADDRESS_PLACEHOLDER;

  constructor(private dialogRef: MatDialogRef<ModelComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.content = data.content;
    this.type = data.type;
  }

  close() {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close('confirm');
  }

  onSubmitClick() {
    console.log('onSubmitClick');
    this.dialogRef.close('confirm 1');
  }
}
