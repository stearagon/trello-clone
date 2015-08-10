TrelloClone.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.boards = options.boards;
  },

  routes: {
    "" : "index"
  },

  index: function(){
    this.boards.fetch();

    var indexView = new TrelloClone.Views.BoardsIndex({ collection: this.boards });

    this.swapView(indexView);
  },

  new: function(){
    var board = new TrelloClone.Models.Board();

    var newView = new TrelloClone.Views.BoardNew({ model: board });

    this.swapView(newView);
  },

  swapView: function(view){
    this.currentView && this.currentView.remove();

    this.currentView = view;

    this.$rootEl.html(view.render().$el)
  }
})
