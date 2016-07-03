function type(value, shell){
  var type = is(value);
  if(["String", "Number", "Array"].indexOf(type) > -1) return shell ? {type} : {type, value};
  return Object.keys(value).reduce((typed, key) => {
    typed.properties[key] = type(value[key], shell);
    return typed;
  }, {type: "Object", properties: {}});
}
