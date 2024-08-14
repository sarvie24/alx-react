const { List, Map } = require('immutable');

function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return List(map1.merge(map2).values());
}

module.exports = { concatElements, mergeElements };
