import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ModelComponent } from '../model/model.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private cards = signal<any[]>([]);
  filteredCards = signal<any[]>([]);

  constructor(private todoService: TodoService) { }
  
  ngOnInit(): void {
    this.fetchTodoList();
  }

  fetchTodoList(): void {
    this.todoService.getTodoList().subscribe((data) => {
      if (data?.todos?.length > 0) {
        this.cards.set([...data.todos]);
        this.filteredCards.set(this.cards());
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
      this.filteredCards.set(this.cards().filter((card: any) =>
        card.todo.toLowerCase().includes(searchTerm.toLowerCase())));
    } else {
      this.filteredCards.set(this.cards());
    }
  }
}
