let contain = document.querySelector(".container")
let url = "http://localhost:3000"
let addHTML


fetch(`${url}/posts`)
.then(response => response.json())
.then(posts => {
    posts.forEach(post => {


/* creating elements and add attributes */
let divP = document.createElement("div")
    divP.setAttribute("data-bs-toggle", "modal")
    divP.setAttribute("data-bs-target", `#exampleModal-${post.id}`)

let titleP = document.createElement("h2")
    titleP.setAttribute("class", "postTitle")

let bodyP = document.createElement("p")
    bodyP.setAttribute("class", "postBody") 

let separationP = document.createElement("hr") 


/* asign the API text to the variable */
    titleP.appendChild(document.createTextNode(`${post.title}`))
    bodyP.appendChild(document.createTextNode(`${post.body}`))
    

/* introducing children to the parents */
    divP.appendChild(titleP)
    divP.appendChild(bodyP)
    divP.appendChild(separationP)
    contain.appendChild(divP)

    addHTML= `

    <!-- Modal -->
    <div class="modal fade" id="exampleModal-${post.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog ">
        <div class="modal-content ">

          <div class="modal-header ">
            <h2 class="modal-title" id="exampleModalLabel">${post.title}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
          ${post.body}
    
          <h3>Users</h3>
          <p>alex123</p>
          <p>mail</p>
          </div>

          <div class="modal-footer">
          <h3>Users
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>

        </div>
      </div>
    </div>
    `
    divP.insertAdjacentHTML("afterbegin",addHTML)
    })
    
})