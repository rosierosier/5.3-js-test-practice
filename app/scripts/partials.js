

function bindFirstArg(fn, a){

  return function(b){
    return fn(a, b);
  };

}

var addOne = bindFirstArg(add, 1);

// console.log(addOne(1)); // 2
// console.log(addOne(5)); // 6

var addTen = bindFirstArg(add, 10);

// console.log(addTen(20)); // 30


function partial(fn /*, args ..... */){
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1);

  return function(){
    return fn.apply(this, args.concat(slice.call(arguments, 0)));
  };

}

var alwaysNine = partial(add, 4, 5);

// console.log("alwaysNine(10): ", alwaysNine(10));
// console.log("alwaysNine(48793837429823749): ", alwaysNine(20));

function add(/* args */){
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
