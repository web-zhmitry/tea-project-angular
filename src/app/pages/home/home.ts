import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  showPopup: boolean = false;
  private timerSubscription: Subscription | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.timerSubscription = timer(5000).subscribe(() => {
      console.log('Таймер сработал');
      this.showPopup = true;
      console.log('showPopup:', this.showPopup);
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
}
