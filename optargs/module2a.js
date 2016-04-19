// My JavaScript Module
var Lib = Lib || {};

Lib.Output = (function() {

	// write message
	function Write(msg, element, start, end, color) {
		
		msg = msg || [];
		if (msg.constructor != Array) msg = [msg];
        console.log(msg,msg.length)
		element = element || "message";
		if (!element.nodeType) element = document.getElementById(element);
		if (!element || msg.length == 0) return;
		
		console.log(Math.min(start, msg.length-1));
        console.log(Math.max(0, Math.min(start, msg.length-1)));
        start = Math.max(0, Math.min(start, msg.length-1));
		end = (end ? Math.max(0, Math.min(end, msg.length-1)) : msg.length-1);
		color = color || "#000";
        console.log('Start');
        console.log(start);
        console.log('msg slice');
        console.log(msg.slice(start,end+1));
        console.log('----------');
        a = 1;
        console.log('a = ' + ++a);
        
	
		element.innerHTML += '<p style="color:'+color+'">'+msg.slice(start,end+1).join("--")+'</p>';
	}

	return {
		Write: Write,
		$: Write
	};

}());