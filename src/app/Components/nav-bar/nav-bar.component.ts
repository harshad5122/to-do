import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelComponent } from '../model/model.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  title: string = '';
  content: string = '';
  type: string = '';
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private searchService: SearchService) {
    this.title = data.title;
    this.content = data.content;
    this.type = data.type;
  }
  addTaskModelVisible: boolean = false;
  searchTerm: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: any) {
    // Emit the search term even if empty to allow showing all results
    const searchTerm = event.target.value;
    this.searchService.updateSearchTerm(searchTerm)
  }

  addTaskModel() {
    const dialogRef = this.dialog.open(ModelComponent, {
      data: {
        title: 'Add Task',
        content: 'Add Task Content',
        type: 'addTask'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  closeModel() {
    this.addTaskModelVisible = false;
  }
}
