App.Views.CleanserView = Backbone.View.extend({
    el: '#page',
    initialize: function() {
        console.log(' cleanser view created');
        console.log(this.collection);
        this.listenTo(this.collection, 'reset', this.renderAll)
        this.template = Handlebars.compile($('#page-template').html());
    },
    renderAll: function() {
        this.$el.empty();
        this.collection.each(this.renderOne, this)
    },
    renderOne: function(product) {
        console.log('hello product');
        console.log(product.toJSON());
        var viewthis = new App.Views.ProductView({
            model: product
        });
        this.$el.append(viewthis.render());
        this.$el.attr('class', 'item-list');
    }
});
