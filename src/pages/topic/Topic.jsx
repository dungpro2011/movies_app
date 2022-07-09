import React from 'react'

const Topic = () => {
  return (
    <div className="big-section" id="big-section">
        {/* BIG SLIDES */}
        <div className="slide-container" id="big-slider">
          <div className="big-slide-item active">
            <img src={require("../../assets/img/Images/p-2.jpg")} alt="Poster" />
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
            <img src={require("../../assets/img/Images/p-6.jpg")} alt="Poster" />
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
              src={require("../../assets/img/Images/transformer-banner.jpg")}
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
            <img src={require("../../assets/img/Images/p-3.jpg")} alt="Poster" />
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
  )
}

export default Topic