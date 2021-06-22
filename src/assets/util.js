/** Remove duplicates by custom equality function. */
// If f sees b as equal to a, only include it if it's actually a.
export const uniqEq = (xs, f) =>
  xs.filter((a) => xs.find((b) => f(a, b)) === a);

/** Find unique elements by transforming each element */
// a and b are equal if f returns them equal.
export const uniqAs = (xs, f) => uniqEq(xs, (a, b) => f(a) === f(b));
