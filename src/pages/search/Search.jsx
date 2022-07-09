import React from 'react'

export const Search = () => {
  return (
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
  )
}
