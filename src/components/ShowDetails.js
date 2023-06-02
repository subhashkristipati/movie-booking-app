// src/components/ShowDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';

function ShowDetails() {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then(response => {
                setShow(response.data);
            });
    }, [id]);

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h2 className="my-4">{show.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            <BookingForm show={show} />
        </div>
    );
}

export default ShowDetails;
