import './style.css'
let open = document.getElementById('open')
let close =document.getElementById('close')
let menu = document.getElementById('menu')
open.addEventListener('click',()=>{
    close.classList.toggle('hidden');
    menu.classList.toggle('hidden')

})
close.addEventListener('click',()=>{
    close.classList.toggle('hidden');
    menu.classList.toggle('hidden');
})
let dark = document.getElementById('dark');
let phoneDark = document.getElementById('phone')
function changeMode(){
    const element = document.querySelector('html').classList
    element.toggle('dark')
}
dark.addEventListener('click',changeMode)
phoneDark.addEventListener('click',()=>{
    const element = document.querySelector('html').classList
    element.toggle('dark')
  menu.classList.toggle('hidden');
})
console.log(phoneDark)
console.log(dark)