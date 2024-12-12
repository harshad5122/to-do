import { AfterViewInit, ChangeDetectorRef, Component, OnInit, signal, effect } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private cards = signal<any[]>([]);
  filteredCards = signal<any[]>([]);
  isLoading = signal(true);

  constructor(private todoService: TodoService, private cdr: ChangeDetectorRef, private searchService: SearchService) {
    // Create an effect to detect when cards are rendered
    effect(() => {
      if (this.filteredCards().length > 0) {
        // Delay hiding spinner slightly to ensure rendering is complete
        setTimeout(() => {
          this.isLoading.set(false);
          this.cdr.detectChanges(); // Ensure Angular detects changes
        }, 0);
      }
    });
  }

  ngOnInit(): void {
    this.fetchTodoList();
    this.searchService.currentSearchTerm.subscribe(searchTerm => {
      this.filterTodos(searchTerm);
    });
  }

  filterTodos(searchTerm: string) {
    if (!searchTerm) {
      this.filteredCards.set([...this.cards()]);
      return;
    }

    this.filteredCards.set(this.cards().filter((card: any) => 
      card.todo.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }

  fetchTodoList(): void {
    this.isLoading.set(true);
    this.todoService.getTodoList().subscribe(
      (data) => {
        if (data?.todos?.length > 0) {
          this.cards.set([...data.todos]);
          this.filteredCards.set(this.cards());
        } else {
          this.filteredCards.set([]); // No cards found
        }
      },
      (error) => {
        console.error('Error fetching To-Do list:', error);
        this.isLoading.set(false);
      }
    );
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
