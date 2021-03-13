
exports.min = function min (array) {
  if (typeof array != 'undefined' && array.length > 0) {
    return Math.min(...array)
  } else {
  return 0;
  }
}

exports.max = function max (array) {
  if (typeof array != 'undefined' && array.length > 0) {
    return Math.max(...array)
  } else {
      return 0;
  }
}

exports.avg = function avg (array) {
  if (typeof array != 'undefined' && array.length > 0)  {
    var arr = 0
    for ( i =0; i <array.length; i++) {
      arr+=array[i]
    }
    return arr / array.length
  } else {
      return 0;
  }
}