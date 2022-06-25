import { render } from "@testing-library/react";
import React from "react";
import { useRef, useEffect } from "react";
import "./home.scss";

export default function Home() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    let nav = document.querySelectorAll(".nav-item");
    console.log(nav);

    for (let i = 0; i < nav.length; i++) {
      nav[i].onclick = () => {
        let j = 0;
        while (j < nav.length) {
          nav[j++].className = "nav-item";
        }
        nav[i].className = "nav-item active";
      };
    }

    let menu_tablet = document.querySelector(".menu-tablet");
    let menu_toggle = document.querySelector(".menu-toggle");

    menu_toggle.onclick = () => {
      menu_toggle.classList.toggle("active");
      menu_tablet.classList.toggle("active");
    };

    let big_slider = document.querySelector("#big-slider");

    let big_slide_items = big_slider.querySelectorAll(".big-slide-item");

    let big_slide_index = 0;

    let slide_play = true;

    let slide_next = big_slider.querySelector(".slide-next");
    console.log(slide_next);
    let slide_prev = big_slider.querySelector(".slide-prev");

    let header = document.querySelector(".nav");

    const showSlide = (index) => {
      big_slider
        .querySelector(".big-slide-item.active")
        .classList.remove("active");
      big_slide_items[index].classList.add("active");
    };

    const nextSlide = () => {
      big_slide_index =
        big_slide_index + 1 === big_slide_items.length
          ? 0
          : big_slide_index + 1;
      showSlide(big_slide_index);
    };

    const prevSlide = () => {
      big_slide_index =
        big_slide_index - 1 < 0
          ? big_slide_items.length - 1
          : big_slide_index - 1;
      showSlide(big_slide_index);
    };

    slide_next.addEventListener("click", () => nextSlide());

    slide_prev.addEventListener("click", () => prevSlide());

    big_slider.addEventListener("mouseover", () => (slide_play = false));

    big_slider.addEventListener("mouseleave", () => (slide_play = true));

    setTimeout(() => big_slide_items[0].classList.add("active"), 200);

    setInterval(() => {
      if (!slide_play) return;
      nextSlide();
    }, 5000);

    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });

    let scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    let el_to_show = document.querySelectorAll(".show-on-scroll");

    const isElInViewPort = (el) => {
      let rect = el.getBoundingClientRect();

      let distance = 200;

      return (
        rect.top <=
        (window.innerHeight - distance ||
          document.documentElement.clientHeight - distance)
      );
    };

    const loop = () => {
      el_to_show.forEach((el) => {
        if (isElInViewPort(el)) el.classList.add("show");
      });
      scroll(loop);
    };

    loop();

    // PROGRESS BAR

    let scrollPrecentage = () => {
      let scrollProgress = document.getElementById("progress-bar");
      let progressVal = document.getElementById("progress-val");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollVal = Math.round((pos * 100) / calcHeight);
      scrollProgress.style.background = `conic-gradient(#e70634 ${scrollVal}%, #2b2f38 ${scrollVal}%)`;
    };

    window.onscroll = scrollPrecentage;
    window.onload = scrollPrecentage;

    //   MOBILE NAV

    var list = document.querySelectorAll(".item");

    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    list.forEach((item) => item.addEventListener("click", activeLink));
  });

  // MOBILE MENU

  // SLIDE

  // let big_slider = document.querySelector("#big-slider");

  // let big_slide_items = document.querySelectorAll(".big-slide-item");

  // let big_slide_index = 0;

  // let slide_play = true;

  // let slide_next = document.querySelector(".slide-next");
  // console.log(slide_next);
  // let slide_prev = document.querySelector(".slide-prev");

  // let header = document.querySelector(".nav");

  // let showSlide = (index) => {
  //   big_slider
  //     .querySelector(".big-slide-item.active")
  //     .classList.remove("active");
  //   big_slide_items[index].classList.add("active");
  // };

  // let nextSlide = () => {
  //   big_slide_index =
  //     big_slide_index + 1 === big_slide_items.length ? 0 : big_slide_index + 1;
  //   showSlide(big_slide_index);
  // };

  // let prevSlide = () => {
  //   big_slide_index =
  //     big_slide_index - 1 < 0
  //       ? big_slide_items.length - 1
  //       : big_slide_index - 1;
  //   showSlide(big_slide_index);
  // };

  // if (slide_next && slide_prev && big_slider) {
  //   slide_next.addEventListener("click", () => nextSlide());

  //   slide_prev.addEventListener("click", () => prevSlide());

  //   big_slider.addEventListener("mouseover", () => (slide_play = false));

  //   big_slider.addEventListener("mouseleave", () => (slide_play = true));
  // }

  // setTimeout(() => big_slide_items[0].classList.add("active"), 200);

  // setInterval(() => {
  //   if (!slide_play) return;
  //   nextSlide();
  // }, 5000);

  // window.addEventListener("scroll", () => {
  //   if (
  //     document.body.scrollTop > 80 ||
  //     document.documentElement.scrollTop > 80
  //   ) {
  //     header.classList.add("shrink");
  //   } else {
  //     header.classList.remove("shrink");
  //   }
  // });

  // let scroll =
  //   window.requestAnimationFrame ||
  //   function (callback) {
  //     window.setTimeout(callback, 1000 / 60);
  //   };

  // let el_to_show = document.querySelectorAll(".show-on-scroll");

  // const isElInViewPort = (el) => {
  //   let rect = el.getBoundingClientRect();

  //   let distance = 200;

  //   return (
  //     rect.top <=
  //     (window.innerHeight - distance ||
  //       document.documentElement.clientHeight - distance)
  //   );
  // };

  // const loop = () => {
  //   el_to_show.forEach((el) => {
  //     if (isElInViewPort(el)) el.classList.add("show");
  //   });
  //   scroll(loop);
  // };

  // loop();

  // // PROGRESS BAR

  // let scrollPrecentage = () => {
  //   let scrollProgress = document.getElementById("progress-bar");
  //   let progressVal = document.getElementById("progress-val");
  //   let pos = document.documentElement.scrollTop;
  //   let calcHeight =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   let scrollVal = Math.round((pos * 100) / calcHeight);
  //   scrollProgress.style.background = `conic-gradient('#'e70634 ${scrollVal}%, '#'2b2f38 ${scrollVal}%)`;
  // };

  // window.onscroll = scrollPrecentage;
  // window.onload = scrollPrecentage;

  // //   MOBILE NAV

  // var list = document.querySelectorAll(".item");

  // function activeLink() {
  //   list.forEach((item) => item.classList.remove("active"));
  //   this.classList.add("active");
  // }

  // list.forEach((item) => item.addEventListener("click", activeLink));

  return (
    <div>
      <div className="menu-tablet" id="menu-tablet">
        <ul className="menu-tb-list">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">tv series</a>
          </li>
          <li>
            <a href="/">Genre</a>
          </li>
          <li>
            <a href="/">setting</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
        </ul>
      </div>

      <div className="navigation">
        <ul>
          <li className="item active">
            <a href="/">
              <span className="icon">
                <i className="bx bx-home-circle" />
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="item">
            <a href="/">
              <span className="icon">
                <ion-icon name="film-outline" />
              </span>
              <span className="text">Movie</span>
            </a>
          </li>
          <li className="item">
            <a href="/">
              <span className="icon">
                <ion-icon name="tv-outline" />
              </span>
              <span className="text">TVSeries</span>
            </a>
          </li>
          <li className="item">
            <a href="/">
              <span className="icon">
                <i className="bx bx-user" />
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <li className="item">
            <a href="/">
              <span className="icon">
                <i className="bx bx-cog" />
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
          <div className="indicator" />
        </ul>
      </div>

      <div className="progress-bar" id="progress-bar">
        <a href="/" id="progress-val">
          <ion-icon name="logo-foursquare" />
        </a>
      </div>

      <div className="container">
        <div className="nav">
          <a href="/" className="logo">
            <i
              style={{ marginRight: 10 }}
              className="bx bx-movie-play bx-tada main-color"
            />
            Fl<span className="main-color">i</span>x
          </a>
          <form action className="search-box">
            <input
              type="text"
              name="search"
              placeholder="Search Your Movie ....."
              className="nav-search"
            />
            <button type="password">
              <i className="bx bx-search-alt" />
            </button>
          </form>
          <div className="nav-sign">
            <a href="/" className="btn btn-hover">
              <span>Sign in</span>
            </a>
          </div>
          <div className="menu-toggle">
            <ion-icon name="menu-outline" className="open" />
            <ion-icon name="close-outline" className="close" />
          </div>
        </div>
      </div>

      <div className="nav-wrapper">
        <ul className="nav-menu" id="nav-menu">
          <li className="nav-item active">
            <a href="/">
              <span className="nav-icon">
                <ion-icon name="home-outline" />
              </span>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#latest-section">
              <span className="nav-icon">
                <ion-icon name="film-outline" />
              </span>
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a href="section-tv">
              <span className="nav-icon">
                <ion-icon name="tv-outline" />
              </span>
              Tv Series
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <span className="nav-icon">
                <ion-icon name="grid-outline" />
              </span>
              Genre
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <span className="nav-icon">
                <ion-icon name="settings-outline" />
              </span>
              setting
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <span className="nav-icon">
                <ion-icon name="chatbubbles-outline" />
              </span>
              messages
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <span className="nav-icon">
                <ion-icon name="help-circle-outline" />
              </span>
              about
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <span className="nav-icon">
                <ion-icon name="person-outline" />
              </span>
              Account
            </a>
          </li>
        </ul>
      </div>
      {/*END NAV */}
      {/* SLIDE SECTION */}
      <div className="big-section" id="big-section">
        {/* BIG SLIDES */}
        <div className="slide-container" id="big-slider">
          <div className="big-slide-item active">
            <img src={require("../assets/img/Images/p-2.jpg")} alt="Poster" />
            {/* src={require("../assets/img/Images/p-2.jpg" */}
            <div className="big-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title">Pirate caribbean</div>
                <div className="movies-infors">
                  <div className="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.5</span>
                  </div>
                  <div className="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div className="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
                <div className="item-content-description ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  possimus eius. Deserunt non odit, cum vero reprehenderit
                  laudantium odio vitae autem quam, incidunt molestias ratione
                  mollitia accusantium, facere ab suscipit.
                </div>
              </div>
            </div>
            <div className="play-movies">
              <div className="ring" />
              <a href="https://www.youtube.com/watch?v=Hgeu5rhoxxY&t=10s">
                <i className="bx bxs-right-arrow" />
              </a>
              <div className="btn-watch">
                <span>watch trailer</span>
              </div>
            </div>
          </div>
          <div className="big-slide-item">
            <img src={require("../assets/img/Images/p-6.jpg")} alt="Poster" />
            <div className="big-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title ">black widow</div>
                <div className="movies-infors">
                  <div className="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.5</span>
                  </div>
                  <div className="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div className="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
                <div className="item-content-description ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  possimus eius. Deserunt non odit, cum vero reprehenderit
                  laudantium odio vitae autem quam, incidunt molestias ratione
                  mollitia accusantium, facere ab suscipit.
                </div>
              </div>
            </div>
            <div className="play-movies ">
              <div className="ring" />
              <a href="https://www.youtube.com/watch?v=ybji16u608U">
                <i className="bx bxs-right-arrow" />
              </a>
              <div className="btn-watch">
                <span>watch trailer</span>
              </div>
            </div>
          </div>
          <div className="big-slide-item">
            <img
              src={require("../assets/img/Images/transformer-banner.jpg")}
              alt="Poster"
            />
            <div className="big-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title">Transformer</div>
                <div className="movies-infors ">
                  <div className="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.5</span>
                  </div>
                  <div className="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div className="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
                <div className="item-content-description  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  possimus eius. Deserunt non odit, cum vero reprehenderit
                  laudantium odio vitae autem quam, incidunt molestias ratione
                  mollitia accusantium, facere ab suscipit.
                </div>
              </div>
            </div>
            <div className="play-movies ">
              <div className="ring" />
              <a href="https://www.youtube.com/watch?v=Q3VKie4pChs">
                <i className="bx bxs-right-arrow" />
              </a>
              <div className="btn-watch">
                <span>watch trailer</span>
              </div>
            </div>
          </div>
          <div className="big-slide-item">
            <img src={require("../assets/img/Images/p-3.jpg")} alt="Poster" />
            <div className="big-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title ">bloodShot</div>
                <div className="movies-infors">
                  <div className="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.5</span>
                  </div>
                  <div className="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div className="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
                <div className="item-content-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  possimus eius. Deserunt non odit, cum vero reprehenderit
                  laudantium odio vitae autem quam, incidunt molestias ratione
                  mollitia accusantium, facere ab suscipit.
                </div>
              </div>
            </div>
            <div className="play-movies ">
              <div className="ring" />
              <a href="https://www.youtube.com/watch?v=vOUVVDWdXbo">
                <i className="bx bxs-right-arrow" />
              </a>
              <div className="btn-watch">
                <span>watch trailer</span>
              </div>
            </div>
          </div>
          <ul className="slide-control">
            <li className="slide-prev">
              <ion-icon name="chevron-back-outline" />
            </li>
            <li className="slide-next">
              <ion-icon name="chevron-forward-outline" />
            </li>
          </ul>
        </div>
      </div>
      {/*END SLIDE SECTION */}
      {/* LATEST SECTION */}
      <div className="section" id="latest-section">
        <div className="section-wrapper" id="section-wrapper">
          <div className="section-header">Trending movies</div>
          <div className="movies-slide row">
            <a
              href="component.html"
              className="movie-item col-3-5 m-5 s-11 to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/raya1.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">
                    raya and the last dragon
                  </div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="movie-item-overlay"></div>
              <div className="movie-item-act">
                {/* <div class="ring"></div> */}
                <i className="bx bxs-right-arrow" />
                <div>
                  <i className="bx bxs-share-alt" />
                  <i className="bx bxs-heart" />
                  <i className="bx bx-plus-medical" />
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5 m-5 s-11 to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/p-4.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">
                    venon: let there be carnage
                  </div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
                <div className="movie-item-overlay"></div>
                <div className="movie-item-act">
                  {/* <div class="ring"></div> */}
                  <i className="bx bxs-right-arrow" />
                  <div>
                    <i className="bx bxs-share-alt" />
                    <i className="bx bxs-heart" />
                    <i className="bx bx-plus-medical" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5 m-5 s-11  to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/p-5.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">dealpool 2</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
                <div className="movie-item-overlay" />
                <div className="movie-item-act">
                  {/* <div class="ring"></div> */}
                  <i className="bx bxs-right-arrow" />
                  <div>
                    <i className="bx bxs-share-alt" />
                    <i className="bx bxs-heart" />
                    <i className="bx bx-plus-medical" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5 m-5 s-11  to-top show-on-scroll"
            >
              <div>
                <img
                  src={require("../assets/img/Images/post-2.jpg")}
                  alt="post-2"
                />
                <div className="movie-item-content">
                  <div className="movie-item-title">The tomorrow war</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
                <div className="movie-item-overlay" />
                <div className="movie-item-act">
                  {/* <div class="ring"></div> */}
                  <i className="bx bxs-right-arrow" />
                  <div>
                    <i className="bx bxs-share-alt" />
                    <i className="bx bxs-heart" />
                    <i className="bx bx-plus-medical" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5 m-5 s-11  to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/post-3.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">jungle cruise</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
                <div className="movie-item-overlay" />
                <div className="movie-item-act">
                  {/* <div class="ring"></div> */}
                  <i className="bx bxs-right-arrow" />
                  <div>
                    <i className="bx bxs-share-alt" />
                    <i className="bx bxs-heart" />
                    <i className="bx bx-plus-medical" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5 m-5 s-11  to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/post-4.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">dune</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
                <div className="movie-item-overlay" />
                <div className="movie-item-act">
                  {/* <div class="ring"></div> */}
                  <i className="bx bxs-right-arrow" />
                  <div>
                    <i className="bx bxs-share-alt" />
                    <i className="bx bxs-heart" />
                    <i className="bx bx-plus-medical" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5 m-5 s-11  to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/post-5.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">The suicide squad</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
                <div className="movie-item-overlay" />
                <div className="movie-item-act">
                  {/* <div class="ring"></div> */}
                  <i className="bx bxs-right-arrow" />
                  <div>
                    <i className="bx bxs-share-alt" />
                    <i className="bx bxs-heart" />
                    <i className="bx bx-plus-medical" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5 m-5 s-11  to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/post-6.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">no time to die</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
                <div className="movie-item-overlay" />
                <div className="movie-item-act">
                  {/* <div class="ring"></div> */}
                  <i className="bx bxs-right-arrow" />
                  <div>
                    <i className="bx bxs-share-alt" />
                    <i className="bx bxs-heart" />
                    <i className="bx bx-plus-medical" />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5 m-5 s-11 to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/post-10.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">
                    prisoner of the ghostland
                  </div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
                <div className="movie-item-overlay" />
                <div className="movie-item-act">
                  {/* <div class="ring"></div> */}
                  <i className="bx bxs-right-arrow" />
                  <div>
                    <i className="bx bxs-share-alt" />
                    <i className="bx bxs-heart" />
                    <i className="bx bx-plus-medical" />
                  </div>
                </div>
              </div>
            </a>
            <div className="btn-load btn-load-tb">
              <span>load more</span>
            </div>
          </div>
        </div>
      </div>
      {/* END LATEST SECTION */}
      {/* TV SERIES */}
      <div className="section-tv" id="section-tv">
        <div className="section-wrapper">
          <div className="section-header">
            <span> tv Series</span>
            {/* <div class="btn-load-2">
                        <span>load more</span>
                   </div> */}
          </div>
          <div className="movies-slide row" id="tv-slider">
            <a
              href="/"
              className="movie-item col-3-5  m-5 s-11 to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/post-9.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">wanda Vision</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="movie-item-overlay"></div>
              <div className="movie-item-act">
                <i className="bx bxs-right-arrow" />
                <div>
                  <i className="bx bxs-share-alt" />
                  <i className="bx bxs-heart" />
                  <i className="bx bx-plus-medical" />
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5  m-5 s-11 to-top show-on-scroll "
            >
              <div>
                <img src={require("../assets/img/Images/post-8.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">rumble</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="movie-item-overlay"></div>
              <div className="movie-item-act">
                <i className="bx bxs-right-arrow" />
                <div>
                  <i className="bx bxs-share-alt" />
                  <i className="bx bxs-heart" />
                  <i className="bx bx-plus-medical" />
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5  m-5 s-11 to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/post-1.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">venon</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="movie-item-overlay"></div>
              <div className="movie-item-act">
                <i className="bx bxs-right-arrow" />
                <div>
                  <i className="bx bxs-share-alt" />
                  <i className="bx bxs-heart" />
                  <i className="bx bx-plus-medical" />
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5  m-5 s-11 to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/post-11.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">luca</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="movie-item-overlay"></div>
              <div className="movie-item-act">
                <i className="bx bxs-right-arrow" />
                <div>
                  <i className="bx bxs-share-alt" />
                  <i className="bx bxs-heart" />
                  <i className="bx bx-plus-medical" />
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5  m-5 s-11 to-top show-on-scroll"
            >
              <div>
                <img src={require("../assets/img/Images/post-12.jpg")} alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">annette</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="movie-item-overlay"></div>
              <div className="movie-item-act">
                <i className="bx bxs-right-arrow" />
                <div>
                  <i className="bx bxs-share-alt" />
                  <i className="bx bxs-heart" />
                  <i className="bx bx-plus-medical" />
                </div>
              </div>
            </a>
            <a
              href="/"
              className="movie-item col-3-5  m-5 s-11 to-top show-on-scroll "
            >
              <div>
                <img
                  src={require("../assets/img/Images/start-trek.jpeg")}
                  alt=""
                />
                <div className="movie-item-content">
                  <div className="movie-item-title">star trek Discovery</div>
                  <div className="movies-infors-card">
                    <div className="movies-infor">
                      <ion-icon name="bookmark-outline" />
                      <span>9.0</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="time-outline" />
                      <span>120 mins</span>
                    </div>
                    <div className="movies-infor">
                      <ion-icon name="cube-outline" />
                      <span>FHD</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="movie-item-overlay"></div>
              <div className="movie-item-act">
                <i className="bx bxs-right-arrow" />
                <div>
                  <i className="bx bxs-share-alt" />
                  <i className="bx bxs-heart" />
                  <i className="bx bx-plus-medical" />
                </div>
              </div>
            </a>
            <div className="btn-load ">
              <span>load more</span>
            </div>
          </div>
        </div>
      </div>
      {/* TV SERIES */}
      {/* SPECIAL MOVIES */}
      <div className="special">
        <div className="section-wrapper">
          <div className="section-header">hot movie</div>
          <div className="big-slide-item special-movie active to-top show-on-scroll">
            <img
              src={require("../assets/img/Images/black-banner.png")}
              alt="Poster"
            />
            <div className="big-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title ">black Panther</div>
                <div className="movies-infors">
                  <div className="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.5</span>
                  </div>
                  <div className="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div className="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
                <div className="item-content-description ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  possimus eius. Deserunt non odit, cum vero reprehenderit
                  laudantium odio vitae autem quam, incidunt molestias ratione
                  mollitia accusantium, facere ab suscipit.
                </div>
              </div>
            </div>
            <div className="play-movies ">
              <div className="ring" />
              <a href="https://www.youtube.com/watch?v=qZuQc-GvRlk">
                <i className="bx bxs-right-arrow" />
              </a>
              <div className="btn-watch">
                <span>watch trailer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*END SPECIAL MOVIES */}
      <footer className="footer ">
        <div className="section-wrapper">
          <div className="row ">
            <div className="col-6 footer-header">
              <a href="/" className="logo">
                <i
                  style={{ marginRight: 10 }}
                  className="bx bx-movie-play bx-tada main-color"
                />
                Fl<span className="main-color">i</span>x
              </a>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                possimus eius. Deserunt non odit, cum vero reprehenderit
                laudantium odio vitae autem quam, incidunt molestias ratione
                mollitia accusantium, facere ab suscipit.
              </p>
              <div className="social-list">
                <a href="/" className="social-item">
                  <i className="bx bxl-facebook" />
                </a>
                <a href="/" className="social-item">
                  <i className="bx bxl-instagram" />
                </a>
                <a href="/" className="social-item">
                  <i className="bx bxl-twitter" />
                </a>
              </div>
            </div>
            <div className="col-12 footer-item">
              <div className="row">
                <div className="col-4 align-items-center">
                  <div className="content">
                    <p className="main-color" style={{ fontSize: "1.2rem" }}>
                      <b>Flix</b>
                    </p>
                    <ul className="footer-menu">
                      <li>
                        <a href="/"> About us</a>
                      </li>
                      <li>
                        <a href="/"> My profile</a>
                      </li>
                      <li>
                        <a href="/"> Pricing plans</a>
                      </li>
                      <li>
                        <a href="/"> Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 align-items-center">
                  <div className="content">
                    <p className="main-color" style={{ fontSize: "1.2rem" }}>
                      <b>Browse</b>
                    </p>
                    <ul className="footer-menu">
                      <li>
                        <a href="/">Live TV</a>
                      </li>
                      <li>
                        <a href="/">Live Movies</a>
                      </li>
                      <li>
                        <a href="/">Live Series</a>
                      </li>
                      <li>
                        <a href="/">Streaming Library</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 align-items-center">
                  <div className="content">
                    <p className="main-color" style={{ fontSize: "1.2rem" }}>
                      <b>Help</b>
                    </p>
                    <ul className="footer-menu">
                      <li>
                        <a href="/">Account &amp; Billing</a>
                      </li>
                      <li>
                        <a href="/">Plans &amp; Pricing</a>
                      </li>
                      <li>
                        <a href="/">Supported devices</a>
                      </li>
                      <li>
                        <a href="/">Accessibility</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
