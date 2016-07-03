function dataBind(element, state, property, fn){
  element.textContent = state[property];
  Object.defineProperty(state, "_" + property, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: state[property]
  });
  Object.defineProperty(state, property, {
    enumerable: true,
    set: function(x){
      state["_" + property] = x;
      fn(x);
    },
    get: function(){
      return state["_" + property];
    }
  });
}
