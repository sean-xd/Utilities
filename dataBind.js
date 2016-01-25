function dataBind(element, state, property){
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
            element.textContent = x;
        },
        get: function(){
            return state["_" + property];
        }
    });
}