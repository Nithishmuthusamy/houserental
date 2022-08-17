import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
export default class IndexBookController extends Controller {
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
  @service router;
  next() {
    this.router.transitionTo('index');
  }
  @action
  submit(event) {
    event.preventDefault();
    this.next();
  }
}
