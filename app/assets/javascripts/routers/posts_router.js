JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$index = this.$rootEl.find('.index-container');
    this.$post = this.$rootEl.find('.post-container');
    this.posts = new JournalApp.Collections.Posts();
    this.selectedPostId = 0;
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show"
  },

  index: function () {
    this.posts.fetch();
    var indexView = new JournalApp.Views.PostsIndex({
      collection: this.posts,
      selectedPostId: this.selectedPostId
    });
    this.$index.html(indexView.render().$el);
  },

  show: function (id) {
    this.selectedPostId = id;
    this.index();
    var post = this.posts.getOrFetch(id);
    var postView = new JournalApp.Views.PostShow({model: post});
    this.$post.html(postView.render().$el);
  },

  new: function () {
    this.selectedPostId = 0;
    this.index();
    var post = new JournalApp.Models.Post();
    var postFormView = new JournalApp.Views.PostForm({
      model: post,
      collection: this.posts
    });
    this.$post.html(postFormView.render().$el);
  },
});
