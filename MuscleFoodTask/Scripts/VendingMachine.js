function VendingMachine() {

    this.display = 'INSERT COINS';
    this.coinsReturned = 0.00;
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
            this.display = '$' + selectedCoin.coinValue.toFixed(2);

        } else if (typeof selectedCoin === 'object' && selectedCoin && !selectedCoin.accepted) {
            this.display = 'INSERT COINS';
            this.coinsReturned = selectedCoin.coinValue;
        }
    }
}