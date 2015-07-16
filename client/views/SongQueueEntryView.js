// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // debugger
      // console.log(app);
      //this.model.play(); //this.model = a song
      //this.model.enqueue(); // add this song to the queue
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
