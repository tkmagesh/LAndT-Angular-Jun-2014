describe("Greeter",function(){
	it("Should greet the user with good morning", function(){
		var fakeTimeSvc = {
			getTime : function(){

			}
		}
		var fakeMailSvc = {
			sendMail : function(name){

			}
		}
		spyOn(fakeTimeSvc,"getTime").and.returnValue(new Date(2016,10,4,10,0,0));
		spyOn(fakeMailSvc,"sendMail");

		var greeter = new Greeter(fakeTimeSvc,fakeMailSvc);
		var name = "Magesh";
		

		var msg = greeter.greet(name);

		expect(msg).toBe("Hi " + name + ", Good Morning!");
		expect(fakeMailSvc.sendMail).toHaveBeenCalledWith("Magesh");
	});

		/*it("Should greet the user with good evening", function(){
		var fakeTimeSvc = {
			getTime : function(){

			}
		}
		var greeter = new Greeter(fakeTimeSvc);
		var name = "Magesh";
		spyOn(fakeTimeSvc,"getTime").and.returnValue(new Date(2016,10,4,17,0,0));
		var msg = greeter.greet(name);

		expect(msg).toBe("Hi " + name + ", Good Evening!");
	});*/
});