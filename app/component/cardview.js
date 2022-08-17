import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class CardviewComponent extends Component {
  @service store;
  @service router;
  // @action
  // delete() {
  //   console.log('deleted');
  //   let post = this.store.peekRecord('house', '1');
  //   console.log(post);
  //   post.destroyRecord();
  //   post.isDeleted; // => true
  //   post.save();
  // }

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
    // let child = document.getElementsByClassName('child_class')[0];
    // child.setAttribute('style', 'display:block');
    // child.setAttribute('class', 'mt-5 child_class');
    this.router.transitionTo('index.details', id);
  }
  @action
  bookbutton(id) {
    console.log('entered');
    // let child = document.getElementsByClassName('child_class')[0];
    // child.setAttribute('class', 'w-60 d-block mt-5 child_class');
    this.router.transitionTo('index.book', id);
  }
}
