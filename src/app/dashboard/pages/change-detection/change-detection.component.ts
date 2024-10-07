import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

/**
 * La propiedad changeDetection: ChangeDetectionStrategy.OnPush en 
 * Angular configura la estrategia de detección de cambios para un componente. 
 * Angular tiene dos estrategias principales para detectar cambios: Default y OnPush
 */
@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` 
    <app-title [title]=currentFramework()></app-title> 
    <pre>{{frameworkAsSignal() | json}}</pre>
    <pre>{{frameworkAsProperty | json}}</pre>

    `,
})
export default class ChangeDetectionComponent {
  
  currentFramework= computed (
    () => `Change detection - ${this.frameworkAsSignal().name}`













    
  )

  frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor(){
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React'
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React',
      }))
      console.log("HECHO 2");
    }, 3000);
  }
}
