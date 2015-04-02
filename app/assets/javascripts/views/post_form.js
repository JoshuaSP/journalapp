JournalApp.Views.PostForm = Backbone.View.extend ({
  template: JST['post_form'],
  tagName: 'form',
  className: 'input-group',

  events: {
    'click button': 'createOrUpdate'
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  createOrUpdate: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    var editing = !!this.model.id;
    this.model.save(data, {
      success: function () {
        if (!editing) {
          this.collection.add(this.model);
          Backbone.history.navigate('#posts/' + this.model.id, {trigger: true});
        }
      }.bind(this)
    });
    if (editing) {
      Backbone.history.navigate('#posts/' + this.model.id, {trigger: true});
    }
  }
});
