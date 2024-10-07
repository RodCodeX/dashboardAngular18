import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  //?Comunicar del padre al hijo  INPUT
  // @Input({required:true}) product!: Product

  //? Otra alternativa igual que el @Input
  product = input.required<Product>();

  //? OUTPUT anteriormente
  // @Output() onIncrementQuantity = new EventEmitter<number>();

  //? OUTPUT Nuevo
  onIncrementQuantity = output<number>();

  incrementQuantity():void{
    this.onIncrementQuantity.emit(this.product().quantity +1)
  }

  public loginEffect = effect(() => {
    console.log(this.product().name);
  });
}
