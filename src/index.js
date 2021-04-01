
exports.min = function min(array) {
  let minValue = array[0];
  if (array == undefined) {
    return 0;
  } else {
    for (let i = 1; i < array.length; i++) {
      if (minValue > array[i]) {
        minValue = array[i];
      }
    }
  }
  return minValue;
}

exports.max = function max(array) {
  let maxValue = array[0];
  if (array == undefined) {
    return 0;
  } else {
    for (let i = 1; i < array.length; i++) {
      if (maxValue < array[i]) {
        maxValue = array[i];
      }
    }
  }
  return maxValue;
}

exports.avg = function avg(array) {
  let avgValue = 0;
  if (array == undefined) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      avgValue += array[i];
      if (array == undefined){
        return 0;
      }
    }
  }
  avgValue /= array.length;
  return avgValue;
}
