let contain = document.querySelector(".container")
let titlePost
let titleModal = document.querySelector(".titleModal")
/* MAIN CONTAINER */
/* MAIN CONTAINER */
fetch("http://localhost:3000/posts")
.then((res)=> res.json())
.then((posts)=>{
    posts.forEach(post => {
        let divPost = document.createElement("div")
        divPost.setAttribute("data-bs-toggle", "modal")
        divPost.setAttribute("data-bs-target", "#exampleModal")
        
        /* crear elementos */
        titlePost = document.createElement("h2")
        titlePost.setAttribute("class", "postTitle")
        titlePost.setAttribute("class", "modal-title")

        titlePost.appendChild(
            document.createTextNode(`${post.title}`))
            
        titleModal.appendChild(
            document.createTextNode(`${post.title}`)
        
        )
        
 /*        let bodyPost = document.createElement("p")
        bodyPost.setAttribute("class", "postBody")
        bodyPost.appendChild(
            document.createTextNode(`${post.body}`)
        ) */
        let separationPost = document.createElement("hr")

        /* asignar elementos a sus padres */
        divPost.appendChild(titlePost)
       /*  divPost.appendChild(bodyPost) */
        divPost.appendChild(separationPost)
        contain.appendChild(divPost)
    });
})



/* MODAL POST */
/* MODAL POST */


let bodyModalPost = document.querySelector(".bodyModalPost")
let titleModalUser =document.querySelector(".titleModalUser")
let userNameModal =document.querySelector(".userNameModal")
let emailModal =document.querySelector(".emailModal")
let btnComments = document.querySelector(".btn-dark")

/* 
fetch("http://localhost:3000/posts")
.then((res)=> res.json())
.then((postsM)=>{
    postsM.forEach(pM => {
        let titleText= document.createTextNode(`${pM.title}`)
            
        if(titlePost===titleText){
            titleModal.appendChild(titleText) 
        }
    });
    console.log(titlePost)
})
    
 */