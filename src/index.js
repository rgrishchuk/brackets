module.exports = function check(str, bracketsConfig) {
	let brackets = {};
	bracketsConfig.forEach((item) =>{ 
		brackets[item[1]] = item[0];
	});
	resArray = [];
	for (let i = 0; i < str.length; i++) {
		if (i == 0) resArray.push(str[0])
		else {
			if (resArray.length !=0 && resArray[resArray.length - 1] == brackets[str[i]]) {
				resArray.pop();
			} else {
				resArray.push(str[i]);
			}	
		}	
	}
	return resArray.length == 0;
}
