
var total_expected = 45;

function get_block_names(x){
  block_names = []
  while(block_names.length < 9){
   cell_name = "cell" + x.toString() + "_";
    for(i=1;i<4;i++){
     cell_name = cell_name.concat(i.toString() + "_");
      for(j=1;j<4;j++){
       cell_name = cell_name.concat(j.toString());
       block_names.push(cell_name);
       delete cell_name;
       cell_name = "cell" + x.toString() + "_" + i.toString() + "_";
      }
    delete cell_name;
    cell_name = "cell" + x.toString() + "_";
   }
  }
  return block_names;
}

function get_block_values(x){
  block_values = []
  block_names = get_block_names(x);
  for(x=0;x<block_names.length;x++){
    block_values.push(document.getElementById(block_names[x]).value);
  }
  return block_values;
}

function check_all_numbers(x){
  try{
    numbers = get_block_values(x);
    number_check = false;
    total_sum = 0;
    for(h = 0; h < numbers.length; h++){
      total_sum = total_sum + parseInt(numbers[h]);
    }
    if(total_sum == total_expected){number_check = true;}
  }catch(error){
    console.log(error);
    number_check = false;
  }
  return number_check;
}

function check_row(array_cells){
  total = 0
  for(n=0;n<array_cells.length;n++){
    total = total + parseInt(document.getElementById(array_cells[n]).value);
    document.getElementById(array_cells[n]).style.borderColor = "red";
  }
  if(total == total_expected){
    return true
  }
  else{
    return false
  }
}


function horizontal_check(){
  get_rows_array = []
  check_values =   []
  rows = [1, 4, 7, 2, 5, 8, 3, 6, 9]
  i = 1
  incr = 3
  while(i<2){
    end = i*incr
     for(c=1;c<4;c++){	                  //last digit
      for(b=(end-incr); b<end; b++){ 	    //first digit
        for(a=1; a<4; a++){			          //second digit
  		      value = "cell" + rows[b].toString() + "_" + a.toString() + "_" + c.toString()
  		      get_rows_array.push(value)
  	    }
      }
      console.log(get_rows_array);
      checked = check_row(get_rows_array);
      check_values.push(checked)
      get_rows_array = []
      i = i + 1
    }
 }
 console.log(check_values);
}


function vertical_check(){
  console.log();
}
//loop through all block_names 1-9
//make sure that all blocks are full - can put in check_all_numbers
//make sure that all blocks values combined equals 45
//do horizantal
//do vertical check
//make sure

function show_message(){
  document.getElementById("message_box").innerHTML = "Empty Cells Found";
}

function full_check(){
  
  isfull = [];
  keep_track = true;

  for(x=1;x<10;x++){
    isfull.push(check_all_numbers(x));
  }
  for(i=0; i < 9; i++)
  {if(isfull[i] == false){show_message();keep_track = false;}}

  if(keep_track == true){
    console.log("all populated");
  }

}
