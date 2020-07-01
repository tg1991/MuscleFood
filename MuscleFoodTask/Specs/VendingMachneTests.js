/// <reference path="..\Scripts/jasmine/jasmine.js" />
/// <reference path="..\Scripts/VendingMachine.js" />

describe('Vending Machine Test', function () {

    var vendingMachine;

    beforeEach(function() {
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
            it('select product cola where exact money used and display shows THANK YOU, then ' +
                'display shows INSERT COIN and current amount equals $0.00',
                function () {
                    //code here
                });

            it('select product cola where not enough money is added display shows INSERT COINS',
                function () {
                    //code here
                });

            it('select product chips where exact money used and display shows THANK YOU, then ' +
                'display shows INSERT COIN and current amount equals $0.00',
                function () {
                    //code here
                });

            it('select product chips where not enough money is added display shows INSERT COINS',
                function () {
                    //code here
                });

            it('select product candy where exact money used and display shows THANK YOU, then ' +
                'display shows INSERT COIN and current amount equals $0.00',
                function () {
                    //code here
                });

            it('select product candy where not enough money is added display shows INSERT COINS',
                function () {
                    //code here
                });

        });


    describe('Make Change',
        function () {
            it('select product candy where too much money is added display shows THANK YOU, then' +
                'remaining amount placed in coin return and display shows INSERT COIN' +
                'and current amount equals $0.00',
                function () {
                    //code here
                });
        });

    describe('Return Coins',
        function () {
            it('coins are inserted and return coins button is pressed, coins returned and' +
                'display shows INSERT COINS',
                function () {
                    //code here
                });
        });


});