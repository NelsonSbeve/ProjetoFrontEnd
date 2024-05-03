import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:5001'; // Replace with your API endpoint
  private apiUrl2 = 'https://localhost:5011';
  private apiUrlprojeto = 'http://localhost:5186';
  private apiUrlprojeto2 = 'http://localhost:5188';
  private apiUrlholiday = 'http://localhost:5188';
  private apiUrlholiday2 = 'http://localhost:5188';


  constructor(private http: HttpClient) {}


  getItemsProjeto() {
    return this.http.get(`${this.apiUrlprojeto}/api/Project`);
  }
  createItemProjeto(item: any) {
    return this.http.post(`${this.apiUrlprojeto2}/api/Project`, item);
  }

  getItemsHoliday() {
    return this.http.get(`${this.apiUrlholiday}/api/Holiday`);
  }

  createHoliday(item: any) {
    return this.http.post(`${this.apiUrlholiday2}/api/Holiday`, item);
  }
  // Example GET request
  getItems() {
    return this.http.get(`${this.apiUrl}/api/Colaborator`);
  }
  // Example POST request
  createItem(item: any) {
    return this.http.post(`${this.apiUrl2}/api/Colaborator`, item);
  }
}
