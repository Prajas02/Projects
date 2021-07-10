const btn = document.querySelector("#btn")
const ul = document.querySelector("ul")
const title = document.getElementById("title")
const btn1 = document.querySelector("#btn1")

//a function to make table contents
const content = (text)=>{
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

btn.addEventListener("click",()=>{
    itemsarray.push(title.value)
    localStorage.setItem('items' ,JSON.stringify(itemsarray))
    content(title.value)
    title.value = ''
})
//yay finally our local storage
let itemsarray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')):[]
localStorage.setItem('items' ,JSON.stringify(itemsarray))
const data = JSON.parse(localStorage.getItem('items'))

//our loop of content to run again
data.forEach((item) => {
    content(item)
});

//My reset button
btn1.addEventListener("click",()=>{
    localStorage.clear()
    ul.removeChild((document.querySelector("li")))
})

const list = document.querySelector("li")
list.addEventListener("click", ()=>{
    list.style.textDecorationLine = "line-through" 
    list.style.color = "red" 
    setTimeout(() => {
     localStorage.clear()
    ul.removeChild(list)
    }, 3000);
    
})

//on completeing the task then on clciking the task a event will be called


//Notes My ul.removechild was not working because my li was not a global variable so remember if you have to use a variable /object again you have to save it as global variable  . you should always specify list-style-position as inside 


