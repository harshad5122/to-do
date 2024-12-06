import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ModelComponent } from '../model/model.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  cards: any[] = [];
  constructor(private todoService: TodoService) { }
  filteredCards: any[] = [];

  ngOnInit(): void {
    this.fetchTodoList();
  }

  fetchTodoList(): void {
    this.todoService.getTodoList().subscribe((data) => {
      if (data?.todos?.length > 0) {
        this.cards = [...data.todos];
        this.filteredCards = this.cards;
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


  filterCards(searchTerm: string): void {
    if (searchTerm && searchTerm.trim() !== '') {
      searchTerm = searchTerm.toLowerCase();
      this.filteredCards = this.cards.filter(card =>
        card.todo.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      this.filteredCards = this.cards;
    }
  }
}
