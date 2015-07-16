// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    // var songQueue = new SongQueue();
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());


    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    var SongCollection = params.library;
    var QueueCollection = this.get('songQueue');

    SongCollection.on('enqueue', function(song){
      this.get('songQueue').add(song); //refactored to Songs.js
    }, this);

    QueueCollection.on('songEnd', function(song){
      // var nextSong = queue.playFirst();
      // console.log('song ended in APPMODEL');
      // debugger
      // var queue = this.collection;
      var queue = this.get('songQueue');
      queue.remove(song);
      queue.playFirst();
      // song.ended();
      
      // this.get('songQueue').add(song); //refactored to Songs.js
    }, this);

    QueueCollection.on('PlayFirst', function(){
      var queue = this.get('songQueue');
      // console.log('Inside of PlayFirst');
      var nextSong = queue.at(0);
      this.set('currentSong', nextSong);

    }, this);

    params.library.on('play', function(song){ //params = {library:library} = Songs (collection)
      if(this.get('songQueue').length===0){
         this.set('currentSong', song);
      } //if
    }, this);
  }

});
