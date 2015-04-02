JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: 'posts',
  model: JournalApp.Models.Post,

  getOrFetch: function (id) {
    var post = this.get(id) || new this.model({id: id});
    post.fetch();
    return post;
  }
});
