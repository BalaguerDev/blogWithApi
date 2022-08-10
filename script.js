const btnCat = document.getElementById('btnCat');
const catContainer = document.getElementById('catContainer');
const infoPosts = document.getElementById("infoPosts")


fetch("http://localhost:3000/posts")
.then((res) => res.json())
.then((data)=>{
    const posts = data.map((post) => `<li>${post.userId} ${post.id} ${post.title} ${post.body}</li>`)
    infoPosts.innerHTML = `<ul>${posts}</ul>`
})
