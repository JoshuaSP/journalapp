JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  template: JST["posts_index_item"],
  tagName: 'li',
  className: 'list-group-item',
  initialize: function (options) {
    this.selectedPostId = options.selectedPostId;
  },

  events: {
    'click button': 'deleteItem',
    'click .title': 'navigateToShow'
  },

  render: function() {
    this.$el.html(this.template({item: this.model}));
    if(this.selectedPostId == this.model.id) { this.$el.addClass("selected"); }
    return this;
  },

  deleteItem: function() {
    this.model.destroy();
    this.remove();
    if(this.selectedPostId == this.model.id) { $('.post-container').empty(); }
  },

  navigateToShow: function() {
    Backbone.history.navigate('posts/' + this.model.id, {trigger: true});
  }

});
