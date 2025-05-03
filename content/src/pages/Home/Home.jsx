import React, { useState }from 'react';
import './home.css';
import play_icon from '../../assets/icons/play_icon.png';
import info_icon from '../../assets/icons/info_icon.png';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="banner-img-wrapper">
          <img src="./images/banner.jpg" alt="" className="banner-img" />
          <div className="black-gradient-overlay"></div>
        </div>
        <div className="hero-caption">
          <img src="./images/title.png" alt="" className="caption-img" />
          <p>
            Entering a world of magic and mystery, a young wizard named Harry Potter discovers his destiny at Hogwarts School of Witchcraft and Wizardry, where he and his friends must face powerful dark forces threatening both the magical and non-magical worlds.
          </p>

          <div className="hero-btns">
            <button className="btn" onClick={handlePlayClick}>
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn" onClick={() => window.open("https://en.wikipedia.org/wiki/Harry_Potter_(film_series)", "_blank")}>
              <img src={info_icon} alt="" />
              More info
            </button>
          </div>
          {/* Conditionally show YouTube video when play is clicked */}
          {showVideo && (
            <div className="video-container">
              <iframe
                width="50%"
                height="400"
                src="https://www.youtube.com/embed/cGvbeaq7kK4?autoplay=1"
                title="Harry Potter All Movies Trailers (HD)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
