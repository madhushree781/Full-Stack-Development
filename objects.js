//message objects
var mess={
  a:"hello",b:['x','y','z'],c:[2,4,6]

};
console.log(mess['b'][2]);
//changing key attribute
mess['b']=['p','q','r']
console.log(mess['b']);

//object with key value pair
var carInfo={
  brand:"toyota",
  year:2021,
  model:"fortuner"
};
alert("my carInfo is brand: "+carInfo.brand+" year: "+carInfo.year+" model: "+carInfo.model);

//excercise 3 employee objects with name,job,age add a method called lastName which prints lastName in console
var employee={
  firstName:"John",
  lastName:"Doe",
  job:"Data Scientist",
  age:25
};
employee.name=function(){
  return this.lastName;
};
console.log(employee['lastName']);

/*var employee={
  employeename:"madhu shree",
  job:"full stack web intern",
  age:21
};
employee.name=function(){
  return this.namelength;
};
console.log(employee[employeename.length]);*/

//excercise 2 employee object with name, job, age will create an alert in the browser for each key value pair
var employee={
  employeename:"madhu shree",
  job:"full stack web intern",
  age:21
};
alert("employee details are "+"employeename: "+employee.employeename+ " job: "+employee.job+" age: "+employee.age);
