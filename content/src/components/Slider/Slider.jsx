import React from 'react'
import './slider.css'
import {films} from '../../assets/data'
import { useNavigate } from 'react-router-dom';


const Slider = () => {
  const navigate = useNavigate();
  
  const handleCardClick = (film) => {
    // alert(`Clicked on ${film.title}`);
    navigate(`/film/${film.id}`);
  };

  return (
    <div className="wrapper">
        <div className="image-slider">
            {films.map((film) => (
              <div
                key={film.id}
                className='slide-div'
                onClick={() => handleCardClick(film)}
              >
                  <img src={film.image} alt={film.title} className="img"/>
              </div>
            ))}
            <div style={{ width: '100px', flexShrink: 0 }}></div> {/* Spacer */}
        </div>
    </div>
  )
}

export default Slider
