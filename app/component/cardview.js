import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class CardviewComponent extends Component {
  @service store;
  @service router;

  @action
  delete(detail) {
    console.log(detail);
    try {
      console.log('in to the delete process');
      console.log(detail.id);
      let post = this.store.peekRecord('house', detail.id);
      console.log('deleted');
      post.destroyRecord();
    } catch (error) {
      console.log('not deleted');
    }
  }
  @action
  detailbutton(id) {
    console.log('entered');
    this.router.transitionTo('index.details', id);
  }
  @action
  bookbutton(id) {
    console.log('entered');
    this.router.transitionTo('index.book', id);
  }
}
