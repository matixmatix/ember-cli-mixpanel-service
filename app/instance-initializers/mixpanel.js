import Config from '../config/environment';

export function initialize(instance) {
  if (Config.mixpanel.enabled) {
    var router = instance.container.lookup('router:main');
    if (Config.mixpanel.automatic_pageview_tracking == undefined || Config.mixpanel.automatic_pageview_tracking) {
      router.on('didTransition', function() {
        instance.container.lookup('service:mixpanel').trackPageView(this.get('url'));
      });
    }
  }
}

export default {
  name: 'mixpanel',
  initialize: initialize
};
