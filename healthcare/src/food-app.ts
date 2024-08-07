class Score {}
class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    this.element.classList.toggle('food--active');
  }
}
class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach((element) => {
      if (element.classList.contains('food--active')) {
        this._activeElements.push(element);
      }
    });
    return this._activeElements;
  }
  get activeElementsScore() {
    this._activeElements = [];
    this.activeElements.forEach((element) => {});
  }
  constructor() {
    this.elements.forEach((element) => {
      new Food(element);
    });
  }
}
const foods = new Foods();
