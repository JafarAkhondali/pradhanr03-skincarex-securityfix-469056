App.Views.CategoryView = Backbone.View.extend({
    initialize: function() {
        console.log('single category view created');
        this.template = Handlebars.compile($('#page-template').html());
        this.listenTo(this.model, 'change', this.renderUpdate);
        this.render();
    },
    render: function() {
        this.$el.append(this.template(this.model.toJSON()));
        this.$el.attr('class', 'item');
    },
    renderUpdate: function() {
        console.log('render updated category model')
        this.$el.html(this.template(this.model.toJSON()));
    }
});
