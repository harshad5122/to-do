import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ModelComponent } from '../model/model.component';
import { credential } from '../../Constants/credential';
import { messages } from '../../Constants/Messages';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterModule, ModelComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  isModalVisible: boolean = false;
  isForgotPasswordModalVisible: boolean = false;

  readonly EMAIL_ADDRESS_HELP_TEXT: string = messages.EMAIL_ADDRESS_HELP_TEXT;
  readonly EMAIL_ADDRESS_LABEL: string = messages.EMAIL_ADDRESS_LABEL;
  readonly PASSWORD_LABEL: string = messages.PASSWORD_LABEL;
  readonly REMEMBER_ME_LABEL: string = messages.REMEMBER_ME_LABEL;
  readonly LOGIN_LABEL: string = messages.LOGIN_LABEL;
  readonly FORGOT_PASSWORD_LABEL: string = messages.FORGOT_PASSWORD_LABEL;
  readonly LOGIN_TITLE: string = messages.LOGIN_TITLE;
  readonly LOGIN_SUCCESS_MODEL_TITLE: string = messages.LOGIN_SUCCESS_MODEL_TITLE;
  readonly LOGIN_SUCCESS_MODEL_CONTENT: string = messages.LOGIN_SUCCESS_MODEL_CONTENT;
  readonly FORGOT_PASSWORD_MODEL_TITLE: string = messages.FORGOT_PASSWORD_MODEL_TITLE;
  readonly EMAIL_ADDRESS_PLACEHOLDER: string = messages.EMAIL_ADDRESS_PLACEHOLDER;
  readonly PASSWORD_PLACEHOLDER: string = messages.PASSWORD_PLACEHOLDER;

  constructor(private router: Router) { }

  openModal() {
    this.isModalVisible = true;
  }

  handleModalClose() {
    this.isModalVisible = false;
    this.isForgotPasswordModalVisible = false
  }

  handleModalConfirm() {
    this.isModalVisible = false;
    this.isForgotPasswordModalVisible = false
    this.router.navigate(['/dashboard'])
  }

  onForgotTextClick() {
    this.isForgotPasswordModalVisible = true
  }

  onSubmitClick() {
    if (this.email === credential?.LOGIN_EMAIL && this.password === credential?.LOGIN_PASSWORD) {
      this.isModalVisible = true;
    } else {
      alert('Please enter valid email and password!');
    }
  }
}
