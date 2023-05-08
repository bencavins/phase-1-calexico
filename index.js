// Write your code here...

// fetch menu data with GET
fetch("http://localhost:3000/menu")
.then(resp => resp.json())
.then(menuData => {
    menuData.forEach((menuItem) => {
        // add item to menu section
        const span = document.createElement('span')
        span.textContent = menuItem.name
        document.querySelector('#menu-items').appendChild(span)

        // console.log('creating click event for: ')
        // console.log(menuItem)
        span.addEventListener('click', (event) => {
            renderMenuItem(menuItem)
        })
    })
    
    // add first menu item to main container
    const firstItem = menuData[0]
    renderMenuItem(firstItem)
})

function renderMenuItem(menuItem) {
    const dishImg = document.querySelector('#dish-image')
    const dishName = document.querySelector('#dish-name')
    const dishPrice = document.querySelector('#dish-price')
    const dishDesc = document.querySelector('#dish-description')

    dishName.textContent = menuItem.name
    dishPrice.textContent = menuItem.price
    dishDesc.textContent = menuItem.description
    dishImg.src = menuItem.image
    dishImg.alt = menuItem.name
}

document.querySelector('#cart-form').addEventListener('submit', (event) => {
    event.preventDefault()
    let addCount = Number.parseInt(event.target[0].value)

    if (Number.isNaN(addCount)) {
        addCount = 0
    }

    const cartSpan = document.querySelector('#number-in-cart')
    const currCount = Number.parseInt(cartSpan.textContent)
    cartSpan.textContent = currCount + addCount
    document.querySelector('#cart-form').reset()
})