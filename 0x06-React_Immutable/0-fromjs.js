const { fromJS } = require('immutable');

function getImmutableObject(obj) {
  return fromJS(obj);
}

const input = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableObject = getImmutableObject(input);
console.log(immutableObject);
