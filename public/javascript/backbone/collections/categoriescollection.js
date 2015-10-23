App.Collections.Categories = Backbone.Collection.extend({
    url: "/categoriesprod/1",
    model: App.Models.Category,
    initialize: function() {
        console.log('category collection created');
    }
});
