import { Map } from 'immutable';

/**
 * Merge two objects deeply, combining values if they are the same.
 * 
 * @param {Object} page1 - The first object to merge.
 * @param {Object} page2 - The second object to merge.
 * @returns {List} A new List containing the merged values.
 */
function mergeDeeplyElements(page1, page2) {
  // Convert the objects to Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Merge the two maps, using a custom merger function
  const mergedMap = map1.mergeWith((value1, value2) => {
    // If the values are both objects, merge them recursively
    if (value1 instanceof Object && value2 instanceof Object) {
      return mergeDeeplyElements(value1, value2);
    }
    // If the values are the same, combine them
    else if (value1 === value2) {
      return value1;
    }
    // Otherwise, return the second value
    else {
      return value2;
    }
  }, map2);

  // Return the merged map as a List
  return mergedMap.toList();
}
