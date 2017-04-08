function fizzBuzz(n){
	var isDivisibleBy3 = (n%3 === 0);
	var isDivisibleBy5 = (n%5 === 0);
	if(isDivisibleBy3 && !isDivisibleBy5){
		return "Fizz";
	} 
	else if(isDivisibleBy5 && !isDivisibleBy3){
		return "Buzz";
	} 
		
	else if(isDivisibleBy3 && isDivisibleBy5) {
		return "FizzBuzz";
	}
	else {
		return n;
	}
}
