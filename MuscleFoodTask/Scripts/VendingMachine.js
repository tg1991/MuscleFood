function VendingMachine() {

    this.display = 'INSERT COINS';
    this.coinsReturned = 0.00;
    this.totalAmount = 0.00;
    this.coins = [
        {
            coinName: 'nickel',
            coinWeight: 5.00,
            coinValue: 0.05,
            accepted: true
        },
        {
            coinName: 'dime',
            coinWeight: 2.27,
            coinValue: 0.10,
            accepted: true
        },
        {
            coinName: 'quarter',
            coinWeight: 5.67,
            coinValue: 0.25,
            accepted: true
        },
        {
            coinName: 'penny',
            coinWeight: 2.50,
            coinValue: 0.01,
            accepted: false
        }
    ];

    this.products = [
        {
            name: 'cola',
            price: 1.00,
            stock: 3
        },
        {
            name: 'chips',
            price: 0.50,
            stock: 3
        },
        {
            name: 'candy',
            price: 0.65,
            stock: 3
        }
    ];

    this.addCoin = function (coinWeight) {
        //dont like using var but have to on this frame work

        var selectedCoin;

        //wanted to write below as the following, but Jasmine would not accept it.
        // const selectedCoin = this.coins.find(coin => coin.coinWeight === coinWeight);

        this.coins.forEach(function (coin) {
            if (coin.coinWeight === coinWeight) {
                selectedCoin = coin;
            }
        });

        if (typeof selectedCoin === 'object' && selectedCoin && selectedCoin.accepted) {
            this.totalAmount += selectedCoin.coinValue;
            this.display = '$' + this.totalAmount.toFixed(2);

        } else if (typeof selectedCoin === 'object' && selectedCoin) {
            this.display = 'INSERT COINS';
            this.coinsReturned = selectedCoin.coinValue;
        }
    }

    this.selectProduct = function(productName) {
        var selectedProduct;

        this.products.forEach(function (product) {
            if (product.name === productName) {
                selectedProduct = product;
            }
        });

        if (typeof selectedProduct === 'object' && selectedProduct && selectedProduct.price <= this.totalAmount) {
            this.coinsReturned = (this.totalAmount - selectedProduct.price).toFixed(2);
            this.coinsReturned = parseFloat(this.coinsReturned);
            this.totalAmount = 0;
            this.display = 'THANK YOU';
            this.dispensedItem = selectedProduct.name;
        } else if (typeof selectedProduct === 'object' && selectedProduct) {
            this.display = 'INSERT COINS';
        }

    }
}