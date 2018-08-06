var low = $('#low');
var med = $('#med');
var high = $('#high');
var extra = $('#extra');

var itemObj = [
    {
        category: 'low',
        header: 'Envelope Card Wallet',
        price: '$5',
        title: 'Blush Color',
        img: 'https://oldnavy.gap.com/webcontent/0015/700/776/cn15700776.jpg',
        url: 'https://oldnavy.gap.com/browse/product.do?pid=291253062&vid=1&pwa=true'
    },
    {
        category: 'high',
        header: 'Vans Slip-ons',
        price: '$60',
        title: 'Sand Dollar color - Size 8',
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
        title: 'Dryer for curly hair',
        img: 'https://scdn.devacurl.com/media/product/057/devadryer-and-devafuser-34a.png',
        url: 'https://www.devacurl.com/devadryer-and-devafuser.html'
    },
    {
        category: 'med',
        header: 'Starter Kit for Curly Hair',
        price: '$42',
        title: 'Kit of stuff for curly hair',
        img: 'https://scdn.devacurl.com/media/product/69a/how-to-quit-shampoo-for-effortless-waves-8ce.png',
        url: 'https://www.devacurl.com/how-to-quit-shampoo-for-effortless-waves.html'
    },
    {
        category: 'low',
        header: 'Small Kit for Curly Hair',
        price: '$12',
        title: 'Smaller kit of stuff for curly hair',
        img: 'https://scdn.devacurl.com/media/product/b1d/wavy-mini-transformation-kit-e09.png',
        url: 'https://www.devacurl.com/wavy-mini-transformation-kit.html'
    },
    {
        category: 'extra',
        header: 'Maris Wedge',
        price: '$120',
        title: 'Wedge heel for the arch support concious.',
        img: 'https://www.vionicshoes.com/media/catalog/product/cache/14/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/m/a/maris_pewter_silo_1.jpg',
        url: 'https://www.vionicshoes.com/women/wedges/maris-wedge.html?76=47'
    },
    {
        category: 'extra',
        header: 'Gramercy Ballet Flat',
        price: '$120',
        title: 'Flats for the arch support concious.',
        img: 'https://www.vionicshoes.com/media/catalog/product/cache/14/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/g/r/gramercy_blacksuede_silo.jpg',
        url: 'https://www.vionicshoes.com/women/flats/gramercy-ballet-flat.html?76=627'
    },
    {
        category: 'extra',
        header: 'Carrera Trainer Shoe',
        price: '$125',
        title: 'Trainers for the arch support concious.',
        img: 'https://cdn-imagizer.kurufootwear.com/media/catalog/product/cache/image/1000x1000/e9c3970ab036de70892d86c6d221abfe/2/0/202213-ffffff.jpg',
        url: 'https://www.kurufootwear.com/carrera-womens.html?color=Boysenberry-JetBlack-DarkTeal'
    },
    {
        category: 'extra',
        header: 'Brother CS6000i',
        price: '$150',
        title: 'Good starter sewing machine.',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71UT%2BEpN-WL._SX425_.jpg',
        url: 'https://www.amazon.com/Brother-Feature-Rich-Stitches-Auto-Size-Buttonholes/dp/B000JQM1DE?psc=1&SubscriptionId=AKIAINYWQL7SPW7D7JCA&tag=aboutcom02thespruce-20&linkCode=sp1&camp=2025&creative=165953&creativeASIN=B000JQM1DE&ascsubtag=4137153%7Cgoogle.com%7C%7C%7C49%7C1%7C'
    },
    {
        category: 'low',
        header: 'Darn Tough Socks',
        price: '$22',
        title: 'Hiker Micro Crew Cushion',
        img: 'https://cdn.shopify.com/s/files/1/1354/8177/products/1903_Slate_4167208f-27ee-4214-bba7-bca4e9d05e9f_796x1428.png?v=1523272279',
        url: 'https://darntough.com/collections/women-s-hiker-collection/products/solid-micro-crew-cushion?variant=30180801607'
    },
    {
        category: 'med',
        header: 'Tote Shoulder Bag',
        price: '$40',
        title: 'Navy color',
        img: 'https://images-na.ssl-images-amazon.com/images/I/61xCvEc0mEL._UY695_.jpg',
        url: 'https://www.amazon.com/YALUXE-Womens-Oxford-Capacity-Shoulder/dp/B0721B5JVV/ref=sr_1_9?ie=UTF8&qid=1533517155&sr=8-9&keywords=tote%2Bbag&dpID=413hW6yDjML&preST=_SY395_QL70_&dpSrc=srch&th=1'
    }
]

var funcs = {
    cardGen: function () {
        itemObj.forEach(function (obj) {
            
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

$('.nav-item').click(function () {
    if ($('.navbar-toggler').css('display') !== 'none') {
        $('.navbar-toggler').trigger('click');
    }
});
