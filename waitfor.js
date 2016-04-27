function waitFor(num, fn, check){
  var args = [];
  return data => {
    args.push(data);
    if(args.length === num) check ? fn(args) : fn.apply(null, args);
  }
}
