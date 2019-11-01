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
		//	
	}
}

function descending(values){
	//
}


function std(values){
	//standard deviation
}


function vari(values){
	//variance
}

function parse(func){
	//
}

