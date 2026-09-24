import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements OnInit {
  orderForm: FormGroup;
  success: boolean = false;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[А-Яа-яЁёA-Za-z]+$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[А-Яа-яЁёA-Za-z]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      product: [{ value: '', disabled: true }],
      address: ['', [Validators.required, Validators.pattern('^[А-Яа-яЁёA-Za-z0-9\\s\\-\\/]+$')]],
      comment: [''],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['product']) {
        this.orderForm.patchValue({ product: params['product'] });
      }
    });
  }

  onSubmit(): void {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const data = {
      name: this.orderForm.get('name')?.value,
      last_name: this.orderForm.get('last_name')?.value,
      phone: this.orderForm.get('phone')?.value,
      country: this.orderForm.get('country')?.value,
      zip: this.orderForm.get('zip')?.value,
      product: this.orderForm.get('product')?.value,
      address: this.orderForm.get('address')?.value,
      comment: this.orderForm.get('comment')?.value || '',
    };

    this.http.post<any>('https://testologia.ru/order-tea', data).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.success === 1) {
          this.success = true;
          this.cdr.detectChanges();
        } else {
          this.errorMessage = 'Произошла ошибка. Попробуйте еще раз.';
          setTimeout(() => (this.errorMessage = ''), 3000);
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Произошла ошибка. Попробуйте еще раз.';
        setTimeout(() => (this.errorMessage = ''), 3000);
      },
    });
  }
}
