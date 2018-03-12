import { Component, ContentChildren, Directive, ElementRef, Input, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  style,
  animate,
  transition,
  stagger,
  query,
  state
} from '@angular/animations';

interface IItem {
  id: string,
  counter: number,
  name: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query('.clickCounter', style({ transform: 'translateX(-200%)' })),
        query('.clickCounter',
          stagger('200ms', [
            animate('400ms', style({ transform: 'translateX(0)' }))
          ]))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Color Picker';
  items: IItem[] = [
    { id: 'one', counter: 0, name: 'Blue' },
    { id: 'two', counter: 0, name: 'Olive' },
    { id: 'three', counter: 0, name: "Lime" },
    { id: 'four', counter: 0, name: "Purple" },
    { id: 'five', counter: 0, name: "Khaki" },
    { id: 'six', counter: 0, name: "Rose" },
    { id: 'seven', counter: 0, name: "Peach" },
    { id: 'eight', counter: 0, name: "Orchid" },
    { id: 'nine', counter: 0, name: "Teal" },
    { id: 'ten', counter: 0, name: "Aqua" }
  ];

  /**
   * Find clicked item by item id and increase counter and call function to sort items list
   * @param itemId - id of the clicked item
   */
  increaseCounter(itemId: string) {
    this.items.find((item) => item.id === itemId).counter++;
    setTimeout(() => {
      this.items.sort((a, b) => {
        return a.counter < b.counter ? 1 : -1;
      });
    }, 1000);
  }
  /**
   * Set class names dynamically with item id as defferintiator
   * @param itemId - id of curent item used as defferintiator
   */
  setClasses(itemId: string) {
    return [`clickCounter--${itemId}`];
  }

  /**
   * When collection changes, Angular can track which items have been added or removed 
   * according to the unique identifier and create or destroy only the things that changed
   * @param index 
   * @param item 
   */
  trackByFn(index: number, item: IItem) {
    return item.id;
  }
}


