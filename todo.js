var input = document.querySelector('.input')
var button = document.querySelector('.button')
var list_items = document.querySelector(".list-items")
var todo_arr=[]
window.onload =() =>{
    todo_arr=JSON.parse(localStorage.getItem('local')) || []
    todo_arr.map((ref) => add(ref))
}
button.addEventListener('click', ()=>{
    if (input.value == ""){
        alert("enter the text")
    }else{
        todo_arr.push(input.value)
        add(input.value)
        input.value =" "
        localStorage.setItem('local',JSON.stringify(todo_arr))
    }
} )
function add(text){
    new_item=document.createElement('p')
    new_item.innerText=text
    list_items.appendChild(new_item)
    new_item.addEventListener('click', (event) =>{
        event.target.style.textDecoration="line-through"
        remove(text)
    } )
    new_item.addEventListener('dblclick', (event) =>{
        event.target.remove()
        // remove(text)
    } )
    console.log(todo_arr);
}

function remove(text){
    let position=todo_arr.indexOf(text)
    if (position > -1){
        todo_arr.splice(position, 1)
    }
    localStorage.setItem('local', JSON.stringify(todo_arr))
}



