function Greeter(timeService, mailService){
	this.timeService = timeService;
	this.mailService = mailService;
}
Greeter.prototype.greet = function(name){
	console.log(this.timeService.getTime());
	this.mailService.sendMail(name);
	if (this.timeService.getTime().getHours() < 12)
		return "Hi " + name + ", Good Morning!";
	return "Hi " + name + ", Good Evening!";
}