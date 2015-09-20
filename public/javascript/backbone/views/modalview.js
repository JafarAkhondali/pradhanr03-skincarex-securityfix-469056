App.Views.Modal = Backbone.View.extend({
    el: '#modal',

    initialize: function() {
        console.log('modal created');
        this.template = Handlebars.compile($('#modal-template').html());
        // this.listenTo(this.model, 'change', this.showUpdatedModal);
        // this.listenTo(this.collection, 'reset', this.showModal());


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
    // showUpdatedModal: function () {
    // 	console.log('render updated modal')
    // 	$('#modal').html(this.template(this.model));
    // },
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
        var productId = this.model.id; //probably this because it says this.model

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
        // $('.comment-box').val('');
        // $('.seeker').val('')
        console.log('show my comments bro!');
        // var id = $('.textbox').val();


        // $.ajax({
        //     type: 'GET',
        //     url: '/sessions/new',
        //     success: function(data) {
        //         if (data) {
        //               $.ajax({
        //                  type: 'GET',
        //                  url: 'seekers/'+ data,
        //                   success: function(data1) {

        //                       console.log(data1);

        //                 var comment = $('[name=comment]').val();
        //                 var data2 = {
        //                     description: $('[name=comment]').val(),
        //                     victim_id: id,
        //                     seeker_id: data,
        //                     seeker_name: data1[0].name                    
        //                        }

        //                     var tag = $('<div>').html(comment).addClass('comment-box');
        //                     var seekername = $('<div>').html(data1[0].name).addClass('seeker');
        //                         var box = $('<div>').addClass('comment-with-name');

        //                     box.append(seekername);
        //                     box.append(tag);

        //                     $('#comment-list').append(box);

        //                     App.comments = new App.Collections.Comments();
        //                      $('.textbox').val('');
        //                     App.comments.create(data2);
        //                   }
        //             });
        //         }
        //             else {
        //                 var comment = $('[name=comment]').val();
        //                 var data2 = {
        //                     description: $('[name=comment]').val(),
        //                     victim_id: id    
        //                        }
        //                     var box = $('<div>').addClass('comment-with-name');
        //                     var tag = $('<div>').html(comment).addClass('comment-box');
        //                     box.append(tag);
        //                     $('#comment-list').append(box);


        //                     App.comments = new App.Collections.Comments();
        //                     $('.textbox').val('');
        //                     App.comments.create(data2);
        //               }
        //     }

        // });    

    }
});
