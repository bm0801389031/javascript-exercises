const fibonacci = function(index) {
   
    var fib = []; // Initialize array!
    
    fib[0] = 0;
    fib[1] = 1;


    if (index < 0){
        return 'OOPS'
    } else {

    
    for (let i = 2; i <= index; i++) {
      // Next fibonacci number = previous + one before previous
      // Translated to JavaScript:
      fib[i] = fib[i - 2] + fib[i - 1];
      //fib.push(fib[i])
    }
    
    return fib.pop()
    }
};

module.exports = fibonacci;
