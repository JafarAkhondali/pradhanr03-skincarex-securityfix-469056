App.Collections.Sunscreens = Backbone.Collection.extend({
    url: "/categoriesprod/2",
    model: App.Models.Category,
    initialize: function() {
        console.log('category collection created');
    }
});
