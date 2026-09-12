import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-catalog',
  imports: [RouterModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog implements OnInit {
  teas: any[] = [];
  searchQuery: string = '';
  loading: boolean = false;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    public searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const search = params['search'] || '';
      this.searchQuery = search;
      this.searchService.setSearch(search);
      this.loadTeas(search);
    });
  }

  loadTeas(search: string): void {
    this.loading = true;
    let url = 'https://testologia.ru/tea';
    if (search) {
      url += '?search=' + encodeURIComponent(search);
    }
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.teas = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  clearSearch(): void {
    this.searchService.clearSearch();
    this.searchQuery = '';
    this.loadTeas('');
  }
}
