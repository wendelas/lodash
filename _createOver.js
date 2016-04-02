define(['./_apply', './_arrayMap', './_baseIteratee', './rest'], function(apply, arrayMap, baseIteratee, rest) {

  /**
   * Creates a function like `_.over`.
   *
   * @private
   * @param {Function} arrayFunc The function to iterate over iteratees.
   * @returns {Function} Returns the new invoker function.
   */
  function createOver(arrayFunc) {
    return rest(function(iteratees) {
      iteratees = arrayMap(iteratees, baseIteratee);
      return rest(function(args) {
        var thisArg = this;
        return arrayFunc(iteratees, function(iteratee) {
          return apply(iteratee, thisArg, args);
        });
      });
    });
  }

  return createOver;
});
