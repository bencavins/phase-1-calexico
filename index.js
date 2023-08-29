// Write your code here...
const menuItemsDiv = document.querySelector('#menu-items')
const dishImg = document.querySelector('#dish-image')
const dishName = document.querySelector('#dish-name')
const dishDesc = document.querySelector('#dish-description')
const dishPrice = document.querySelector('#dish-price')
const cartForm = document.querySelector('#cart-form')
const cartNumSpan = document.querySelector('#number-in-cart')

fetch("http://localhost:3000/menu")
.then(resp => resp.json())
.then(data => {
    // loop through menu items
    data.forEach(menuItem => {
        // create span
        const span = document.createElement('span')
        // put name in span
        span.textContent = menuItem.name
        // attach span to div
        menuItemsDiv.append(span)

        span.addEventListener('click', event => {
            renderMenuItem(menuItem)
        })
    })

    // render first menu item
    renderMenuItem(data[0])
})

function renderMenuItem(menuItem) {
    dishImg.src = menuItem.image
    dishName.textContent = menuItem.name
    dishDesc.textContent = menuItem.description
    dishPrice.textContent = menuItem.price
}

cartForm.addEventListener('submit', event => {
    event.preventDefault()
    
    const currNum = cartNumSpan.textContent
    const numToAdd = event.target[0].value
    
    const newTotal = parseInt(currNum) + parseInt(numToAdd)
    cartNumSpan.textContent = newTotal
})