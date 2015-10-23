App.Views.ProductView = Backbone.View.extend({
    tagName: 'div',
    initialize: function() {
        console.log('single product view created');
        this.template = Handlebars.compile($('#single-product-template').html());
    },
    render: function() {
        this.$el.empty(); //added this
        return this.$el.append(this.template(this.model.toJSON()));
    },
    events: {
        'click': 'showModal'
    },
    showModal: function() {
        console.log('workk', this.model.toJSON());
        var data = this.model.toJSON();
        console.log(data);
        var modal = new App.Views.Modal({
            model: data
        });
    }
});
