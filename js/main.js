// Navbar Scroll Background
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

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
  const response = await fetch("data.json")
  const movieList = await response.json()
  movies = movieList
  showMovies()
}

getMovies()

function showMovies() {
  let film = ""
  let tvseries = ""
  let fantasy = ""
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
            <p class="kind">${movies[i].kind} | ${movies[i].genres}</p>
          </div>
          <p style="margin-bottom:5px;">
            Stars: <span>${movies[i].cast}</span>
          </p>
          <div>
            <a href="${movies[i].trailer}" target="_blank" class="play2">
              <i class="fa-solid fa-play"></i> Trailer
            </a>
          </div>
        </div>
      </div>
    `

    if (movies[i].kind === "movie") {
      if (document.getElementById("films")) {
        film += element
      }
    }

    if (movies[i].kind === "tv series") {
      if (document.getElementById("series")) {
        tvseries += element
      }
    }

    if (movies[i].genres === "Fantasy") {
      if (document.getElementById("fantasies")) {
        fantasy += element
      }
    }
  }

  let films = document.getElementById("films")
  if (films) {
    films.innerHTML += film
  }

  let series = document.getElementById("series")
  if (series) {
    series.innerHTML += tvseries
  }

  let fantasies = document.getElementById("fantasies")
  if (fantasies) {
    fantasies.innerHTML += fantasy
  }
}

// slider-container Arrows
const arrows = document.querySelectorAll(".chevron");
const movieLists = document.querySelectorAll(".slider-container")

arrows.forEach((arrow, i) => {
  arrow.addEventListener("click", function () {
    const containerWidth = movieLists[i].offsetWidth
    const contentWidth = movieLists[i].scrollWidth
    const maxScrollLeft = contentWidth - containerWidth + 196
    const scrollLeft = movieLists[i].scrollLeft + 196
    
    if (scrollLeft >= maxScrollLeft) {
      movieLists[i].scrollLeft = 0 // Listenin sonuna gelindiğinde başa dön.
    } else {
      movieLists[i].scrollLeft += 196 // Normal kaydırma işlemi.
    }
  })
})