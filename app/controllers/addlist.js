import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class AddlistController extends Controller {
  //@service('form-details') formDetail;
  @service store;
  @tracked
  number = 4;
  @tracked
  place = 'New Delhi';
  @tracked
  no_of_guest = 1;
  @tracked
  rating = 5;
  @tracked
  rent = 100;
  @tracked
  src;
  @tracked
  description;
  @service router;
  next() {
    this.router.transitionTo('index');
  }
  @action
  create(event) {
    event.preventDefault();
    this.store.push({
      data: [
        {
          id: this.number,
          type: 'house',
          attributes: {
            src: this.src,
            number: this.number,
            place: this.place,
            noofguest: this.no_of_guest,
            rating: this.rating,
            rent: '₹' + this.rent,
            description: this.description,
          },
        },
      ],
    });
    this.number++;
    this.next();
  }
}
