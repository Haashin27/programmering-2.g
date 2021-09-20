
let main = document.querySelector('main');
let button = document.querySelector('#button');


main.style.backgroundImage = 'url("./assets1/din1.jpg")'


const skiftBillede = () => {

    main.style.backgroundImage = 'url("./assets1/din1.jpg")'
}

button.addEventListener('click', skiftBillede);



if(main.style.backgroundImage == 'url("./assets1/din1.jpg")'){
    main.style.backgroundImage = 'url("./assets1/din2.jpg")'
}else{
    main.style.backgroundImage = 'url("./assets1/din3.jpg")'
   } 