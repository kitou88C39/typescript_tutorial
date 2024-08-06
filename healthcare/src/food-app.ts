class Score {}
class Food {
  constructor(public element: HTMLDivElement) {}
}
class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  constructor() {
    this.elements.forEach((elements) => {});
  }
}
const foods = new Foods();
