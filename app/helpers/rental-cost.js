import Ember from 'ember';

export function rentalCost(params) {
  var rental = params[0];
  return rental.get('cost');
  // if (rentalPrice >= 1000){
  //   return '$$$$';
  // } else if (rentalPrice >= 750){
  //   return '$$$';
  // } else if (rentalPrice >= 500){
  //   return '$$';
  // } else if (rentalPrice <= 250){
  //   return '$';
  // }

export default Ember.Helper.helper(rentalCost);
