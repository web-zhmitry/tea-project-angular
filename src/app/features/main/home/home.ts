import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { timer, Subscription } from 'rxjs';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [NgbAccordionModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  showPopup: boolean = false;
  private timerSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.timerSubscription = timer(5000).subscribe(() => {
      this.showPopup = true;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  goToCatalog(): void {
    this.router.navigate(['/catalog']);
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
