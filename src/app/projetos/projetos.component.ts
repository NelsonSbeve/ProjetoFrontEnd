import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  searchTerm: string = '';

  constructor( private apiService: ApiService) {}
  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.apiService.getItemsProjeto().subscribe((response) => {
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
    createNewItem(formData: any) {
      const newItem = {
        name: formData.name,
        startDate: formData.startDate,
        endDate: formData.endDate,
      };
      this.apiService.createItemProjeto(newItem).subscribe((response) => {
        console.log('Created item:', response);
        // Handle success or any UI updates here
      });
    }

}
