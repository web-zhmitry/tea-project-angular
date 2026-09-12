import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeaService {
  private apiUrl = 'https://testologia.ru/tea';

  constructor(private http: HttpClient) {}

  getTea(search?: string) {
    let url = this.apiUrl;
    if (search) {
      url += '?search=' + encodeURIComponent(search);
    }
    return this.http.get<any[]>(url);
  }
}
