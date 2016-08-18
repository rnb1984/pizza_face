import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
export const Pizzas = new Mongo.Collection('pizzas');

// toppings for pizza 
Ingredients = new SimpleSchema({
    name: {
      type: String,
      label: "Ingredient Name"
  }
});

// pizza details
PizzaSchema = new SimpleSchema({
  name: {
      type: String,
      label: "Pizza Name"
  },
  image: {
      type: String
  },
  ingredients: {
      type:[Ingredients]
  }
});

Pizzas.attachSchema( PizzaSchema );