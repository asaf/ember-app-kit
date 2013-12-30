var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('admin', function() {
      this.resource('admin.post', {
        path: '/posts'
      }, function() {
        this.route('index', {
          path: ''
        }, function() {});
      });
  }
  // this.resource('posts', function() {
  //   this.route('new');
  // });
)});

export default Router;
