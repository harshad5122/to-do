import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  searchTerm: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: any) {
    // Emit the search term even if empty to allow showing all results
    this.searchTerm = event.target.value;
    console.log(this.searchTerm);
    this.searchEvent.emit(this.searchTerm.toLowerCase().trim());
  }

}
