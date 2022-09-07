import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class IndexDetailsRoute extends Route {
  @service store;
  model(params) {
    let userid = params.details_id;
    return this.store.peekRecord('house', userid);
  }
}
