import React from 'react'

const Menu = () => {
  return (
    <div className="nav-wrapper">
        <ul className="nav-menu" id="nav-menu">
          <li className="nav-item active">
            <a href="#big-section">
              <span className="nav-icon">
                <ion-icon name="home-outline" />
              </span>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#movies-trending">
              <span className="nav-icon">
                <ion-icon name="film-outline" />
              </span>
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a href="#section-tv">
              <span className="nav-icon">
                <ion-icon name="tv-outline" />
              </span>
              Tv Series
            </a>
          </li>
          
          <li className="nav-item">
            <a href="#setting">
              <span className="nav-icon">
                <ion-icon name="settings-outline" />
              </span>
              setting
            </a>
          </li>
          <li className="nav-item">
            <a href="#about">
              <span className="nav-icon">
                <ion-icon name="help-circle-outline" />
              </span>
              about
            </a>
          </li>
          <li className="nav-item">
            <a href="#account">
              <span className="nav-icon">
                <ion-icon name="person-outline" />
              </span>
              Account
            </a>
          </li>
        </ul>
      </div>
  )
}

export default Menu