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

  swapView: function(newView){
    this.currentView && this.currentView.remove();

    this.currentView = newView;

    this.$rootEl.html(newView.render().$el)
  }
})