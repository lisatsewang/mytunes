// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.on('enqueue', function(){

    // }, this);
    // this.model.on('change:queued', function(){
    //   console.log('song played');
    // });
    this.on('endSong', function(song){ //detect song ended 
      this.remove(song);
      this.playFirst();
    }, this);
  }, 
  playFirst: function(){
    this.trigger('PlayFirst', this);
  } //initialize()

});