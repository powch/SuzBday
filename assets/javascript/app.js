var low = $('#low');
var med = $('#med');
var high = $('#high');
var extra = $('#extra');

var itemObj = [
    {
        category: 'low',
        header: 'Envelope Card Wallet',
        price: '$5',
        title: 'Silver Metallic Color',
        img: 'https://oldnavy.gap.com/webcontent/0015/692/785/cn15692785.jpg',
        url: 'https://oldnavy.gap.com/browse/product.do?pid=291253062&vid=1&pwa=true'
    },
    {
        category: 'high',
        header: 'Vans Slip-ons',
        price: '$60',
        title: 'Sand Dollar color\nSize 8',
        img: 'https://images.vans.com/is/image/Vans/8F7U7I-HERO?$583x583$',
        url: 'https://www.vans.com/shop/lurex-gore-slip-on-sand-dollar#hero=0'
    },
    {
        category: 'med',
        header: 'Swingpack Bag',
        price: '$30',
        title: 'New Cognac color',
        img: 'https://oldnavy.gap.com/webcontent/0013/762/242/cn13762242.jpg',
        url: 'https://oldnavy.gap.com/browse/product.do?pid=775576012&cid=1051885&pcid=1051887&vid=1&pwa=true'
    },
    {
        category: 'extra',
        header: 'DevaDryer and Defuser',
        price: '$160',
        title: 'Dryer for curly-ass hair',
        img: 'https://scdn.devacurl.com/media/product/057/devadryer-and-devafuser-34a.png',
        url: 'https://www.devacurl.com/devadryer-and-devafuser.html'
    }
]

var funcs = {
    cardGen: function() {
        itemObj.forEach(function(obj) {
            console.log(obj);
            var newCard = $('<div>');
            newCard.addClass('card border-primary text-center mb-3');
            newCard.attr('onclick', `window.open('${obj.url}', 'mywindow');`);

            var newHeader = $('<h3>');
            newHeader.addClass('card-header');
            newHeader.attr('id', 'header');
            newHeader.text(obj.header);

            var newBody = $('<div>');
            newBody.addClass('card-body');

            var newPrice = $('<h5>');
            newPrice.addClass('card-title');
            newPrice.attr('id', 'price');
            newPrice.text(obj.price);

            var newImg = $('<img>');
            newImg.addClass('mx-auto d-block');
            newImg.attr('src', obj.img);
            newImg.attr('id', 'photo');

            var newDetails = $('<h6>');
            newDetails.addClass('card-subtitle text-muted');
            newDetails.attr('id', 'details');
            newDetails.text(obj.title);

            newBody.append(newPrice, newDetails);

            newCard.append(newHeader, newBody, newImg);

            $(`#${obj.category}`).append(newCard);
        });
    }
}

funcs.cardGen();