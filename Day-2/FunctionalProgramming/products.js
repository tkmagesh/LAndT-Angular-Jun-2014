var products = [
	{id:1,name : "pen", cost :10, units:70, category : 1 },
	{id:8,name : "hen", cost :90, units:40, category : 2 },
	{id:3,name : "den", cost :40, units:20, category : 1 },
	{id:9,name : "len", cost :60, units:70, category : 2 },
	{id:4,name : "ten", cost :30, units:10, category : 1 },
	{id:6,name : "ken", cost :20, units:90, category : 2 }
]

function sort(list){
	//sorts the list by "id" (assuming the list containing objects with attribute "id")
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i], right=list[j];
			if (left.id > right.id){
				list[i]= list[j];
				list[j]= left;
			}
		}
}

sort(products);

console.table(products);

function sort(list,attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i], right=list[j];
			if (left[attrName] > right[attrName]){
				list[i]= list[j];
				list[j]= left;
			}
		}
}

function sort(list,comparerFn){
	/*Assumption:
		The comparerFn returns following
			0 if l == r
			-1 if l < r
			1 if l > r
	*/
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i], right=list[j];
			if (comparerFn(left,right) > 0){
				list[i]= list[j];
				list[j]= left;
			}
		}
}

function filter(){
  var result = [];
  for(var i=0;i<products.length;i++)
     if (products[i].cost > 50)
        result.push(products[i]);
  return result;
}

function filter(list,criteriaFn){
  var result = [];
  for(var i=0;i<list.length;i++)
     if (criteriaFn(list[i]) === true)
        result.push(list[i]);
  return result;
}

function isCostlyProduct(p){
	return p.cost > 50;
}

var costlyProducts = filter(products,isCostlyProduct);


function min(list,attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++){
		var value = list[i][attrName];
		if (value < result) result = value;
	}
	return result;
}

function min(list,selectorFn){
	var result = selectorFn(list[0]);
	for(var i=0;i<list.length;i++){
		var value = selectorFn(list[i]);
		if (value < result) result = value;
	}
	return result;
}

max
sum
avg
countBy
any
all
groupBy

var products = [
	{id:1,name : "pen", cost :10, units:70, category : 1 },
	{id:8,name : "hen", cost :90, units:40, category : 2 },
	{id:3,name : "den", cost :40, units:20, category : 1 },
	{id:9,name : "len", cost :60, units:70, category : 2 },
	{id:4,name : "ten", cost :30, units:10, category : 1 },
	{id:6,name : "ken", cost :20, units:90, category : 2 }
]

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
]

join
