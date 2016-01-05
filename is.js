function is(thing, type){
    if(!thing && thing !== 0) return false;
    thing = Object.prototype.toString.call(thing).slice(8,-1);
    return type ? (thing === type) : thing;
}