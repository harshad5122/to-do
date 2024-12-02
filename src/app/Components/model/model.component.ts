import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { messages } from '../../Constants/Messages';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent {
  @Input() isVisible: boolean = false;
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

  close() {
    this.closeModal.emit();
  }

  confirm() {
    this.confirmAction.emit();
  }

  onSubmitClick() {
    console.log('onSubmitClick');
    this.close();
  }
}
