function add(x,y){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (n instanceof Array) return add.apply(this,n);
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments1,));
}