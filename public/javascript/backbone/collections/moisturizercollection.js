App.Collections.Moisturizers = Backbone.Collection.extend({
    url: "/categoriesprod/3",
    model: App.Models.Category,
    initialize: function() {
        console.log('category collection created');
    }
});
