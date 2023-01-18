// Write your code here...
let firstMenuItem;

fetch('http://localhost:3000/menu')
    .then(resp => resp.json())
    .then(menuItems => menuItems.forEach(menuItem => {
        firstMenuItem = menuItems[0]

        const menuItemSpan = document.createElement('span')
        menuItemSpan.textContent = menuItem.name

        // Challenge #3
        menuItemSpan.addEventListener('click', (event) => {
            renderMenuItem(menuItem)
        })
        
        document.querySelector('#menu-items').append(menuItemSpan)
    }))
    .then(() => {
        renderMenuItem(firstMenuItem)
    })

function renderMenuItem(menuItem) {
    const img = document.querySelector('#dish-image')
    img.src = menuItem.image

    const dishH3 = document.querySelector('#dish-name')
    dishH3.textContent = menuItem.name

    const dishDesc = document.querySelector('#dish-description')
    dishDesc.textContent = menuItem.description

    const dishPrice = document.querySelector('#dish-price')
    dishPrice.textContent = menuItem.price
}

const cartForm = document.querySelector('#cart-form')
cartForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const cartInput = document.querySelector('#cart-amount')
    const numInCart = document.querySelector('#number-in-cart')

    const cartAmount = parseInt(numInCart.textContent)
    const addAmount = parseInt(cartInput.value)
    numInCart.textContent = cartAmount + addAmount
})