function sorter(fn1, fn2){
  return (a, b) => (fn1(a) === fn1(b) && fn2) ? fn2(a) - fn2(b) : fn1(a) - fn1(b);
}
