function accessImmutableObject(object, array) {
  let current = object;
  for (let i = 0; i < array.length; i++) {
    if (current[array[i]] === undefined) {
      return undefined;
    }
    current = current[array[i]];
  }
  return current;
}

module.exports = accessImmutableObject;
