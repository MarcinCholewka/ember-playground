import EmberRouter from '@ember/routing/router';
import config from 'workshop/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('playground');
  this.route('list');
});
