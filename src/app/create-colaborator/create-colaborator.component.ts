import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-colaborator',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './create-colaborator.component.html',
  styleUrl: './create-colaborator.component.css'
})
export class CreateColaboratorComponent {
  constructor( private apiService: ApiService) {}

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
