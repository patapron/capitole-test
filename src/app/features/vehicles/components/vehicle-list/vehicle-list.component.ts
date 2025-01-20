import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { VehicleStore } from '@core/store/vehicle/vehicle.store';

@Component({
  selector: 'app-vehicle-list',
  imports: [MatListModule, MatIconModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleListComponent {
  route = inject(ActivatedRoute);
  vehicleStore = inject(VehicleStore);
  vehicles = this.vehicleStore.vehicles;
  public brandId: string | null = null;

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.brandId = params.get('id');
      if (this.brandId) {
        this.vehicleStore.loadVehicles(this.brandId);
      }
    });
  }
}
