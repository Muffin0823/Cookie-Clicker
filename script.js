let count = 0;

let cookie = document.querySelector('button')
let c = document.querySelector('h1')
cookie.addEventListener('click', add)
function add(){
    count=count+1
    c.innerHTML= count
    console.log()
}