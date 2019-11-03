//math.js

function mean(values){
	total = 0;
	for(var i=0; i < values.length; i++){
		total = total + values[i];
	}
	return (total/values.length);
}

function median(values){
	//check if they are ordered properly
		//if not ordered properly
			//oreder properly
	//find the medain
}

function fact(num){
	var s = 1;
	for(var m = num; m != 0; m--){
		s = s * m;
	}
	return s;
}

function summ(func, start, end){
	//need to parse the functions
	sum = 0;
	for(var z = start; z < end; z++){
		sum = sum + values[z];
	}
	return sum;
}

//fix mode
function mode(values){
	array_number = [];
	array_count = [];
	for(var x = 0; x < values.length; x++){
		if(array_number.includes(values[x])){
			array_count[x] = array_count[x] + 1;
		}
		else{
			array_number[x] = values[x];
			array_count[x] = 1;
		}
	}
	return array_count;
}

function ascending(values){
	for(var j=0; j < values.length; j++){
		//use one type of sort
	}
}

function descending(values){
	//use another type of sorying algorithm
}


function vari(values){
	//standard deviation
	var meanval = mean(values);
	for(var a = 0; a < values.length; a++){ //value - mean calculation
		values[a] = values[a] - meanval;
		values[a] = Math.pow(values[a], 2); //square calculation
	}
	//summate
	var summate = 0;
	for(var b = 0; b < values.length; b++){
		summate = values[b] + summate;
	}
	var val = summate/(values.length - 1);
	return val;
}


function std(values){
	//check for errors
	//need to fix
}

function curry(func, values){
	//
}

