JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    'click .back': 'navigateBack',
    'click h3': 'editTitle',
    'click .body': 'editBody',
    'blur .title': 'saveTitle',
    'blur .edit-body': 'saveBody'
  },

  template: JST["post_show"],

  render: function (model, resp, options) {
    if(options && options.no)  { return; }
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  navigateBack: function () {
    window.history.back();
  },

  editTitle: function () {
    var $textBox = $('<input type="text" class="title">');
    $textBox.val(this.model.get('title'));
    this.$('h3').replaceWith($textBox);
    // $textBox.focus();
  },

  editBody: function () {
    var $textBox = $('<textarea class="edit-body">');
    $textBox.val(this.model.get('body'));
    this.$('.body').replaceWith($textBox);
    // $textBox.focus();
  },

  saveTitle: function (event) {
    var $title = $(event.currentTarget);
    this.model.save({title: $title.val()}, { no: true });
    $title.replaceWith($('<h3>').html(this.model.escape('title')));
  },

  saveBody: function (event) {
    var $body = $(event.currentTarget);
    this.model.save({body: $body.val()}, { no: true });
    $body.replaceWith($('<div class="body">').html(this.model.escape('body')));
  }
});
