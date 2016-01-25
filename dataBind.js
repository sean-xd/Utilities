function dataBind(element, state, property){
    element.textContent = state[property];
    Object.defineProperty(state, property, {set: function(x){
        element.textContent = x;
    }});
}