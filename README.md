#Utilities
Basic things I use in almost every project.

* [c](#c-cb-a)
* [el](#el-element)
* [is](#is-thing-type)
* [kyp](#kyp-key-callback)
* [sorter](#sorter-check-backup)
* [t](#t-tag-config)
* [type](#type-object-shell)

###c (callback, arg)
Function argument proxy.

```javascript
function add(x, y){return x + y;}

var arr = [5, 10, 15].map(c(add, 5)); //=> [10,15,20]
```

###el (element)
Element selector.

```javascript
var container = el("#container"),
    header = el("header")[0],
    post = el(".post")[5];
```

###is (thing, type)
If called without type, returns type of thing. If called with type, checks type of thing against type.

```javascript
var x = "vim";
is(x, "String"); //=> true
console.log(is(x)); //=> "String"
```

###kyp (key, callback)
Key press utility. Basically just a dictionary for keyCodes.

```javascript
var kyp = Kyp();

kyp("enter", function(){console.log("enter pressed.")});
kyp("tab", function(){/*open sidebar or something*/});
```

###sorter (check, backup)
Lets you use normal functions to sort. I've only needed two dimensions so far, but it could easily be extended to use multiple backups.

```javascript
var shows = [
    {title: "Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru", time: 2330},
    {title: "Taimadou Gakuen 35 Shiken Shoutai", time: 1205},
    {title: "Diabolik Lovers More, Blood", time: 2330}
];

shows.sort(sorter(show => show.time, show => show.title));

console.log(shows);
/*  [
        {title: "Taimadou Gakuen 35 Shiken Shoutai", time: 1205},
        {title: "Diabolik Lovers More, Blood", time: 2330},
        {title: "Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru", time: 2330},
    ] */

```

###t (tag, config)
Bare metal dom element creation.

```javascript
//Basic
var content = t("div", {id: "content"})([
    t(".title")("Hello"),
    t("p")("Can you hear me?")
]);
```
```html
<div id="content">
    <div class="title">Hello</div>
    <p>Can you hear me?</p>
</div>
```
```javascript
//Advanced
function navLink(name){
    var route = (name === "home") ? "/" : "/" + name;
    return t("a", {href: route || "/" + name})(name);
}

var nav = t("nav")(["home", "blog", "contact"].map(navLink));
```
```html
<nav>
    <a class="nav-link" href="/">home</a>
    <a class="nav-link" href="/blog">blog</a>
    <a class="nav-link" href="/contact">contact</a>
</nav>
```

###type (object, shell)
If called without shell, returns object typed with values. If called with shell, returns object typed without values.

```javascript
var y = {
    name: "Dad",
    age: 35,
    kid: {
        name: "Cara",
        age: 7
    }
};

var z = type(y, true);

console.log(z);
/*  {
        type: "Object",
        properties: {
            name: {type: "String"},
            age: {type: "Number"},
            kid: {
                type: "Object",
                properties: {
                    name: {type: "String"},
                    age: {type: "Number"}
                }
            }
        }
    } */
```

