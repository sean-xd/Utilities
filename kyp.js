function Kyp(){
  var handler = {},
    codes = {
      backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17,
      alt: 18, esc: 27, left: 37, up: 38, right: 39,
      down: 40, 0: 48, 1: 49, 2: 50, 3: 51,
      4: 52, 5: 53, 6: 54, 7: 55, 8: 56,
      9: 57, a: 65, b: 66, c: 67, d: 68,
      e: 69, f: 70, g: 71, h: 72, i: 73,
      j: 74, k: 75, l: 76, m: 77, n: 78,
      o: 79, p: 80, q: 81, r: 82, s: 83,
      t: 84, u: 85, v: 86, w: 87, x: 88,
      y: 89, z: 90, f1: 112, f2: 113, f3: 114,
      f4: 115, f5: 116, f6: 117, f7: 118, f8: 119,
      f9: 120, f10: 121, f11: 122, f12: 123
    },
    kyp = function(e, cb){
      if(is(e, "String")) handler[codes[e]] = cb;
      if(is(e, "Number")) handler[e] = cb;
      if(!cb && handler[e.keyCode]) handler[e.keyCode](e);
    };
  window.addEventListener("keydown", kyp);
  return kyp;
}
