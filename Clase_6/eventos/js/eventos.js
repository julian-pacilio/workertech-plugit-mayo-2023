"use strict"

let button_1 = document.getElementById('button_1')
let button_2 = document.getElementById('button_2')
let button_form = document.querySelector("button[type='submit']")

button_1.addEventListener('click', (e) => {
    // console.log(event)
    // console.log(event.target)
    console.log('Mostrar')

    document.querySelector('#elementos').style.display = 'block'

    let items = document.querySelectorAll('.item')
        items.forEach((item, index) => {
            console.log(index, item)
            item.style.border = '1px solid red';
            item.style.width = '100px';
            item.style.height = '100px';
        })
})

button_2.addEventListener('click', (e) => {
    console.log('Ocultar')
    document.querySelector('#elementos').style.display = 'none'
})

button_form.addEventListener('click', (e) => {
    e.preventDefault();
    
    console.log(e.target)
})



// let items = document.querySelectorAll('.item')
//     // console.log(items)

//     items.forEach((item, index) => {
//         console.log(index, item)
//         item.style.border = '1px solid red';
//         item.style.width = '100px';
//         item.style.height = '100px';
//     })

    // items[0].style.border = '1px solid red';
    // items[0].style.width = '100px';
    // items[0].style.height = '100px';

    // items[1].style.border = '1px solid red';
    // items[1].style.width = '100px';
    // items[1].style.height = '100px';

    // items[2].style.border = '1px solid red';
    // items[2].style.width = '100px';
    // items[2].style.height = '100px';

    // items[3].style.border = '1px solid red';
    // items[3].style.width = '100px';
    // items[3].style.height = '100px';





