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

function getmax(values){
	max = 0;
	for(var t = 0; t < values.length; t++){
		if(values[t] > max){
			max = values[t];
		}
	}
	return max;
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

function summ(values){
	sum = 0;
	for(var z = 0; z < values.length; z++){
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

function square(x){
	return x*x;
}

function percentage(p, tot){
	return (tot/100)*p;
}

function linear_regression(x_var, y_var){
	mean_x = mean(x_var);
	mean_y = mean(y_var);
	// x - x^bar var x_xbar
	// y - y^bar var y_ybar
	// square x^bar is  x_xbar_sq
	// xy_bar  = x_xbar * y_ybar
	x_xbar = []
	for(c=0; c < x_var.length; c++){x_xbar.push((x_var[c] - mean_x))}
	y_ybar = []
	for(c=0; c < y_var.length; c++){y_ybar.push((y_var[c] - mean_y))}
	x_xbar_sq = []
	for(c=0; c < x_var.length; c++){x_xbar_sq.push(square(x_xbar[c]))}
	xy_bar = []
	for(c=0; c < y_var.length; c++){xy_bar.push((x_xbar[c] * y_ybar[c]))}

	b1 = summ(xy_bar)/(summ(x_xbar_sq));
	// mean_y = b0 + (b1 * x_var	) b0 is y-intercept
	b0 = mean_y - (b1 * mean_x);

	linear_startpoint = [0, b0];
	linear_midpoint = [mean_x, mean_y];
	linear_endpoint = [getmax(x_var), (b0 + (b1*getmax(x_var)))]

	point_coor = [];
	point_coor.push(linear_endpoint);
	point_coor.push(linear_midpoint);
	point_coor.push(linear_startpoint);

	return point_coor;
}
