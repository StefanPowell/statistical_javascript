function mean(values){
	total = 0;
	for(var i=0; i < values.length; i++){
		total = total + values[i];
	}
	return (total/values.length);
}
