// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    // note: If queue is empty, play song
    // var queue = app.get('songQueue');

      this.trigger('play', this); 
    // if (queue.length === 0) {
    // }

    // note: enqueue - add song to queue
    // this.enqueue();
  }, 
  enqueue: function(){
    // debugger
    // window.app.get('songQueue').add(this);
    // add current song to SongQueue (collection)

  } //enqueue()
}); //SongModel
