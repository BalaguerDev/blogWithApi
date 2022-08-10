const infoPosts = document.getElementById("infoPosts")
const ulPost = document.createElement('ul')

fetch("http://localhost:3000/posts")
.then((res)=> res.json())
.then((posts)=>{
    posts.forEach(post => {
        /* crear elementos */
        let listPost = document.createElement("li")

        let titlePost = document.createElement("h2")
        titlePost.appendChild(
            document.createTextNode(`${post.title}`)
        )

        let bodyPost = document.createElement("p")
        bodyPost.appendChild(
            document.createTextNode(`${post.body}`)
        )
        
        /* asignar elementos a sus padres */
        listPost.appendChild(bodyPost)
        listPost.appendChild(titlePost)
        ulPost.appendChild(listPost)
    });
    infoPosts.appendChild(ulPost)
})




/* fetch("http://localhost:3000/posts")
.then((res) => res.json())
.then((data)=>{
    const posts = data.map((post) => `<li>${post.userId} ${post.id} ${post.title} ${post.body}</li>`)
    infoPosts.innerHTML = `<ul>${posts}</ul>`
})
 */