// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('enqueue', function(){
      console.log("Crazy good 222222!");
    }, this);
    // this.model.on('change:queued', function(){
    //   console.log('song played');
    // });

  } //initialize()

});