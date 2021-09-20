let sekunder = 0

let tid = document.querySelector('#tid')

let footer = document.querySelector('footer')

let knap = document.querySelector('#button')

let main = document.querySelector('main')


const restart = () => {
    sekunder = 0
}

knap.addEventListener('click',restart)




setInterval(()=>{
    
    if(sekunder == 60){
        sekunder = 0
    }

    if (sekunder == 10){
        main.style.backgroundColor = ('orange')
    }

    if (sekunder > 20){
        main.style.backgroundColor = ('blue')
    }

    document.querySelector('footer').style.width = 100/60 * sekunder + '%'

    if (tid.style.borderRadius == '0px'){
        tid.style.borderRadius = '50%'
        footer.style.borderBottomRightRadius = '0%'
        footer.style.borderTopRightRadius = '0%'
    } else{
        tid.style.borderRadius = '0'
        footer.style.borderBottomRightRadius = '1rem'
        footer.style.borderTopRightRadius = '1rem'
    }
    
    tid.innerHTML = sekunder
    sekunder++
}, 1000)


