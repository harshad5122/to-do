import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodoService } from './services/todo.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
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
