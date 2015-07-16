// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    queued:false
  }, 
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
    // this.set('queued',true)
    this.trigger('enqueue', this);
    // console.log();
    // debugger
    // window.app.get('songQueue').add(this);
    // add current song to SongQueue (collection)

  }, //enqueue()
  dequeue: function(){
    this.set('queued',false)
    // debugger
    // window.app.get('songQueue').add(this);
    // add current song to SongQueue (collection)

  }, //enqueue()
  delete: function(){
    this.trigger('delete', this);
    // debugger
    // window.app.get('songQueue').add(this);
    // add current song to SongQueue (collection)

  } //dequeue()
}); //SongModel
