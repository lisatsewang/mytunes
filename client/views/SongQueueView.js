// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table class='songQueue'",

  initialize: function() {
    this.render();

    //re-renders the QueueView when songQueue collection has been changed
    this.collection.on('add', this.render, this); 

    this.collection.on('remove', this.render, this); //remove song from webpage when song is removed from queue collection

  },

  render: function() {
    //this.$el.children().detach();
    console.log("SongQueueView render", this.$el)
    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );


    //return this.$el;
  }

});
