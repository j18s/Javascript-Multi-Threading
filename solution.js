self.onmessage=function(event) {	
	var text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore t dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	var arrOfWords=text1.split (" ");
	// console.log('length of our para: '+arrOfWords.length)	;	
	var tempStr="";
	var index;
	for (var i = 1; i <= event.data; i++) {
		index= Math.floor(Math.random()*arrOfWords.length);
		// console.log(index);
		tempStr+=" "+arrOfWords[index];
		self.postMessage({percent:showProgress(i,event.data)})
	}
	self.postMessage({showText:tempStr,percent:100});
}

function showProgress(current,maximum)
{
	return (current*100/maximum);
}