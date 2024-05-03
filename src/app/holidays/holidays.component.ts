import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-holidays',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.css'
})
export class HolidaysComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  searchTerm: string = '';
  collaborators: any[] = [];
  selectedCollaborator: any;
  startDate: Date | undefined;
  endDate: Date | undefined;


  constructor( private apiService: ApiService) {}
  ngOnInit() {
    this.fetchItems();
    this.fetchItems2();
  }

  fetchItems() {
    this.apiService.getItems().subscribe((response) => {
      console.log('Collaborators:', response);
      this.collaborators = response as any[];
    });
  }
  fetchItems2() {
    this.apiService.getItemsHoliday().subscribe((response) => {
      console.log('Items:', response);
      this.items = response as any[];
      this.filteredItems = this.items;
    });
  }
  searchProjects() {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  createHoliday() {
    const newHoliday = {
      collaborator: this.selectedCollaborator.id,
      startDate: this.startDate,
      endDate: this.endDate
    };
    this.apiService.createHoliday(newHoliday).subscribe((response) => {
      console.log('Created holiday:', response);
      // Handle success or any UI updates here
    });
  }

}


