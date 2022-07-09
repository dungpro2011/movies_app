import React from 'react'

const Special = () => {
  return (
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
  )
}

export default Special