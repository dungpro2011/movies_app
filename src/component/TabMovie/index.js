import React from 'react'

function TabMovie() {
    return (
        <a
            href="/"
            className="movie-item col-3-5  m-5 s-11 to-top show-on-scroll"
        >
            <div>
                <img src={require("../../assets/img/Images/post-1.jpg")} alt="" />
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
    )
}

export default TabMovie