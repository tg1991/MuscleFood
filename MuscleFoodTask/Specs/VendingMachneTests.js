/// <reference path="..\Scripts/jasmine/jasmine.js" />
/// <reference path="..\Scripts/VendingMachine.js" />

describe('Vending Machine Test', function () {

    var vendingMachine;

    beforeEach(function () {
        vendingMachine = new setUpVendingMachine();
    });

    //tests for first task.

    describe('page loading',
        function () {
            it('on page load machine displays INSERT COINS',
                function () {
                    expect(vendingMachine.display).toEqual('INSERT COINS');
                });
        });


    describe('Adding Coins',
        function () {
            it('adding in a nickel coin and display shows $0.05',
                function () {
                    vendingMachine.addCoin(5.00);
                    expect(vendingMachine.display).toEqual('$0.05');
                });

            it('adding in a dime coin and display shows $0.10',
                function () {
                    vendingMachine.addCoin(2.27);
                    expect(vendingMachine.display).toEqual('$0.10');
                });

            it('adding in a quarter coin and display shows $0.25',
                function () {
                    vendingMachine.addCoin(5.67);
                    expect(vendingMachine.display).toEqual('$0.25');
                });

            it('adding in a penny coin and display shows INSERT COIN and coin return equals $0.01',
                function () {
                    vendingMachine.addCoin(2.50);
                    expect(vendingMachine.display).toEqual('INSERT COINS');
                    expect(vendingMachine.coinsReturned).toEqual(0.01);
                });

        });

    describe('Select Product',
        function () {

            afterEach(function () {
                vendingMachine = new setUpVendingMachine();
            });

            it('select product cola where exact money used and display shows THANK YOU, then ' +
                'display shows INSERT COIN and current amount equals $0.00',
                function () {
                    vendingMachine.addCoin(5.67);
                    vendingMachine.addCoin(5.67);
                    vendingMachine.addCoin(5.67);
                    vendingMachine.addCoin(5.67);
                    vendingMachine.selectProduct('cola');
                    expect(vendingMachine.dispensedItem).toEqual('cola');
                    expect(vendingMachine.display).toEqual('THANK YOU');
                    expect(vendingMachine.amountInserted).toEqual(0.00);
                });

            it('select product cola where not enough money is added display shows INSERT COINS',
                function () {
                    vendingMachine.addCoin(2.27);
                    expect(vendingMachine.display).toEqual('$0.10');
                    vendingMachine.selectProduct('cola');
                    expect(vendingMachine.display).toEqual('INSERT COINS');
                    expect(vendingMachine.amountInserted).toEqual(0.10);
                });

            it('select product chips where exact money used and display shows THANK YOU, then ' +
                'display shows INSERT COIN and current amount equals $0.00',
                function () {
                    vendingMachine.addCoin(5.67);
                    vendingMachine.addCoin(5.67);
                    vendingMachine.selectProduct('chips');
                    expect(vendingMachine.dispensedItem).toEqual('chips');
                    expect(vendingMachine.display).toEqual('THANK YOU');
                    expect(vendingMachine.amountInserted).toEqual(0.00);
                });

            it('select product chips where not enough money is added display shows INSERT COINS',
                function () {
                    vendingMachine.addCoin(5.00);
                    expect(vendingMachine.display).toEqual('$0.05');
                    vendingMachine.selectProduct('chips');
                    expect(vendingMachine.display).toEqual('INSERT COINS');
                    expect(vendingMachine.amountInserted).toEqual(0.05);
                });

            it('select product candy where exact money used and display shows THANK YOU, then ' +
                'display shows INSERT COIN and current amount equals $0.00',
                function () {
                    vendingMachine.addCoin(5.67);
                    vendingMachine.addCoin(5.67);
                    vendingMachine.addCoin(5.00);
                    vendingMachine.addCoin(2.27);
                    vendingMachine.selectProduct('candy');
                    expect(vendingMachine.dispensedItem).toEqual('candy');
                    expect(vendingMachine.display).toEqual('THANK YOU');
                    expect(vendingMachine.amountInserted).toEqual(0.00);
                });

            it('select product candy where not enough money is added display shows INSERT COINS',
                function () {
                    vendingMachine.addCoin(5.67);
                    expect(vendingMachine.display).toEqual('$0.25');
                    vendingMachine.selectProduct('candy');
                    expect(vendingMachine.display).toEqual('INSERT COINS');
                    expect(vendingMachine.amountInserted).toEqual(0.25);
                });
        });


    describe('Make Change',
        function () {

            afterEach(function () {
                vendingMachine = new setUpVendingMachine();
            });

            it('select product candy where too much money is added display shows THANK YOU, then' +
                'remaining amount placed in coin return and display shows INSERT COIN' +
                'and current amount equals $0.00',
                function () {
                    vendingMachine.addCoin(5.67);
                    vendingMachine.addCoin(5.67);
                    vendingMachine.addCoin(5.67);
                    expect(vendingMachine.display).toEqual('$0.75');
                    vendingMachine.selectProduct('candy');
                    expect(vendingMachine.display).toEqual('THANK YOU');
                    expect(vendingMachine.coinsReturned).toEqual(0.10);
                    expect(vendingMachine.amountInserted).toEqual(0.00);
                });
        });

    describe('Return Coins',
        function () {

            afterEach(function () {
                vendingMachine = new setUpVendingMachine();
            });

            it('coins are inserted and return coins button is pressed, coins returned and' +
                'display shows INSERT COINS',
                function () {
                    vendingMachine.addCoin(5.67);
                    vendingMachine.addCoin(5.00);
                    vendingMachine.addCoin(2.27);
                    vendingMachine.returnCoin();
                    expect(vendingMachine.display).toEqual('INSERT COINS');
                    expect(vendingMachine.coinsReturned).toEqual(0.40);
                });
        });
});