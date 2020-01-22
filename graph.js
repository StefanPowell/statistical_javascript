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

function resetgraph(){
	document.getElementById('hold').innerHTML = "";
}

function plotbargraph(barscount, y_values) {
	//takes the number of bars and the array of their values
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

function scatterplot(xvalues, yvalues){
	//takes an array of x and y values
	document.getElementById('hold').style = "border:1px solid red;";
	xvalues_max = getmax(xvalues);
	yvalues_max = getmax(yvalues);
	var points = "";
	for(var z = 0; z < yvalues.length; z++){
		pointx = 100 - ((xvalues[z]/xvalues_max)*100);
		pointy = (yvalues[z]/yvalues_max)*100;
		var newpoint = "<span style='position:fixed;top:"+pointy+"%;left:"+pointx+"%;' class='dot'></span>";
		points = points.concat(newpoint);
	}
	document.getElementById('hold').innerHTML = points;
}

function linegraph(){
	//use scatterplot but with restrictions and add lines
	document.getElementById('hold').style = "border:1px solid red;";
	document.getElementById("lineg").style.display = "block";
	document.getElementById("poly").setAttribute('points', "0,0 0,100" );
}

function pie_chart(){
	//
}

function histogram(){
	//
}
