TrelloClone.Views.BoardNew = Backbone.CompositeView.extend ({
  template: JST['boards/new'],
  tagName: "form",
  events: {
    "click button" : "submit"
  },
  className: "board-form",
  render: function(){
    var content = this.template({ board: this.model });

    this.$el.html(content);


    return this;
  },

  submit: function(event){
    event.preventDefault();
    var that = this;

    var attrs = this.$el.serializeJSON();

    this.model.set(attrs);

    this.model.save({}, {
      success: function(){
        that.collection.add(that.model, { merge: true })
        $("board-form").remove();
      },
      error: function(model, response, options){
        $(".errors").html("");
        response.responseJSON.forEach(function(error){
          $(".errors").append("<li>" + error + "</li>")
        });
      }
    })

  }
})
