const btnCat = document.getElementById('btnCat');
const catContainer = document.getElementById('catContainer');

btnCat.addEventListener('click', getRandomCat);

function getRandomCat() {
	fetch('http://localhost:3000/posts')
		.then(res => res.json())
		.then(data => {
            catContainer.innerHTML= data[1].userId;
            console.log(data[1].userId);
            console.log(data[1].title);
                        console.log(data[1].userId);
            console.log(data[1].title);
		});
}
