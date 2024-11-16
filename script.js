import { movies } from './movies.js';


const qidiruvInput = document.getElementById("qidiruv")
const ota = document.getElementById("ota")
const selectAll = document.getElementById("all")
const selectSort = document.getElementById("sort")
const button = document.getElementById("Search")




function moviesView(data) {
    ota.innerHTML = "";
    data.forEach(e => {
        const div = document.createElement("div");
        div.classList.add("bola_card");
        div.innerHTML = `
                        <img class="movie" src="./img/1200x675mf.jpg.png" alt="movie">
                        <h4>${e.title}</h4>
                        <div class="ota_p">
                            <p class="star" style="color: red;">${e.score}|</p>
                            <p class="yil" style="color: blueviolet;">${e.year}|</p>
                            <p class="soat" style="color: aqua;">${e.duration}</p>
                        </div>
                        <p>${e.genre}</p>
                        <button><a href="https://www.bing.com/ck/a?!&&p=1516ecb674c65973980eedf56f15b5f1ec53f7abe86cdd0fd8933d78a4ea29d7JmltdHM9MTczMTcxNTIwMA&ptn=3&ver=2&hsh=4&fclid=1774d14e-d07c-6dda-1cff-c5f2d1166cd5&psq=netflix&u=a1aHR0cHM6Ly93d3cubmV0ZmxpeC5jb20v&ntb=1">Ochish</a></button>
             `;
        ota.appendChild(div)
    });
}
moviesView(movies);


qidiruvInput.addEventListener("input",()=>{
    let searchPK=movies.filter(e=>
        e.title.toLocaleLowerCase().includes(qidiruvInput.value.toLocaleLowerCase().trim()));
        moviesView(searchPK)
})








all.addEventListener("change", () => {
    if (all.value == "All") {
        moviesView(movies)
    } else {
        let searchPk = movies.filter(e => e.genre.toString().includes(all.value));
        moviesView(searchPk)
    }
});



sort.addEventListener("click", () => {
    if (sort.value == "A-Z") {
        let changePokemons = movies.sort((pk1, pk2) => pk1.title.localeCompare(pk2.title));
        moviesView(changePokemons)
    } else {
        let changePokemons = movies.sort((pk1, pk2) => pk2.title.localeCompare(pk1.title));
        moviesView(changePokemons)
    }
});
