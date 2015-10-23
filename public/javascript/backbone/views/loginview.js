App.Views.Login = Backbone.View.extend({
    el: '#page',
    initialize: function() {
        console.log('log in page loaded');
        this.template = Handlebars.compile($('#login-template').html());
        this.render();
    },
    render: function() {
        $('#page-table').empty();
        this.$el.empty();
        this.$el.append(this.template());
    },
    events: {
        'click #login-button': 'loginCustomer'
    },
    loginCustomer: function() {
        console.log('login button submit clicked');
        var data = {
            email: $('[name=email]').val(),
            password: $('[name=password]').val()
        };

        $.ajax({
            type: "POST",
            url: '/sessions',
            data: data,
            success: function() {
                App.signlog = new App.Views.Signlog({
                    collection: App.customers
                });

                var template = Handlebars.compile($('#home-template').html());
                $('#page').empty();
                $('#page').append(template);
            },
            fail: function() {}
        });
        console.log('logged in man!');
        console.log(data);
    }
})
