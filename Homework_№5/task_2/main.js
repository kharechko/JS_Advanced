const shop = (function(){
    let balance = 1000
    let products = {
        beer: {
            count: 100,
            price: 50
        },
        wine: {
            count: 50,
            price: 100
        },
        pepsi: {
            count: 80,
            price: 40
        }
    }

    function sell(name,count){
        products[name].count -= count;
        balance += count * products[name].price
    }
    function storage(name){
        return products[name].count
    }
    function bank(){
        return balance
    }
    return {
        sell: sell,
        storage: storage,
        bank: bank
    }
    
}());

shop.sell('beer', 10)
console.log(shop.storage('beer'))
console.log(shop.bank())