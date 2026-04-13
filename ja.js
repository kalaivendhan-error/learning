
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