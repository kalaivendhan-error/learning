
// var entire=document.querySelector(".entire")
// var gp=document.querySelector("#grandparent")
// gp.addEventListener( 'click' , (event) => {
//     var new_element=document.createElement("h1")
//     new_element.textContent="by clicking grandparent element"
//     entire.append(new_element)
//     console.log("grandparent clicked")
// },{once: true})

// const { createElement } = require("react")

// const { isValidElement } = require("react")




// let add = (a,b) => a+b
// let sub = (a,b) => {return (a-b)}

// function operation(op, a, b){
//     return op(a,b)
// }
// let result=operation(div, 10, 5)
// console.log(result)






//                    <!-- Promises Syntax -->

// let p= new Promise((resolve, reject) =>
// {
//     let a = 1 + 2
//     if (a==2){
//         resolve('success')
//     }
//     else{
//         reject("failed")
//     }
// } )

// p.then((message) => {
//     console.log("this is correct " + message)})
//     .catch((message)=>{
//         console.log("this is wrong " + message)
//     })






// const userLeft = true
// const userWatchCat = false

// function watchTutorials(noerrorcall, errorcall ){
//     if (userLeft){
//         errorcall({
//             name: 'user left',
//             message: ':('
//         })
//     }
//     else if(userWatchCat){
//         errorcallback({
//             name: 'user watching cat',
//             message: 'watching cat vedios'
//         })
//     } else{
//         callback('thumbs up and subscribe')
//     }
// }

// watchTutorials((msg) =>{
//     console.log('success ' + msg.name)
// }, (error) => {
//     console.log(error.name+ " " + error.message )
// }
// )





//             TUTORIALS CALLBACKS
// const is_nisha_calling= true
// const is_mullai_calling= false
// // const mullai= false
// function calling(call, nocall){
//   if (is_mullai_calling){
//     call({
//         name: 'mullai',
//         relation: 'friend'})
//   }else if(is_nisha_calling){
//     call({
//         name: 'nisha',
//         relation: 'girlfriend'})
//   }else{
//     nocall("No one is calling : ")
//   }
// }

// calling((goodnews)=>{
//     console.log(goodnews.name+ ' '+goodnews.relation + " is calling")},
// (badnews) =>{
// console.log(badnews)
// })




//             PROMISES
// const is_nisha_calling= false
// const is_mullai_calling= false
// function tutorialPromise(){
// return new Promise((resolve, reject)=>{
//      if (is_mullai_calling){
//     resolve({
//         name: 'mullai',
//         relation: 'friend'})
//   }else if(is_nisha_calling){
//     resolve({
//         name: 'nisha',
//         relation: 'girlfriend'})
//   }else{
//     reject("No one is calling : ")
//   }

// })}

// tutorialPromise().then((resolve) => {console.log(resolve.name)})
// .catch((reject) => {console.log(reject)})





//                 TUTORIAL FOR ASYNC AND AWAIT

// async function fn(){
//     if (false){
//         return 'error'
//     }
//     else  return "no error"
// }
// console.log(fn())
// fn().then((msg)=> {
//     console.log(msg)})  //then fn only used for async fn $(resolve)
// .catch((msg) => {console.log(msg)}) //catch fn not used for async fn $(no reject)


// var calling = new Promise((resolve,reject) =>{
//     kalai=true
//     if (kalai){
//         setTimeout(resolve,2000, "error reached")
//     }else{
//         reject('error not reached')   
//     }
// }
// )
// calling.then((msg)=>console.log(msg))  .catch((msg)=> console.log(msg))

// async function called(){
//     try{
//         result=await calling
//         console.log(result)
//     }
//     catch(err){console.log(err)}
// }
// called()


// async await is the alternate source of Promise's then() catch()






//             ERROR HANDLING $(Try, Catch, Throw{finally})

// try{
//     var a=10;
//     var b="kalai"
//     var result=a+Number(b)
//     // console.log(result)
//     if (isNaN(result))
//         throw "enter a valid syntax" 
// }
// catch(msg){console.log(msg)}
// finally{console.log('code runnign successfully')}




//                 FETCHING   API

// console.log(fetch("https://api-thirukkural.vercel.app/api?num=3"))
// fetch("https://api-thirukkural.vercel.app/api?num=3")
// .then((tot) => tot.json())
// .then((msg) => msg.message)
// console.log(fetch("https://api.getfestivo.com/v3/public-holidays/list?country=IT&regions=IT-MILAN&year=2026"))

// console.log(fetch("https://api.dictionaryapi.dev/api/v2/entries/en/<word>"))
// fetch("https://api.dictionaryapi.dev/api/v2/entries/en/error")
// .then((tot) => tot.json())
// .then((msg) => console.log(msg[0].meanings[1].definitions[0].definition))
// .then((msg) => console.log(msg[0].word))
// .catch((err) => console.log(err))

// GET, POST, PUT

