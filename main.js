// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Array.prototype.remove = function(value) {
  this.splice(this.indexOf(value), 1);
}

let array = ['tree', 'bird', 'rain', 'book', 'traveling', 'blue', 'enough'];
let item = 'blue';
array.remove(item);
console.log(array);