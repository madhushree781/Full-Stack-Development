var student = []
function addNew(){
  var newName = prompt("add name");
  student.push(newName)
}
function remove(){
  var remName = prompt("remove name");
  var index = student.indexOf(remName);
  student.splice(index,1)
}
function display(){
  console.log(student);
}
var start = prompt("display");
var request = "empty";

if (start === "y") {
  while (request !== "quit") {
    request = prompt("select an action: add, remove, display, or quit.")
    if (request === "add") {
      addNew();
    }else if (request === "display") {
      display();
    }else if (request == "remove") {
      remove();
    }
  }
}
alert("Thanks for using the Web App!.")
