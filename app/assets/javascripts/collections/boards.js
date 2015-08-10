TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "api/boards",
  model: TrelloClone.Models.Board,
  getOrFetch: function(id){
    var model = this.get(id);

    if (model) {
      model.fetch();
    } else {
      model = new that.model( { id: id } );
      model.fetch( success: function(){
        that.add(model { merge: true });      
      })
    }

    return model;
  }
})
