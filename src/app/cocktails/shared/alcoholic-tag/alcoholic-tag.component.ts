import {Component, Input} from '@angular/core';
import {BoolChipDirective} from "../../../shared/bool-chip.directive";

@Component({
  selector: 'app-alcoholic-tag',
  standalone: true,
  imports: [
    BoolChipDirective
  ],
  templateUrl: './alcoholic-tag.component.html',
  styleUrl: './alcoholic-tag.component.scss'
})
export class AlcoholicTagComponent {
  @Input({required: true}) isAlcoholic: boolean;

  readonly truthyColor = "#5E81AC";
  readonly falsyColor = "#A3BE8C";
}
