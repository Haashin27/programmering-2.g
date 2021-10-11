// javascript
let body = document.querySelector('body')
let main = document.querySelector('main')
let search = document.querySelector('#search')


console.log('d')

let namelist = ['ridder', 'dronning', 'konge', 'tårn', 'paven', 'bonde']

const makeCards = array => {
    array.map( name => {
        let card = document.createElement('div')
        card.classList.add('card') 

        let top = document.createElement('div')    
        top.classList.add('top')

        let bottom = document.createElement('div')    
        bottom.classList.add('bottom')

        let h = document.createElement('h1')
        h.innerHTML = name
        
        let p = document.createElement('p')
        p.innerHTML = ' ---- <br>-----'

        
        
        top.append(h)
        bottom.append(p)
        card.append(top)
        card.append(bottom)
        
        main.append(card) 
    })    
}

makeCards(namelist)

search.addEventListener('input', () => {
    //console.log(search.value)
    let results = namelist.filter( name => name.includes( search.value ) )
    //console.log(results)
    main.innerHTML = ''
    makeCards(results)  
})