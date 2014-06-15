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

function min(list,selector){
	var selectorFn = typeof selector === "function" ? selector : function(item){ return item[selector]};
	var result = selectorFn(list[0]);
	for(var i=0;i<list.length;i++){
		var value = selectorFn(list[i]);
		if (value < result) result = value;
	}
	return result;	
}

min(products,function(p){ return p.cost * p.units;})

function min(list,selector){
	var selectorFn = typeof selector === "function" ? selector : function(item){ return item[selector]};
	var result = selectorFn(list[0]);
	for(var i=0;i<list.length;i++){
		var value = selectorFn(list[i]);
		if (value > result) result = value;
	}
	return result;	
}

function sum(list,selector){
	var selectorFn = typeof selector === "function" ? selector : function(item){ return item[selector]};
	var result = 0;
	for(var i=0;i<list.length;i++){
		var value = selectorFn(list[i]);
		result += value;
	}
	return result;	
}

function avg(list,selector){
	var result = sum(list,selector);
	return result/list.length;	
}

function countBy(list, predicate){
	var result = 0;
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]) === true) ++result;
	return result;
}
function any(list,predicate){
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			return true;
	return false;
}


function all(list,predicate){
	for(var i=0;i<list.length;i++)
		if (!predicate(list[i]))
			return false;
	return true;
}

function groupBy(list,selector){
	var selectorFn = typeof selector === "function" ? selector : function(item){ return item[selector]};
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = selectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

var productsByCategory = groupBy(products,"category");

var productsByCost = groupBy(products,function(p){
   return p.cost > 50 ? "affordable" : "costly"
});

var products = [
	{id:1,name : "pen", cost :10, units:70, category : 1 },
	{id:8,name : "hen", cost :90, units:40, category : 2 },
	{id:3,name : "den", cost :40, units:20, category : 3 },
	{id:9,name : "len", cost :60, units:70, category : 2 },
	{id:4,name : "ten", cost :30, units:10, category : 1 },
	{id:6,name : "ken", cost :20, units:90, category : 3 }
]

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"},
	{id : 3, name : "utensils"}
]

function join(leftList, rightList, keyComparer, transformerFn){
	var result  = [];
	for(var i=0;i<leftList.length;i++)
		for(var j=0;j<rightList.length;j++)
			if (keyComparer(leftList[i],rightList[j]) === 0)
				result.push(transformerFn(leftList[i],rightList[j]));
	return result;
}

var productsWithCategory = join(products,categories,
  function(p,c){ 
      return p.category === c.id ? 0 : (p.category > c.id ? 1 : -1);
  },
  function (p,c){
      return {id : p.id, name : p.name, cost : p.cost, units : p.units, category : c.name};
  });

console.table(productsWithCategory);