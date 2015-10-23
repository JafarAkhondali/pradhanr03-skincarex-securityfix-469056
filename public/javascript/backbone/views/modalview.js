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
        var template = Handlebars.compile($('#added-popup').html()); //popup template that displays" item added to cart " when clicked on add to cart button
        $('#modal').prepend(template()); //prepend allows the popup template to be appended on the top of the modal div instead of the bottom of the modal div
        $("#popup").delay(1000).fadeOut("slow", function() { //this functions gives the #popup div a animation effect where it slowly fades out after 1000ms and removes itself from it's parent modal div 
            $(this).remove();
        });
        var productId = this.model; //Assigning the object model into a new variable called productId
        var cart = {
            id: productId.id,
            title: productId.title,
            price: productId.price,
            quantity: 1
        }

        var jsonStr = JSON.stringify(cart); //Stringifying the JSON object
        sessionStorage.setItem(counter, jsonStr); //Storing the stringified JSON object in sessionStorage as a value. Counter is stored as a key.
        counter = counter + 1; //incrementing counter so that jsonStr's value doesn't get replaced when addToCart function is called again

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
