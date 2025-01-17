import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-brand-detail',
  imports: [],
  templateUrl: './brand-detail.component.html',
  styleUrl: './brand-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BrandDetailComponent {}
