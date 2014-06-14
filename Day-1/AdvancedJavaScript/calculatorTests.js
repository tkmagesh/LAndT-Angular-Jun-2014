window.addEventListener("DOMContentLoaded",function(){
	test("Should be able to add two numbers", function(){
		//arrange
		var n1 = 10,
			n2 = 20,
			expectedResult = 30;

		//act
		var result = add(n1,n2);

		//assert
		return result === expectedResult;
	})
	test("Should be able to add two numbers in string format", function(){
		//arrange
		var n1 = "10",
			n2 = "20",
			expectedResult = 30;

		//act
		var result = add(n1,n2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to treat non numeric values as zero", function(){
		//arrange
		var n1 = "10",
			n2 = "abc",
			expectedResult = 10;

		//act
		var result = add(n1,n2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning numbers", function(){
		//arrange
		var f1 = function(){ return 10;},
			f2 = function(){ return 20;},
			expectedResult = 30;

		//act
		var result = add(f1,f2);

		//assert
		return result === expectedResult;
	})
	test("Should be able to add functions returning numbers in string format", function(){
		//arrange
		var f1 = function(){ return "10";},
			f2 = function(){ return "20";},
			expectedResult = 30;

		//act
		var result = add(f1,f2);

		//assert
		return result === expectedResult;
	})
	test("Should be able to add functions returning functions returning numbers in string format", function(){
		//arrange
		var f1 = function(){ return function(){ return "10";}},
			f2 = function(){ return function(){ return "20";}},
			expectedResult = 30;

		//act
		var result = add(f1,f2);

		//assert
		return result === expectedResult;
	})
	test("Should be able to add array of numbers", function(){
		//arrange
		var numbers1 = [10,20],
			numbers2 = [30,40],
			expectedResult = 100;

		//act
		var result = add(numbers1,numbers2);

		//assert
		return result === expectedResult;
	})
	test("Should be able to add array of numbers in string format", function(){
		//arrange
		var numbers1 = [10,"20"],
			numbers2 = [30,"40"],
			expectedResult = 100;

		//act
		var result = add(numbers1,numbers2);

		//assert
		return result === expectedResult;
	})
	test("Should be able to add functions returning array of numbers in string format", function(){
		//arrange
		var f1 = function(){ return ["10",20];},
			f2 = function(){ return ["30",40];},
			expectedResult = 100;

		//act
		var result = add(f1,f2);

		//assert
		return result === expectedResult;
	})
	test("Should be able to add array of functions returning array of numbers in string format", function(){
		//arrange
		var f1 = function(){ return ["10",20];},
			f2 = function(){ return ["30",40];},
			expectedResult = 100;

		//act
		var result = add([f1,f2]);

		//assert
		return result === expectedResult;
	})
	test("Should be able to add variable length numbers", function(){
		//arrange
		var expectedResult = 100;

		//act
		var result = add(10,20,30,40);

		//assert
		return result === expectedResult;
	})
	test("Should return zero when no arguments are passed", function(){
		//arrange
		var expectedResult = 0;

		//act
		var result = add();

		//assert
		return result === expectedResult;
	})
})