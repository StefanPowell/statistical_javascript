//math.js
// Author : Stefan Powell
// https://github.com/StefanPowell

function mean(values){
	total = 0;
	for(var i=0; i < values.length; i++){
		total = total + values[i];
	}
	return (total/values.length);
}

function median(values){
	//values should be arranged from smallest to largest
	if(values.length%2 != 0){
			var position = (((values.length-1)/2)+1);
			return values[position-1];
	}else{
			var position = ((values.length)/2);
			return ((values[position-1] + values[position])/2);
	}
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

function swap(array, l_index, s_index){
	new_array = [];
	for(var y = 0; y < array.length; y ++){
		if(y == l_index){
			new_array[y] = array[s_index];
		}
		else if(y == s_index){
			new_array[y] = array[l_index];
		}
		else{
			new_array[y] = array[y];
		}
	}
	return new_array;
}


function ascending(values){
	keep_check = 0
	for(var j=0; j < values.length; j++){
		if(values[j] > values[j+1]){
			values = swap(values, j-1, j)
		}else{
			keep_check = keep_check + 1
		}
	}
	if(keep_check != values.length){
		return values*ascending(values)
	}
	return values
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

function fact(num){
	var s = 1;
	for(var m = num; m != 0; m--){
		s = s * m;
	}
	return s;
}

function perm(n, r){
	return (fact(n)/fact(n-r));
}

function comb(n, r){
	return(perm(n, r)/fact(r));
}

function binom(n, x, p){
	return(comb(n,x)* Math.pow(p, x) * Math.pow((1-p), (n-x)));
}

function geodist(p, k){
	return(p * Math.pow((1-p), (k-1)));
}

function hypergeo(K, k, N, n){
	return( (comb(K,k) * comb((N-K), (n-k))) / comb(N, n) );
}

function curry(func, values){
	//
}
