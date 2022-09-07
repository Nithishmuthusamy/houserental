import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class CardviewComponent extends Component {
  @service store;
  @service router;

  @action
  delete(detail) {
    console.log(detail);
    console.log('in to the delete process');
    console.log(detail.id);
    try {
      this.store.unloadRecord(detail);
      this.router.transitionTo('index');
    } catch {
      console.log('fdghj');
    }
  }
  @action
  detailbutton(detail) {
    console.log('entered');
    this.router.transitionTo('index.details', detail);
  }
  @action
  bookbutton(id) {
    console.log('entered');
    this.router.transitionTo('index.book', id);
  }
}
