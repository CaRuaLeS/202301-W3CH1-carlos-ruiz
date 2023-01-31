/* eslint-disable no-unused-vars */
import { Component, InsertPosition } from '../component/component';

export class Container extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <ul class="characters-list row list-unstyled">
      </ul>
    `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
