function Magic(num, args, fn){
  return data => args.length + 1 !== num ? args.push(data) : fn(args.concat([data]));
}
