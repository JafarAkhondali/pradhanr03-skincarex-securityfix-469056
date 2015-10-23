App.Models.Category = Backbone.Model.extend({
    urlRoot: function() {
        return "/categoriesprod/" + this.id;
    },
    tagName: 'div',
    initialize: function() {
        console.log('category model created');
    }
});
