import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Pizzas } from '../../api/Pizzas.js';

import template from './pizzas.html';
 
class PizzasChoiceCtrl {
  
  // Use pizza data schema
  constructor($scope) {
    $scope.viewModel(this);
    this.helpers({
      pizzas() {
        return Pizzas.find({});
      }
    })
  }
}
 
export default angular.module('pizzasChoice', [
  angularMeteor
])
  .component('pizzasChoice', {
    templateUrl: 'imports/components/pizzas/pizzas.html',
    controller: ['$scope',PizzasChoiceCtrl]
  });