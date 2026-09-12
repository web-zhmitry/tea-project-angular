import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tea-project');

  constructor(
    private router: Router,
    public searchService: SearchService,
  ) {}

  onSearch(event: Event): void {
    event.preventDefault();
    const input = (event.target as HTMLFormElement).querySelector('input') as HTMLInputElement;
    this.searchService.setSearch(input.value);
    this.router.navigate(['/catalog'], { queryParams: { search: input.value } });
  }
}
