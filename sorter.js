function sorter(check, backup){
    return function(a, b){
        if(check(a) === check(b) && backup) return backup(a) - backup(b);
        return check(a) - check(b);
    }
}