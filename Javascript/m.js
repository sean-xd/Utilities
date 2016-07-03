function m(markdown){
  var isCode = false,
    listing = false,
    lists = [[]],
    listIn = 0,
    listOut = 0,
    code = "";

  var result = markdown.split("\n")
    .map(function(str){
      if(listing && str[0] !== "*"){
        listing = false;
        listIn += 1;
        lists[listIn] = [];
      }
      if(str[0] === "*"){
        if(str[2] === "[") str = str.split("[")[1].split("]")[0];
        lists[listIn].push(t("li")(str));
        if(!listing){
          listing = true;
          return true;
        }
        return false;
      }
      if(str.substring(0,3) === "```"){
        if(isCode){isCode = false; return t("pre")(t("code")(code))};
        else {isCode = true; code = ""; return false;}
      }
      if(isCode){code += str + "\n"; return false;}
      if(str[0] === "#"){
        var hNum = str.split("#").filter(e => !e).length,
          text = str.split("#").filter(e => !!e)[0];
        return t("h" + hNum)(text);
      }
      return t("p")(str);
    })
    .filter(function(e){return !!e})
    .map(function(e){return (e === true) ? t("ul")(lists[listOut++]) : e});

  return t()(result);
}
