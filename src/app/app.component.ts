import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SignInComponent } from "./Components/sign-in/sign-in.component";
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ModelComponent } from "./Components/model/model.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SignInComponent,
    RouterLink,
    DashboardComponent,
    ModelComponent,
    RouterModule,
    HttpClientModule
  ],
  providers: [TodoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to-do';
}
