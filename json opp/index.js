

let people = [
    {
        name: 'Nagib',
        surname: '',
        hobbies: ['sej', 'mega sej', 'super sej', 'giga sej'],
        powerLevel:['power level: >900000'],
       
    },{
        name: 'batman',
        surname: '',
        hobbies: ['har en powerlevel laver end nagib'],
        powerLevel:['power level: <900000'],
       
    },{
        name: 'superman',
        surname: '',
        hobbies: ['har en powerlevel laver end nagib'],
        powerLevel:['power level: <900000'],
       
    },{
        name: 'aquaman',
        surname: '',
        hobbies: ['har en powerlevel laver end nagib'],
        powerLevel:['power level: <900000'],
       
    },{
        name: 'iron man',
        surname: '',
        hobbies: ['har en powerlevel laver end nagib'],
        powerLevel:['power level: <900000'],
       
    },{
        name: 'goku',
        surname: '',
        hobbies: ['har også en power level som er over 900000'],
        powerLevel:['power level: >900000'],
       
    },{
        name: 'hulk',
        surname: '',
        hobbies: ['har en powerlevel laver end nagib'],
        powerLevel:['power level: <900000'],
       
    },{
        name: 'flash',
        surname: '',
        hobbies: ['har en powerlevel laver end nagib'],
        powerLevel:['power level: <900000'],
       
    },
]
























people.map( person => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>' + person.name + ' ' + person.surname + '</h1>' 
    htmlString += '<p>' + person.hobbies.join(', ') + '</p>'
    htmlString += '<p>' + person.powerLevel +(', ') + '</p>'
    
 
    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
} )