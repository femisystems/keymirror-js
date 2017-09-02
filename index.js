const keyMirror = function(obj) {
  
  // type-check and convert entry into an array
  const flatten = function (obj) {
    if (Array.isArray(obj)) return obj;
    if (obj instanceof Object) return Object.keys(obj);
    if (typeof obj === 'string') return obj.split(',');

    // nicely notify user about type
    throw new TypeError('Mirror only takes arguments of types array, object and string!');
  };
  
  // mirror array values
  const mirror = function (obj) {
    const [arr, mirrored] = [flatten(obj), {}];
    arr ? arr.forEach(el => mirrored[el.trim()] = el.trim()): null;
    return mirrored;
  }
  
  return mirror(obj);
}

module.exports = keyMirror;