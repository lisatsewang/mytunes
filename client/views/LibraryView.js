// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table class='library'",

  initialize: function() {
    this.render();

    this.collection.on('songEnd', this.render, this);
     // this.collection.on('change', function(){
     //  console.log('changed');
     // }, this); //testing
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  } //render()

});
