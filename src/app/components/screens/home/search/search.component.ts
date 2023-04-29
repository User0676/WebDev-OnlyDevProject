import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() findFoods = new EventEmitter<{ searchTerm: string }>()
  searchTerm = ''

  handleSearch(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.findFoods.emit({ searchTerm: this.searchTerm })
    }
  }
}
