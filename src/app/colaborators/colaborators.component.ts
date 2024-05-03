import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colaborators',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./colaborators.component.css'],
  templateUrl: './colaborators.component.html'
})
export class ColaboratorsComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  searchTerm: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    if (this.apiService) {
      this.apiService.getItems().subscribe((response) => {
        console.log('Items:', response);
        this.items = response as any[];
        this.filteredItems = this.items;
      });
    }
  }
  searchCollaborators() {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  createNewItem(formData: any) {
    const newItem = {
      email: formData.email,
      name: formData.name,
      street: formData.address,
      postalCode: formData.postalCode
    };
    this.apiService.createItem(newItem).subscribe((response) => {
      console.log('Created item:', response);
      // Handle success or any UI updates here
    });
  }
}
