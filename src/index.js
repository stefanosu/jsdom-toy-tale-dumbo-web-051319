const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

function addToyCard(toy, divCollection) {
  const div = document.createElement('div') 
  div.className = "card"
  div.innerHTML = ` 
  <h2> ${toy.name} </h2>
  <img src= ${toy.image} class = 'toy-avatar' />
  <p> ${toy.likes} Likes </p>
  <button data-id = ${toy.id} class= "like-btn">Like<3</button>
  `  

  const likeBtn = div.querySelector(".like-btn") 
  likeBtn.addEventListener("click", function(event){
    toy.likes++;

  })
  divCollection.append(div)
}




 function makeToys(toys) {
  const divCollection = document.querySelector('#toy-collection')
  toys.forEach(function(toy){addToyCard(toy, divCollection)
  })  
 } 


document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/toys') 
    .then(response => response.json()) 
    .then(makeToys)
})      


const form = document.querySelector('.add-toy-form')
    form.addEventListener("submit", function(event) {
      event.preventDefault();
    fetch('http://localhost:3000/toys',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify( 
      {
        "name": form.name.value,
        "image": form.image.value,
        "likes": 0
      })
    })
    .then(response => response.json())
    .then(addToyCard)
  })   


  likeBtn.addEventListener("click", function(event){
      const id = event.target.dataset.id 
      fetch('http://localhost:3000/toys/id', {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", 
          Accept: "application/json"
        }, 
        body: JSON.stringify( 
          "likes"

        )
      }) 
    
  
function updateLike(event) {
  const id = event.target.dataset.id
  fetch('http://localhost:3000/toys/${id}', {
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({

    })
  })
}