let nav = document.getElementById("nav")
//
let home = document.getElementById("home")
let imges = document.getElementById("imges")
let fanju = document.getElementById("fanju")
let item = document.getElementById("item")
//
let navBox = document.querySelector('.nav-box')

console.log(nav)

home.addEventListener("mouseover", ()=>{
    nav.style.opacity = '1'
    nav.style.right = '260px'
})

imges.addEventListener("mouseover", ()=>{  
    nav.style.opacity = '1'
    nav.style.right = '170px'
})

fanju.addEventListener("mouseover", ()=>{
    nav.style.opacity = '1'
    nav.style.right = '80px'
})

item.addEventListener("mouseover", ()=>{
    nav.style.opacity = '1'
    nav.style.right = '-10px'
})

navBox.addEventListener("mouseout" ,()=>{
    nav.style.opacity = '0'
})

