let open = document.querySelector("#open")
let close = document.querySelector("#close")
let modal = document.querySelector("#modal")


open.addEventListener("click",()=>{
    modal.classList.add("opencontent")
})
close.addEventListener("click",()=>{
    modal.classList.remove("opencontent")
})