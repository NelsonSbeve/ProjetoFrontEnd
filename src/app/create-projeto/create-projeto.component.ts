import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-projeto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-projeto.component.html',
  styleUrl: './create-projeto.component.css'
})
export class CreateProjetoComponent {
  constructor( private apiService: ApiService) {}
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
