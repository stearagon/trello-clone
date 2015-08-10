TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST["boards/index"],

  events: {
    "click .add-board" : "newBoard"
  },

  initialize: function(){
    this.listenTo(this.collection,"sync add",this.render);
  },

  render: function(){
    var content = this.template({ boards: this.collection });

    this.$el.html(content);

    return this;
  },

  newBoard: function(){
    event.preventDefault();
    var board = new TrelloClone.Models.Board();
    var newView = new TrelloClone.Views.BoardNew({ model: board, collection: this.collection });

    this.$el.append(newView.render().$el)
  }
})
