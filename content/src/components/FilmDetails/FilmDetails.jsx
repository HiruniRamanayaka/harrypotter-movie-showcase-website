import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {films} from '../../assets/data'
import './filmDetails.css'

const FilmDetails = () => {
    {/*Using React Router's useParams() hook to get the id from the URL.
If you're visiting /film/3, then id will be '3' (a string). */}
    const {id} = useParams();
    const film = films.find((f) => f.id === parseInt(id));

    if(!film) {
        return <div>Film not found.</div>
    }
  return (
    <div className='container'>
        <div className='film-deatil-container'>
      <Link to="/" className='back-button'>← Back to Home</Link>
      <h1>{film.title}</h1>
      <div className='details-container'>
        <div className='left-details'>
            <img src={film.image} alt={films.title} className='film-image' />
        </div>
        <div className='right-details'>
            <p><strong>Release date: </strong>{film.releaseDate}</p>
            <p><strong>Director:</strong> {film.director}</p>
            <p><strong>Description:</strong> {film.description}</p>
            <p><strong>Characters:</strong> {film.characters}</p>
            <p><strong>Fun Fact:</strong> {film.funFact}</p>
            <div className='info-link'>
              <a href={film.linktoMoreInfo} target="_blank" rel="noopener noreferrer">
                  Learn more on Wikipedia
              </a>
              <button
                onClick={() => window.open(film.video, "_blank")}
                className='watch-link'
              >Watch Full Movie</button>
            </div>
            
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default FilmDetails
