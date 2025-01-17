import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrandListComponent } from '../brand-list/brand-list.component';

@Component({
  selector: 'app-brand-layout',
  imports: [BrandListComponent],
  templateUrl: './brand-layout.component.html',
  styleUrl: './brand-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BrandLayoutComponent {}
