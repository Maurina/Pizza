"use strict";

let pizza ={
    crust: "",
    topping: "",
    size: "",
    flour: "",
    much: function(){
        if (pizza.size === 'small' && pizza.crust === 'thin'){
        return pizza.flour="1";
        }else if (pizza.size === 'small' && pizza.crust === 'thick'){
        return  pizza.flour="2";
        }else if (pizza.size === 'large' && pizza.crust === 'thin'){
            return pizza.flour="2";
        }else {
            return pizza.flour="4";
        }
    },

    
    messagePizza: function(){
        let message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping} and cheese just for you.`
        document.getElementById('textHere').innerHTML = message;
        console.log(message)
    }//messagePizza


};//pizza


let messageShopping = function(){
    let order = `You will need to purchase ${pizza.much()} cups of flour and 1lb of ${pizza.topping}.`
    document.getElementById('textShopping').innerHTML = order;
    console.log(order)
}//messageShopping
