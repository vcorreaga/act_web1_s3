const generarId = (function() {
    let id = 0;
    return function() {
        return ++id;
    };
})();

console.log(generarId());
console.log(generarId());
