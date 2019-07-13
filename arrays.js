chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,index){
  var newarray = [array(index),...array]
  return newarray
}
function destructivelyAddElementToBeginningOfArray(array,index){
  return [array(index),...array]
}