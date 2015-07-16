// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  model: SongModel, 
  initialize: function(){
    
    this.on('enqueue', function(){
      
    }, this);

    this.on('delete', function(song){
      this.remove(song);
    }, this);
    // console.log('test');
    // this.model.on('change:queued', function(){
    //   console.log('change detection works!');
    // }, this); //this is songModel
   // this.model.on('change:votes', function(){}, this);

  }


});