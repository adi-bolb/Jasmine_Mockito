var Computer = function(monitor) {
	this.monitor = monitor;
}

Computer.prototype.sayHello = function(){
	var helloMessage = 'hello';
	this.monitor.writeLine(helloMessage);
	return helloMessage;	
}

Computer.prototype.sayBye = function sayBye(){
	return 'bye';
}
