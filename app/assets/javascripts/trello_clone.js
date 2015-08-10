window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var $rootEl = $("#main");
    this.boards = new TrelloClone.Collections.Boards();

    this.router = new TrelloClone.Routers.Router({
      $rootEl: $rootEl,
      boards: this.boards
    })

    Backbone.history.start();
  }
};
