import { Mongo } from 'meteor/mongo';
 
export const Pizzas = new Mongo.Collection('pizzas');
export const Ingredients = new Mongo.Collection('ingredients');
export const UserProf = new Mongo.Collection('user_prof');