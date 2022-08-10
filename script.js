let contain = document.querySelector(".container")


fetch("http://localhost:3000/posts")
.then((res)=> res.json())
.then((posts)=>{
    posts.forEach(post => {
        let divPost = document.createElement("div")
        divPost.setAttribute("data-bs-toggle", "modal")
        divPost.setAttribute("data-bs-target", "#exampleModal")
        
        /* crear elementos */
        let titlePost = document.createElement("h2")
        titlePost.setAttribute("class", "postTitle")
        titlePost.appendChild(
            document.createTextNode(`${post.title}`)
        )


        let bodyPost = document.createElement("p")
        bodyPost.setAttribute("class", "postBody")
        bodyPost.appendChild(
            document.createTextNode(`${post.body}`)
        )

        let separationPost = document.createElement("hr")

        

        /* asignar elementos a sus padres */
        divPost.appendChild(titlePost)
        divPost.appendChild(bodyPost)
        divPost.appendChild(separationPost)
        contain.appendChild(divPost)
    });
   
    
})

/* setAtribute   para crear atributosd*/

