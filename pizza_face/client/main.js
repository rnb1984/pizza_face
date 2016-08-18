import angular from 'angular';
import angularMeteor from 'angular-meteor';
import pizzasChoice from '../imports/components/pizzas/pizzas.controller';
 
angular.module('pizza-face', [
  angularMeteor,
  pizzasChoice.name
]);
