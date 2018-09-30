module.exports = function getZerosCount(number) {
	let result = 0;
	let i = 1;  
	while (Math.floor(number / Math.pow(5, i)) > 0) {
 		result += Math.floor(number / Math.pow(5, i));
    	i++;
 	}
 	return result;
}