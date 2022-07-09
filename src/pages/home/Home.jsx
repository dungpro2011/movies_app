import React from "react";
import { useEffect } from "react";
import Footer from "../footer/Footer";
import "./home.scss";
import Menu from "../menu/Menu";
import { Search } from "../search/Search";
import Topic from "../topic/Topic";
import MoviesTrending from "../movies_trending/MoviesTrending";
import Shows from "../tv_series/Shows";

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
      //let progressVal = document.getElementById("progress-val");
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
  }, []);

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

      <Search/>
      <Menu/>

      {/*END NAV */}
      {/* SLIDE SECTION */}

      <Topic/>
      
      {/*END SLIDE SECTION */}
      {/* MOVIES TRENDING */}
      <MoviesTrending/>
      
      {/* END MOVIES TRENDING */}
      {/* TV SERIES */}
      <Shows/>
      {/* TV SERIES */}
      {/* SPECIAL MOVIES */}
      <div className="special">
        <div className="section-wrapper">
          <div className="section-header">hot movie</div>
          <div className="big-slide-item special-movie active to-top show-on-scroll">
            <img
              src={require("../../assets/img/Images/black-banner.png")}
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
      <Footer/>
      
    </div>
  );
}
