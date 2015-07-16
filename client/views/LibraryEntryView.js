// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td> <td>[<%= playCount %> plays]</td>'),
  initialize: function(){
     this.model.on('change:queued', function(){

      // console.log('testing');
     }, this);
  },
  events: {
    'click': function() {
      // this.model.delete();

      //this.model.play(); //this.model = a song
      this.model.play();
      this.model.enqueue();
      
      // if (this.model)
      // this.model.dequeue();

      // if(this.model.get('queued')){ //set to false
      //   this.model.dequeue();

      // }else{
      //   this.model.enqueue();
      
      // }
      // debugger
      //this.model.enqueue(); // add this song to the queue
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
