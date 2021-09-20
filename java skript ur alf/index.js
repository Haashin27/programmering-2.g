
let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let ye = document.querySelector('#ye')

console.log("din mor")

const setid = () =>{
    let tid = new Date()

    if (tid.getSeconds() < 30){
        ye.style.backgroundImage = "url('/assets/1.jpg')"
    }else{ye.style.backgroundImage = "url('/assets/2.jpg')"
        }
    



    
ye.style.marginLeft = 1.6*tid.getSeconds() + '%'

    nul =''
    if(tid.getHours()< 10) nul = '0'
    timer.innerHTML = nul+tid.getHours()
    
    nul =''
    if(tid.getMinutes()< 10) nul = '0'
    min.innerHTML = nul+tid.getMinutes()

    nul =''
    if(tid.getSeconds()< 10) nul = '0'
    sek.innerHTML = nul+tid.getSeconds()



}
setInterval(setid, 1000)