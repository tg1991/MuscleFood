function VendingMachine() {

    this.display = 'INSERT COINS';
    this.coinsReturned = 0;
    this.totalAmount = 0;
    this.coins = [
        {
            coinName: 'nickel',
            coinWeight: 5.00,
            coinValue: 0.05,
            accepted: true
        }, {
            coinName: 'dime',
            coinWeight: 2.27,
            coinValue: 0.10,
            accepted: true
        }, {
            coinName: 'quarter',
            coinWeight: 5.67,
            coinValue: 0.25,
            accepted: true
        }, {
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
        }, {
            name: 'chips',
            price: 0.50,
            stock: 3
        }, {
            name: 'candy',
            price: 0.65,
            stock: 3
        }
    ];

    // adds a coin based on weight, goes in one by one like a real vending machine.
    this.addCoin = function (coinWeight) {

        // don't like using var but have to on this framework.
        var selectedCoin;

        // wanted to write below as the following, but Jasmine would not accept it.
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
    };

    // makes a product selection, if not enough money then will ask to insert coins.
    this.selectProduct = function (productName) {
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
    };

    // Function to return coins without making a selection.
    this.returnCoins = function () {
        if (this.totalAmount > 0) {
            this.coinsReturned = this.totalAmount;
            this.display = 'INSERT COINS';
        }
    };
}