// fetch('https://jsonplaceholder.typicode.com/todos',{
//     method: 'POST',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify({
//         userId: 41,
//         id: 6041,
//         title: "error",
//         completed: true,
//         userName:'kalai'
//     })
//     }
// )
//       .then(response => response.json())
//       .then(jsons => console.log(jsons.userName))




//MAP FUNCTIONS ${does not change the real value}
// var num=[1,2,3,7,4,6]
// num.map((no)=> console.log(no*no))
// num.map((no)=> {
//     var ad =document.createElement('li')
//     ad.innerHTML= no
//     document.querySelector(".ul").append(ad)
//     // var ul=document.querySelector(".ul")
//     // ul.innerHTML=`<li>${no}</li>`
// })


//FOR EACH ${does not change the real values}
// var num=[0,2,3,7,4,6]
// result={
//     1:'error',
//     name:'kalai'}
// num.forEach((no,index)=> {
//     result[no]=no
// })
// console.log(result)
// var add =num.map((no)=> `<li>${no}</li>`)
// .join('')
// var ad =document.createElement('li')
// ad.innerHTML= no
// document.querySelector(".ul").innerHTML=add
// console.log(add)



//FILTERS
// var num=[1,2,3,7,4,6,-1,-5]
// result={name:'kalai'}
// var new_num=num.filter((no, index) =>{
//     result[index]=no    
//     return no<0
//     // return no>0
// })
// console.log(result)
// console.log(new_num)


// var num=[1,2,3,8,4,6,-1,-5]
// var output=num.filter(no => no>0).reduce((acc,cno) =>{return acc + cno})
// console.log(output)




// var arr =['a','f','d','a','h','u','d','m','h']
// var result= arr.reduce((accumulator, alpha) => { 
//         if (accumulator[alpha]){
//         accumulator[alpha]++
//     }else{
//         accumulator[alpha]=1
//     }
//     return accumulator

// },{});
// console.log(result)


// var newvalue=['1','2','3']
// newvalue.map(n => console.log(n*n))
// newvalue.forEach(n => console.log(n*n))





//MAP fn and SET fn

// var newvalue=[1,2,3]
// var newset=  new Set (newvalue)
// newset.add(2)
// newset.add(4)
// newset.delete(1)
// console.log(newset.has(4))
// console.log(newset.size)
// console.log(newset)
// console.clear()

// var new_map=  new Map ()
// new_map.set('a',1)
// new_map.set('b',2)
// console.log(new_map)

// for (let i of new_map){
//     console.log(i)
// }
// for (let [k,v] of new_map){console.log(`${k} is the key of value ${v}`)}

// new_map.forEach((k,v) =>{
//     console.log(`${k} is the key of value ${v}`)
// })
// console.log(new_map.keys())
// console.log(new_map.values())




//             // getters and setters method
// var object = {
//     name: 'kalai',
//     age: 20,
//     statu: 'studing',
//     hobby: ['handball', 'cricket', 'batmiton'],
//     get updates(){
//         return `getters and setters are working successfully`
//     },
//     set updates(value) {  //set methods has value as a parameter{required}
//         this.hobby.push(value[0])
//         this.hobby.push(value[1])
//         this.name=value[2]
//     },


// }
// object.name='error'
// object.updates=['target ball', 'valley ball','kalaivendhan']
// console.log(object.updates)
// console.log(object)
// console.clear()


// function add(a,b){
//     this.A=a
//     this.B=b
//     console.log(A+B)
// }
// add(2,1)


            //adding protype funnctions
// function fun(name,age) {
//     this.name = name
//     this.age = age
// }
// fun.prototype.welcome=function(){ //adding prototype funtion
//     console.log('you are welcome')
// }
// fun.prototype.nickname='kalai'
// let uers1= new fun('error', 20)
// uers1.welcome()
// console.log(uers1)
// console.log(uers1.nickname)



                //class
// class Users {
//     static totalUser = 0
//     constructor(name, age) {
//         this.name = name   // instances varible
//         this.age = age
//         Users.totalUser++
//     }
//     static count() {
//         return `total no. of users is ${Users.totalUser}`
//     }  //referred as common varibale

//     login() {
//         return `hi ${this.name}`
//     }
//     logout() {
//         return 'thank you visit again'
//     }

// }

// class PaidUsers extends Users { //Inheritance class {derived cls or sub cls}
//     constructor(name, age) {
//         super(name, age);
//         // this.name=name;
//         // this.age=age
//         this.storage = '100GB';
//     }
//     login() {
//         console.log(`hi ${this.name} sir !!`) //over riding for paid Users
//         return this  //'this' return the object again
//     }
//     logout() {
//         return "thanks for visiting sir"
//     }
//     fun() {
//         console.log('your are able to use the premium access')
//     }
// }

// let user_1 = new Users('kalai', 20)
// let user_2 = new Users('mullai', 20)
// let user_3 = new Users('vicky', 20)
// let user_4 = new PaidUsers('error', 21)
// console.log(user_4.login().logout()) //method chaning


            //import and export module
import {movement as move,stand as st, walk} from "./for_ja.js"
let man_1= new move()
man_1.run()
st()
walk()
