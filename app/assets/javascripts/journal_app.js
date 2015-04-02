window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new JournalApp.Routers.PostsRouter({$rootEl: $('.journal-app')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
