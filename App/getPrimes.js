function isPrimes(n) {
    var primes = [];
    for(var i = 2; i < n; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(n);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < n; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < n; i++) {
        if(primes[i] === true) {
            return (i + " " + primes[i]);
        }
    }
}
