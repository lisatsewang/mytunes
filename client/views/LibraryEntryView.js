// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // debugger
      // console.log(app);
      this.model.play(); //this.model = a song
      // debugger
      //this.model.enqueue(); // add this song to the queue
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
