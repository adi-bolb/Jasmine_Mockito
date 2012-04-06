var computer;
var monitorMock;

describe('Computer', function () {
	beforeEach(function() {
	this.monitorMock = mock(Monitor);
    this.computer = new Computer(this.monitorMock);
  });

	describe('when opened', function(){
		it('says hello', function () {
			var helloMessage = this.computer.sayHello();

			expect(helloMessage).toEqual('hello');
		  });

		it('writes hello to monitor', function() {
			this.computer.sayHello();

			verify(this.monitorMock).writeLine('hello');
		});
	});

	it('says bye on close', function(){
		var byeMessage = this.computer.sayBye();
	
		expect(byeMessage).toEqual('bye');
	});
});
