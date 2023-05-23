import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Zootiere';
  animals: Animal[] = [
    {
      name: 'Jürgen',
      type: 'Affe',
    },
    {
      name: 'Tina',
      type: 'Schildkröte',
    },
    {
      name: 'Tim',
      type: 'Schnabeltier',
    },
    {
      name: 'Luise',
      type: 'Zebra',
    },
  ];

  newAnimal: Animal = {
    name: 'New Name',
    type: 'New Type',
  };

  addAnimal() {
    this.animals.push(this.newAnimal);
  }

  deleteAnimal(animal: Animal): void {
    this.animals = this.animals.filter((a) => a != animal);
  }
}
