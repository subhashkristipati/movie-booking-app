import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './ShowList.css'; // Import custom CSS file

function ShowList() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(response => {
                setShows(response.data);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="text-center my-4">TV Shows</h1>
            <div className="row">
                {shows.map(show => (
                    <div key={show.show.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={show.show.image?.medium} alt={show.show.name} className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title">{show.show.name}</h3>
                                <p className="card-text">Genres: {show.show.genres.join(', ')}</p>
                                <Link to={`/show/${show.show.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowList;
