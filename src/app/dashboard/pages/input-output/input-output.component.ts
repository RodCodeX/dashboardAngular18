import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '@interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy{
  products = signal<Product[]>([
    {
      id: 1,
      name: 'Producto 1',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Producto 2',
      quantity: 2,
    },
  ]);

  private intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            quantity: 0,
          },
        ]);
      }),
      take(7) //?Solo hacer 7 subscriptions
    )
    .subscribe();

    ngOnDestroy(): void {
      this.intervalSubscription.unsubscribe();
    }

    updateProduct(product: Product, quantity: number) {
      this.products.update((products) =>
        products.map((p) => (p.id === product.id ? { ...p, quantity } : p))
      );
    }
}
