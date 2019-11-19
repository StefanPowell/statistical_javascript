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
  block_names = get_block_names(1);
  var a = document.getElementById("cell1_1_2").value;
  for(x=0;x<block_names.length;x++){
    block_values.push(document.getElementById(block_names[x]).value);
  }
  return block_values;
}

function check(){
  get_block_values(1);
}
