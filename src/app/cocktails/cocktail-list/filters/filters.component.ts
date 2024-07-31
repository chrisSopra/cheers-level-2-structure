import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Output() filterTerm: EventEmitter<string> = new EventEmitter<string>();

  filter(value: string) {
    this.filterTerm.emit(value);
  }
}
