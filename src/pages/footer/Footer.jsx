import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer