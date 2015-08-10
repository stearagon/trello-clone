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

  show: function(id){
    var board = this.boards.getOrFetch(id);
    var showView = new TrelloClone.Views.ShowView({ model: board })

    this.swapView(showView);
  },

  swapView: function(view){
    this.currentView && this.currentView.remove();

    this.currentView = view;

    this.$rootEl.html(view.render().$el)
  }
})
