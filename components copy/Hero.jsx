import React from 'react'

function Hero() {
  return (
    <div className="content">
      <div className="cont_bx">
        <h1>Don't be a Tourist , Be a Traveler.</h1>
        <p>Finding new possibilities to explore the world.</p>
        <button className="button">Start Your Search
        </button>
      </div>
      <div className="trip_bx">
        <div className="search_bx">
          <div className="card">
            <h4>Location <i className="bi bi-caret-down-fill"></i></h4>
            <input type="text" placeholder="Enter Your Destination"/>
          </div>
          <div className="card">
            <h4>Date <i className="bi bi-caret-down-fill"></i></h4>
            <input type="date"/>
          </div>
          <div className="card">
            <h4>People <i className="bi bi-caret-down-fill"></i></h4>
            <input type="number" placeholder="How Many People"/>
          </div>
          <input type="button" value="Explore Now"/>
        </div>
        <div className="travel_bx">
          <h4>Countries to visit</h4>
          <div className="cards">
            <div className="card">
              <h3>India <img src="/assets/icon/Flag-India.webp" alt=""/></h3>
              <img src="/assets/img/Mumbai_Night_City_(18219784390).jpg" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>Mumbai Central <br/> <span>$460</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>United States <img src="/assets/icon/american-flag-eagle-united-states-usa-wallpaper-thumb.jpg" alt=""/></h3>
              <img src="/assets/img/NYC Skyline.jpg" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>New York <br/> <span>$870</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>Russia <img src="/assets/icon/download.jpeg" alt=""/></h3>
              <img src="/assets/img/sanpitersburg.jpg" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>Saint Petersburg <br/> <span>$660</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>Spain <img src="/assets/icon/wp2747575.webp" alt=""/></h3>
              <img src="/assets/img/barcelona.jpg" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>Barcelona <br/> <span>$730</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>Singapore <img src="/assets/icon/desktop-wallpaper-singapore-flag-weneedfun-singapore-flag.jpg" alt=""/></h3>
              <img src="/assets/img/Singapore.webp" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>Marina Bay Sands<br/> <span>$730</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>United Kingdom <img src="/assets/icon/flag-united-kingdom-vector-illustration_514344-299.avif" alt=""/></h3>
              <img src="/assets/img/big-ben-london-autumn-leaves-32915756.webp" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>London<br/> <span>$954</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>France <img src="/assets/icon/Flag-France.webp" alt=""/></h3>
              <img src="/assets/img/gettyimages-142198198.jpg" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>Paris<br/> <span>$1254</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>Australia <img src="/assets/icon/illustration-australia-flag_53876-27116.avif" alt=""/></h3>
              <img src="/assets/img/sydney-main.jpg" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>Sydeny<br/> <span>$1345</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>Japan <img src="/assets/icon/Flag_of_Japan.svg.png" alt=""/></h3>
              <img src="/assets/img/45-facts-about-tokyo-1688094762.jpeg" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>Tokyo<br/> <span>$1588</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>Germany <img src="/assets/icon/1200px-Flag_of_Germany.svg.png" alt=""/></h3>
              <img src="/assets/img/berlin-germany-aerial-lead-BERLINTG0921-475e3a333c7f4fdea7743c6fc2f261af.jpg" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>Berlin<br/> <span>$1732</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>South Korea <img src="/assets/icon/Flag_of_South_Korea.png" alt=""/></h3>
              <img src="/assets/img/du-lich-seoul-tu-tuc-1.webp" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>Seoul<br/> <span>$1806</span></h5>
              </div>
            </div>
            <div className="card">
              <h3>Switzerland <img src="/assets/icon/Flag-Switzerland.webp" alt=""/></h3>
              <img src="/assets/img/b9ca99c3-b15e-48ab-a3cb-983186637256.webp" alt=""/>
              <div className="btn_city">
                <a href="">Read Now</a>
                <h5>Zurich<br/> <span>$2100</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
