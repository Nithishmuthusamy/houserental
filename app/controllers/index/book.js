import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class IndexBookController extends Controller {
  @service('form-details') bookingdetails;
  @tracked
  number;
  @tracked
  fullname;
  @tracked
  email;
  @tracked
  phonenumber;
  @tracked
  tablenumber = 0;
  @service router;
  next() {
    this.router.transitionTo('index');
  }
  @action
  submit(event) {
    event.preventDefault();
    this.bookingdetails.addDetails(
      this.number,
      this.fullname,
      this.email,
      this.phonenumber,
      ++this.tablenumber
    );
    this.next();
  }
}
