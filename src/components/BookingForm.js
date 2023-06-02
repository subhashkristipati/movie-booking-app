import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ show }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        showName: show.name,
        name: '',
        email: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('bookingData', JSON.stringify(formData));
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="my-4">
            <h3>Book a ticket for {show.name}</h3>
            <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="form-control" required />
            </div>
            <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary">Book Ticket</button>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Booking Successful</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Your ticket has been booked successfully.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={closeModal}>
                                    Go to ShowList
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
}

export default BookingForm;
