/*      Starting data    */

import { Meteor } from 'meteor/meteor'
import { Pizzas, Ingredients } from '../imports/api/pizzas/Pizzas.js';


// if the database of pizzas is not empty, populate it with pizzas
Meteor.startup(function(){
    if(Pizzas.find().count !==0) return;
    
    Pizzas.remove({});
    
    const pizzas = [{
        name : 'pizza first',
        pic: 'www.picture',
        ingrds:['ch','tom','salami'],
        rec:'www.rec.com'
    }];
    
    // function iterate through piza data and add to database
    pizzas.forEach((p) => {
        Pizzas.insert(p);
    });
    
    
});