import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  imports: [],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleListComponent {

}
