function type(obj, shell){
    var SNA = (is(obj, "String") || is(obj, "Number") || is(obj, "Array"));
    if(SNA) return shell ? {type: is(obj)} : {type: is(obj), value: obj};
    var typed = {type: "Object", properties: {}};
    Object.keys(obj).forEach(function(e){
        typed.properties[e] = type(obj[e], shell);
    });
    return typed;
}