// Swiper Js
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Movies
let movies = []

const getMovies = async () => {
  const response = await fetch("data.json");
  const movieList = await response.json()
  movies = movieList
  showMovies()
}

getMovies()

function showMovies() {
  let film = ""
  let count = movies.length
  for (let i = 0; i < count; i++) {
    let element = `
      <div class="box">
        <div class="box-img">
          <img src="${movies[i].image}" alt="">
        </div>
        <div class="box-info">
          <h3>${movies[i].title}</h3>
          <span>${movies[i].description}</span>
          <div>
            <p class="kind">${movies[i].genres}</p>
          </div>
          <p style="margin-bottom:5px;">
            Stars: <span>${movies[i].cast}</span>
          </p>
          <div>
            <a href="${movies[i].trailer}" target="_blank" class="play play2">
              <i class="fa-solid fa-play"></i> Trailer
            </a>
          </div>
        </div>
      </div>
    `

    if (movies[i].kind === "movie") {
      film += element
    }
  }

  let films = document.getElementById("films")
  films.innerHTML += film
}