import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VehicleListComponent } from '@features/vehicles/components/vehicle-list/vehicle-list.component';

@Component({
  selector: 'app-vehicle-layout',
  imports: [VehicleListComponent],
  templateUrl: './vehicle-layout.component.html',
  styleUrl: './vehicle-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VehicleLayoutComponent {}
