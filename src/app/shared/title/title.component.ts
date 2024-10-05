import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  styleUrl: './title.component.css',
  template: ` 
    <!-- <h1 class="text-3xl font-bold mb-5">{{title}} - {{withShadow}}</h1> -->
    <h1 class="text-3xl font-bold mb-5">{{title}}</h1>
  `,
})
export class TitleComponent {

  /**
   * El valor del input hace que sea requerido
   */
  @Input({required: true}) title!:string;


  /**
   * El {transform: booleanAttribute} }
   * es una opción que convierte automáticamente 
   * cualquier valor que se pase a 
   * esta propiedad en un valor booleano
   */
  @Input({transform: booleanAttribute }) withShadow:boolean = false;
}
