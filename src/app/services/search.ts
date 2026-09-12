import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  setSearch(query: string): void {
    this.searchSubject.next(query);
  }

  getSearch(): string {
    return this.searchSubject.value;
  }

  clearSearch(): void {
    this.searchSubject.next('');
  }
}
