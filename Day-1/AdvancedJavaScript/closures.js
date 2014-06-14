function getSpinner(){
	var counter = 0;
	function increment(){
		return ++counter;
	}
	function decrement(){
		return --counter;
	}
	return {
		up : increment,
		down : decrement
	}
}

var spinner = getSpinner();
spinner.up()

var spinner = (function(){
	var counter = 0;
	function increment(){
		return ++counter;
	}
	function decrement(){
		return --counter;
	}
	return {
		up : increment,
		down : decrement
	}
})()

var spinner = (function(){
	var counter = 0;
	return {
		up : function(){
			return ++counter;
		},
		down : function(){
			return --counter;
		}
	};
})()

function getIsPrime(){
	var cache = {}
	return function isPrime(n){
		if (typeof cache[n] !== "undefined"){
			console.log("From cache...");
			return cache[n];
		}
		cache[n] = true;
		for(var i=2;i<= (n/2);i++)
			if (n % i === 0){
				cache[n] = false;
				break;
			}
		console.log("Freshly brewed...");
		return cache[n];
	}
}