function t(tag, config){
  config = config || {};
  if(tag){
    if(tag[0] === "."){config.className = tag.substr(1); tag = "div";}
    if(tag[0] === "#"){config.id = tag.substr(1); tag = "div";}
  }
  var parent = tag ? document.createElement(tag) : document.createDocumentFragment();
  if(config) Object.keys(config).forEach(key => parent[key] = config[key]);
  return (ch, force) => {
    if(force){parent.innerHTML = ch; return parent;}
    if(!ch && ch !== 0) return parent;
    var type = is(ch);
    if(type === "String" || type === "Number") parent.textContent = ch;
    if(type.substr(0,4) === "HTML" || type.substr(0, 4) === "Docu") parent.appendChild(ch);
    if(type === "Array") ch.forEach(e => parent.appendChild(e);
    return parent;
  };
}
