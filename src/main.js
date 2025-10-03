import './style.css';
let open = document.getElementById('open')
let close =document.getElementById('close')
let menu = document.getElementById('menu')
open.addEventListener('click',()=>{
    close.classList.toggle('hidden')
    menu.classList.toggle('hidden')
})
close.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
})
const phoneDark = document.getElementById('phone');
const dark = document.getElementById('dark')
// function darkMode(){
//     document.querySelector(html).classList.toggle('dark')
// }
// dark.addEventListener('click',darkMode)
function changeMode(){
    const element = document.querySelector('html').classList
    element.toggle('dark')

}
dark.addEventListener('click',changeMode)
// phoneDark.addEventListener('click',changeMode)
phoneDark.addEventListener('click',(e)=>{
    e.preventDefault()
    const element = document.querySelector('html').classList
    element.toggle('dark')
  menu.classList.toggle('hidden');
})