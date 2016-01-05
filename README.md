#Utilities
Basic things I use in almost every project.

* [el](#el-element)
* [is](#is-thing-type)
* [sorter](#sorter-check-backup)
* [type](#type-object-shell)

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