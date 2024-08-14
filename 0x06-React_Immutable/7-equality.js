import { is } from 'immutable';

/**
 * Check if two Immutable.js Maps are equal.
 * 
 * @param {Map} map1 - The first Map to compare.
 * @param {Map} map2 - The second Map to compare.
 * @returns {boolean} True if the Maps are equal, false otherwise.
 */
function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
