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
    total_expected = 45;
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

function horizontal_check(){
  console.log();
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

function full_check(){
  isfull = [];
  for(x=1;x<4;x++){
    isfull.push(check_all_numbers(x));
  }
  console.log(isfull);
}
