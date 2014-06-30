describe("myApp",function(){
	beforeEach(module('myApp'));
	beforeEach(function(){
		console.log("myApp - beforeEach");
	});


	describe("testController",function(){
		var scope, controller;
		beforeEach(inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			controller = $controller;

		}));

		it("msg is initialized by default",function(){
			controller("testController",{$scope : scope});
			expect(scope.msg).toBe("Testing angular");
		});	
	});
	describe("testing BeforeEach of myApp",function(){
		it("dummy",function(){
			expect(true).toBe(true);
		});
	});
});