//graph .js
function getmax(values){
	max = 0;
	for(var t = 0; t < values.length; t++){
		if(values[t] > max){
			max = values[t];
		}
	}
	return max;
}

function plotbargraph(barscount, y_values) {
  var bar_width = 100/barscount;
  var max_height = getmax(y_values);
  const div = document.createElement('div');
  div.className = 'graph';
  var str = "";
  for(var x = 0; x < barscount; x++){
	var bar_height = (y_values[x]/max_height)*100;
	var margintop = 100 - bar_height;
	var div_add = "<div class='bar_graph' style='border:5px solid white;background-color:red;width:" + (bar_width - 2) + "%;height:" + bar_height + "%;'></div>";
  	str = str.concat(div_add);
  }
  div.innerHTML = str;
  document.getElementById('hold').appendChild(div);  
}

function bar_graph(x_values, y_values){
	var xcount = x_values.length;
	var ycount = y_values.length;
	plotbargraph(xcount, y_values);
}

function pie_chart(){
	//
}

function histogram(){
	//
}




