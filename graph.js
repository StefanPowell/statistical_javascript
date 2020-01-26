// graph .js
// Author : Stefan Powell
// https://github.com/StefanPowell


//use object oriented programming for each graph

//import a javascript file to use functions
importjs = ""
var js = document.createElement("script");
js.type = "text/javascript";
js.src = "./math.js";
importjs.concat(js);

scatter_x = []
scatter_y = []

function resetgraph(){
	document.getElementById('hold').innerHTML = "";
}

function xpoints_stable(count, min_width, max_width){
	axispoint = [];
	start = max_width;
	incr = max_width/count;
	axispoint.push(max_width);
	for(x = 0; x < (count-1); x++){
		start = start - incr;
		axispoint.push(start);
	}
	axispoint.push(min_width);
	return axispoint;
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
	var div_add = "<div class='bar_graph' style='border:5px solid white;background-color:blue;width:" + (bar_width - 2) + "%;height:" + bar_height + "%;'></div>";
  	str = str.concat(div_add);
  }
  div.innerHTML = str;
  document.getElementById('hold').appendChild(div);
}

function bar_graph(y_values){
	var xcount = y_values.length;
	plotbargraph(xcount, y_values);
}

function scatterplot(xvalues, yvalues){
	scatter_x = []
	scatter_y = []
	xvalues_max = getmax(xvalues);
	yvalues_max = getmax(yvalues);
	var points = "";
	for(var z = 0; z < yvalues.length; z++){
		pointx = 100 - ((xvalues[z]/xvalues_max)*100);
		pointy = (yvalues[z]/yvalues_max)*100;
		scatter_x.push(pointx)
		scatter_y.push(pointy)
		var newpoint = "<span style='position:fixed;top:"+pointy+"%;left:"+pointx+"%;' class='dot'></span>";
		points = points.concat(newpoint);
	}
	innerhtml = document.getElementById('hold').innerHTML;
	document.getElementById('hold').innerHTML  = innerhtml.concat(points);

	//set x axis
	perc = []
	for(i=10; i<100; i+=20){n = percentage(i, xvalues_max);perc.push(n);}
	x_axis(perc[0], perc[1], perc[2], perc[3], perc[4]);

}

function linegraph(values){
	document.getElementById('hold').style = "border:1px solid red;";
	document.getElementById("lineg").style.display = "block";
	//max 200 min 0
	var x_increments = 200/values.length; //increments do not use extreme ends, need to make sure they use ends
	x_points = [];
	for(var i = 0; i < values.length; i++){
		push_value = 200 - (x_increments*i);
		x_points.push(push_value)
	}
	max_value = getmax(values);
	y_points = []
	for(var j = 0; j < values.length; j++){
		y_points.push( ((values[j]/max_value)*100) );
	}
	var all = "";
	for (var i = 0; i < values.length; i++) {
				xy = x_points[i].toString() + "," + y_points[i].toString() + " ";
				all = all.concat(xy);
	}
	document.getElementById("poly").setAttribute('points', all );
}

function x_axis(x1, x2, x3, x4, x5){
	document.getElementById('x1').innerHTML  = (x1.toString());
	document.getElementById('x2').innerHTML  = (x2.toString());
	document.getElementById('x3').innerHTML  = (x3.toString());
	document.getElementById('x4').innerHTML  = (x4.toString());
	document.getElementById('x5').innerHTML  = (x5.toString());
}

function add_regression(){
	document.getElementById('hold').style = "border:1px solid red;";
	document.getElementById("lineg").style.display = "block";
	linear_points = "";
	linear_regression = linear_regression(scatter_x, scatter_y);
	linear_line = linear_regression[0].toString() + " " + linear_regression[1].toString() + " " + linear_regression[2].toString()
	linear_points = linear_points.concat(linear_line);
	document.getElementById("poly").setAttribute('points', linear_points);
}

function pie_chart(){
	//
}

function histogram(){
	//
}
