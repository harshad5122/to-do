import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ModelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  cards: any[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchTodoList();
  }

  fetchTodoList(): void {
    this.todoService.getTodoList().subscribe((data) => {
      if (data?.todos?.length > 0) {
        this.cards = data.todos;
      }
    },
      (error) => {
        console.error('Error fetching To-Do list:', error);
      }
    )
  }
  onCompleteClick(card: any) {
    console.log('Complete action for card:', card);
    // this.openModal();
  }

  onEditClick(card: any) {
    console.log('Edit action for card:', card);
    // this.openModal();
  }

  onDeleteClick(card: any) {
    console.log('Delete action for card:', card);
    // this.openModal();
  }
}
