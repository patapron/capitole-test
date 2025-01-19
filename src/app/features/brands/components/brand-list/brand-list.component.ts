import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { Brand } from '@features/brands/models/brand.model';
import { BrandStore } from 'app/core/store/brand/brand.store';
@Component({
  selector: 'app-brand-list',
  imports: [MatListModule, MatIconModule],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandListComponent {
  brandStore = inject(BrandStore);
  router = inject(Router);
  brands = this.brandStore.brands;
  itemsToShow = signal<number>(15);

  visibleBrands = computed(() => {
    return this.brands().slice(0, this.itemsToShow());
  });

  ngOnInit() {
    this.brandStore.loadBrands();
    this.loadMoreBrands();
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;

    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 10) {
      console.log('carga mas', event);
      this.loadMoreBrands();
    }
  }

  loadMoreBrands() {
    this.itemsToShow.set(this.itemsToShow() + 15);
  }

  onClick(brand: Brand) {
    this.router.navigate(['/brand', brand.id]);
  }
}
