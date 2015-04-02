JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts_index"],

  initialize: function(options) {
    this.listenTo(this.collection, "remove sync add", this.render);
    this.selectedPostId = options.selectedPostId;
  },

  render: function () {
    this.$el.html(this.template());
    this.collection.each(function(post) {
      var postView = new JournalApp.Views.PostsIndexItem({
        model: post,
        selectedPostId: this.selectedPostId
      });
      this.$('ul').append(postView.render().$el);
    }.bind(this));
    return this;
  }
});
