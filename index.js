// select relevant items on the page
const menu = document.querySelector('#menu-items')
const dishImg = document.querySelector('#dish-image')
const dishName = document.querySelector('#dish-name')
const dishDesc = document.querySelector('#dish-description')
const dishPrice = document.querySelector('#dish-price')
const cartForm = document.querySelector('#cart-form')


function renderDish(menuItem) {
  // add the image to the page
  dishImg.src = menuItem.image
  // add the dish name to the h3
  dishName.textContent = menuItem.name
  // add the description to the p tag
  dishDesc.textContent = menuItem.description
  // add the price
  dishPrice.textContent = "$" + menuItem.price
}


function renderMenuItem(menuItem) {
  // create new span element
  const span = document.createElement('span')
  // set the textContent to the item name
  span.textContent = menuItem.name

  // register click even on the span element
  span.addEventListener('click', (event) => {
    renderDish(menuItem)  // render this menuItem to the main window
  })

  // add the span element to the menu div
  menu.appendChild(span)
}


fetch('http://localhost:3000/menu')
.then(resp => resp.json())
.then(jsonData => {
  // loop through array, render each item to the sidebar
  jsonData.forEach((menuItem) => renderMenuItem(menuItem))
  // grab first menu item, render in the main window
  renderDish(jsonData[0])
})

// register a submit event on the form
cartForm.addEventListener('submit', (event) => {
  // stop the page refresh from happening
  event.preventDefault()
  // selected our input element (could use event.target)
  const input = document.querySelector('#cart-amount')
  // grabbed the value from the input, convert to number
  const amountToAdd = parseInt(input.value)
  // select the cart <span>
  const cartSpan = document.querySelector('#number-in-cart')
  // grabbed the current amount from the <span>
  const currentAmount = parseInt(cartSpan.textContent)
  // add two number together
  const newAmount = currentAmount + amountToAdd
  // set the cart <span> to the new total
  cartSpan.textContent = newAmount
  // reset the form
  event.target.reset()
})