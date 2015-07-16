// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')}); //LibraryView is using "Songs" as collection
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')}); //LibraryView is using "Songs" as collection

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
      // console.log('testing:',this.songQueueView.$el);
      // this.render();
      // debugger
    }, this);

    // this.model.on('change:songQueue.length', function(model){
    //   console.log('here');
    // }, this);
    
    //triggers when songQueue has changed
    // this.listenTo(this.model.get('songQueue'), 'add remove reset', this.render);


  }, //initialize()

  render: function(){ //render everything onto page
    return this.$el.html([ // this.$el = $('body')
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  } //render()

});
