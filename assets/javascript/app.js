var low = $('#low');
var med = $('#med');
var high = $('#high');
var extra = $('#extra');

var itemObj = [
    {
        category: low,
        
    }
]

var funcs = {
    cardGen: function() {
        var newCard = $('<div>');
        newCard.addClass('card border-primary text-center mb-3');

        var newHeader = $('<h3>');
        newHeader.addClass('card-header');
        newHeader.attr('id', 'header');

        var newBody = $('<div>');
        newBody.addClass('card-body');

        var newPrice = $('<h5>');
        newPrice.addClass('card-title');
        newPrice.attr('id', 'price');

        var newDetails = $('<h6>');
        newDetails.addClass('card-subtitle text-muted');
        newDetails.attr('id', 'details');
    }
}