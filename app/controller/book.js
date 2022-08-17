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
  // @action
  // create(event) {
  //   event.preventDefault();
  //   console.log('this is controller');
  //   this.next();
  //   console.log('going in controller');
  //   this.formDetail.addDetails(
  //     this.number,
  //     this.place,
  //     this.no_of_guest,
  //     this.rating,
  //     this.rent,
  //     this.src
  //   );
  //   ++this.number;
  // }
  @service router;
  next() {
    this.router.transitionTo('index');
  }
  //   forms = document.getElementsByClassName('needs-validation')

  // for(this.forms in form){
  // form.addEventListener( 'submit' , event => {
  //   if (!form.checkValidity()) {
  //     event.preventDefault()
  //     event.stopPropagation()
  //   }

  //   form.classList.add('was-validated')
  // })
  // }
  @action
  submit(event) {
    event.preventDefault();
    this.next();
  }
}
