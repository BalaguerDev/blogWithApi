const infoPosts = document.getElementById("infoPosts")
const ulPost = document.createElement('ul')

fetch("http://localhost:3000/posts")
.then((res)=> res.json())
.then((posts)=>{
    posts.forEach(post => {
        /* crear elementos */
        let listPost = document.createElement("li")

        

        let bodyPost = document.createElement("p")
        bodyPost.appendChild(
            document.createTextNode(`${post.body}`)
        )
        let titlePost = document.createElement("h2")
        titlePost.appendChild(
            document.createTextNode(`${post.title}`)
        )

        /* asignar elementos a sus padres */
        listPost.appendChild(titlePost)
        listPost.appendChild(bodyPost)
        
        ulPost.appendChild(listPost)
    });
    infoPosts.appendChild(ulPost)
})

/* setAtribute   para crear atributosd*/

