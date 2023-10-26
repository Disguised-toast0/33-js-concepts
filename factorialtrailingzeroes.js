function zeros(n) {
  var result = [];
  var count = 0;

  for (var i = 1; i <= n; i++) {
    result.push(i);
  } //generating range for factorial function

  var factorial = result.reduce(function(acc, el) {
    return acc * el;
  }, 1); //calculating factorial

  factorial = factorial.toString().split('');

  for (var j = factorial.length - 1; j > 0; j--) {
    if (parseInt(factorial[j]) === 0) {
      count += 1;
    } else {
      break;
    }
  } //counting trailing zeros

  return count;
}
