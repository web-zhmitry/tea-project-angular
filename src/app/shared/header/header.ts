import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [RouterModule, NgbCollapseModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuCollapsed = true;

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
