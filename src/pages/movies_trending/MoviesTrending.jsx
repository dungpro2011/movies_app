import React from 'react'
import LoadMore from '../../component/Buton/LoadMore'

const MoviesTrending = () => {

  return (
    <div className="section" id="movies-trending">
        <div className="section-wrapper" id="section-wrapper">
          <div className="section-header">Trending movies</div>
          <div className="movies-slide row">
            <a
              href="component.html"
              className="movie-item col-3-5 m-5 s-11 to-top show-on-scroll"
            >
              <div>
                <img src={require("../../assets/img/Images/raya1.jpg")} alt="" />
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
                <img src={require("../../assets/img/Images/p-4.jpg")} alt="" />
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
                <img src={require("../../assets/img/Images/p-5.jpg")} alt="" />
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
                  src={require("../../assets/img/Images/post-2.jpg")}
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
                <img src={require("../../assets/img/Images/post-3.jpg")} alt="" />
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
                <img src={require("../../assets/img/Images/post-4.jpg")} alt="" />
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
                <img src={require("../../assets/img/Images/post-5.jpg")} alt="" />
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
                <img src={require("../../assets/img/Images/post-6.jpg")} alt="" />
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
                <img src={require("../../assets/img/Images/post-10.jpg")} alt="" />
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
            <LoadMore />
          </div>
        </div>
      </div>
  )
}

export default MoviesTrending