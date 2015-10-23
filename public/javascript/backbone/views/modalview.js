App.Views.Modal = Backbone.View.extend({
    el: '#modal',
    initialize: function() {
        console.log('modal created');
        this.template = Handlebars.compile($('#modal-template').html());
        this.showModal();
    },
    render: function() {
        $('#modal').empty();
        console.log(this.model);
        $('#modal').append(this.template(this.model));
    },
    showModal: function() {
        this.render();
        this.$el.fadeIn(100);
    },
    events: {
        'click .close': 'returnBack',
        'click .submit-comment': 'showComments',
        'click .add': 'addToCart'
    },
    addToCart: function() {
        console.log('product added to cart');
        var template = Handlebars.compile($('#added-popup').html());
        $('#modal').prepend(template());
        $("#popup").delay(1000).fadeOut("slow", function() {
            $(this).remove();
        });
        var productId = this.model.id;
        $.ajax({
            url: '/products/' + productId,
            type: 'GET',
            success: function(data) {
                var cart = {
                    id: data.product.id,
                    title: data.product.title,
                    price: data.product.price,
                    quantity: 1
                }
                var jsonStr = JSON.stringify(cart);
                sessionStorage.setItem(counter, jsonStr);
                counter = counter + 1;
            }
        });
    },
    returnBack: function() {
        this.$el.empty();
        this.$el.fadeOut(100);
        this.undelegateEvents();
        this.stopListening();
    },
    showComments: function() {
        console.log('show my comments bro!');
    }
});
