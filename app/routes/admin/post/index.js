export default Ember.Route.extend({
  model: function(params) {
      alert('filter in model hook: ' + params.filter);
  },

  actions: {
      queryParamsDidChange: function() {
        this.refresh();
      }
  }
});
