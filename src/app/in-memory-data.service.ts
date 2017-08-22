import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryWebApiModule {
  createDb() {
    const aninmals = [
      { id: 1, name: 'flopwop' },
      { id: 2, name: 'slippery tube dude' },
      { id: 3, name: 'fuckingf STUP1d idiot' },
      { id: 4, name: 'common doggo' },
      { id: 5, name: '✨special doggo✨' },
      { id: 6, name: 'vengeance' },
      { id: 7, name: 'water flippers'},
      { id: 8, name: 'fregs'},
      { id: 9, name: 'Snip snap doggers'},
      { id: 10, name: 'woof Bork doggo'},
      { id: 11, name: 'puppper'},
      { id: 12, name: 'floof'},
      { id: 13, name: 'flying flippity flap'},
      { id: 14, name: 'shell house snip-snap'},
      { id: 15, name: 'common blub blubs'}
    ];
    return {aninmals};
  }
}
