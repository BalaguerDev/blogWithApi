let contain = document.querySelector(".container")
let url = "http://localhost:3000"
let modalHTML



fetch(`${url}/posts`)
.then(response => response.json())
.then(posts => {
    posts.forEach(post => {


/* creating elements and add attributes */
    let divP = document.createElement("div")
        divP.setAttribute("data-bs-toggle", "modal")
        divP.setAttribute("data-bs-target", `#exampleModal-${post.id}`)

        /* divP.setAttribute("data-bs-target", `#exampleModal-${post.id}`) */

    let titleP = document.createElement("h3")
        titleP.setAttribute("class", "postTitle")

    let bodyP = document.createElement("p")
        bodyP.setAttribute("class", "postBody") 

    let separationP = document.createElement("hr") 


/* asign the API text to the variable */
        titleP.appendChild(document.createTextNode(`${post.title}`))
        bodyP.appendChild(document.createTextNode(`${post.body}`))
        

/* introducing children to the parents */
        divP.appendChild(titleP)
        divP.appendChild(separationP)
        contain.appendChild(divP)

            fetch(`${url}/comments`)
            .then(response => response.json())
            .then(comments => {
                comments.forEach(comment => {

                fetch(`${url}/users`)
                .then(response => response.json())
                .then(users => {
                    users.forEach(user => {
                        if(post.userId === user.id){
                            modalHTML= `
                            <div class="modal fade" id="exampleModal-${post.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        <div class="modal-header">
                                            <h4 class="modal-title" id="exampleModalLabel">${post.title}</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>

                                        <div class="modal-body">${post.body}
                                            <h5>Users</h5>
                                            <p>${user.username}</p>
                                            <p>${user.email}</p>
                                        </div>

                                        <div class="modal-footer commentsSection">
                                            <h3>Comments</h3>
                                            <p>
                                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                                Toggle width collapse
                                            </button>
                                            </p>
                                            <div style="min-height: 120px;">
                                                <div class="collapse collapse-horizontal" id="collapseWidthExample">
                                                    <div class="card card-body" style="width: 300px;">
                                                        <p>${comment.body}</p>
                                                        <p>${comment.email}</p>
                                                        <p>${comment.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`

                            divP.insertAdjacentHTML("afterbegin",modalHTML)
                        }
                        
                    })
                })
            })
        })
    })
})