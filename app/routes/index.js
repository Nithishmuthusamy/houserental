import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class IndexRoute extends Route {
  @service store;
  @tracked
  number = 1;
  async model() {
    console.log('three');
    if (this.number === 1) {
      this.number++;
      return this.store.findAll('house');
    }
    return this.store.peekAll('house');
  }
}
