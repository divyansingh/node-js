//calback fuction
//passing a function to another funtction as anothrt parameter is called callback function
function Sample(param){
    console.log(param)
    return param("div");
}
// var argument =
console.log(Sample(function(name){return name}))