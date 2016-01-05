function el(id, parent){
    if(!parent) parent = document;
    if(id[0] === "#") return parent.getElementById(id.substr(1));
    if(id[0] === ".") return parent.getElementsByClassName(id.substr(1));
    return parent.getElementsByTagName(id);
}