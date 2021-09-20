let main = document.querySelector('main')
let input = document.querySelector('#input')


const addcard = name => {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    let NewH = document.createElement('h1')
    NewH.innerHTML = name
    newCard.append(NewH)
    main.append(newCard)

}

addcard('ib-Michael')
//arrays med tekst
let names = ['andreas', 'theis', 'frederik', 'mie', 'bjarke', 'nagib','sofus','marius', 'emil', 'simon-bin']


let numbers = [1,23,32,24,52,32,34,234]

// names = [...names,...numbers]


names.map( name => addcard(name))




input.addEventListener('input', () => {
    let results = names.filter(name => name.toLowerCase().includes(input.value.toLowerCase()))
    main.innerHTML = ''
    results.map (name => addcard(name))
})








// //Her er et for loop
// for(let i = 0; i < names.length; i++){

//     console.log(names[i])
// }