 //Object
//Object is collection of variables and Properties
const obj={
  name:'Siddhu',
  id:1,
  email:"siddhu@gmail.com"
}
console.log(obj)


//Unshift adds the value at the starting of the array
//Shift delete the first element in the array
const cinema=['kgf','rrr']
cinema.unshift=('kgf2')
console.log(cinema)
console.log(cinema.shift())


//push and pop 
//push add the element at the last
const names=['Madhu','Pavan','Charan','Jaya']
names.push('Lucky')
//pop will remove the last element of the
names.pop()
console.log(names)

const team=['afreen','prabavathi','bhanu','Madhu','Bhavana']
team.pop()
console.log(team)
team.push()
console.log(team)

//Map:It will return the New array what ever we did it will applicable for complte array
const num=[2,4,6,8,10]
const newArr=num.map(numFunc)
console.log(newArr)
function numFunc(num){
return num*5;
}



//filter:What ever the condition will we give the array it will filter and return the new Array
const ages=[43,23,12,21,343,12,44,9]
const newlist=ages.filter(checkAge)
console.log(newlist)
function checkAge(ages){
return ages>=18;
}