import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import axios from 'axios';
import '../Assets/CSS/Chat.css';

const Chat = () => {
    const initialFormData = {
        name: '',
        phone: '',
        email: '',
        message: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({
        phoneError: '',
        emailError: ''
    });

    const [loading, setLoading] = useState(false); // State for loading indicator
    const [submitMessage, setSubmitMessage] = useState(''); // State for success message
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validate numeric input for phone number
        if (name === 'phone') {
            // Only allow numeric input
            if (!(/^\d*$/.test(value))) {
                return; // Do not update state if non-numeric input for phone
            }
            // Limit to exactly 10 digits
            if (value.length > 10) {
                return; // Do not update state if more than 10 digits
            }
            // Update form data and clear phone error when 10 digits are entered
            setFormData({ ...formData, [name]: value });
            if (value.length === 10 || value.length === 0) {
                setFormErrors({ ...formErrors, phoneError: '' });
            } else if (value.length < 10) {
                setFormErrors({ ...formErrors, phoneError: 'Please enter a valid 10-digit phone number.' });
            }
        } else if (name === 'email') {
            // Update email field and validate
            setFormData({ ...formData, [name]: value });
            if (value.length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                setFormErrors({ ...formErrors, emailError: '' });
            } else {
                setFormErrors({ ...formErrors, emailError: 'Please enter a valid email address.' });
            }
        } else {
            // Update other form fields
            setFormData({ ...formData, [name]: value });
        }
    };

    const validatePhone = (phone) => {
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(phone);
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if phone and email are valid before submitting the form
        let valid = true;
        const { phone, email } = formData;
        const errors = {
            phoneError: '',
            emailError: ''
        };

        // Validate phone number
        if (!phone || !validatePhone(phone)) {
            errors.phoneError = 'Please enter a valid phone number.';
            valid = false;
        }

        // Validate email
        if (!email || !validateEmail(email)) {
            errors.emailError = 'Please enter a valid email address.';
            valid = false;
        }

        if (!valid) {
            // If form is invalid, update the form errors and return
            setFormErrors(errors);
            return;
        }

        try {
            setLoading(true); // Show loading indicator
            // Send form data to backend API
            const response = await axios.post('http://localhost:5000/chatBox', formData);
            console.log(response.data); // Log response from backend
            // Clear form fields after successful submission
            setFormData(initialFormData);
            // Show success message
            setSubmitMessage('Form submitted successfully!');
            // Clear error message
            setErrorMessage('');

        } catch (error) {
            console.error('Error submitting form:', error);
            // Show error message
            setErrorMessage('An error occurred while submitting the form. Please try again.');
            // Clear success message
            setSubmitMessage('');
        } finally {
            setLoading(false); // Hide loading indicator
        }
    };

    return (
        <>
            <div className='chatBox'>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className='chatbox-label'>
                    <i className="fab fa-facebook-messenger"></i>
                    <i className="fas fa-times"></i>
                </label>
                <div className="wrapper">
                    <div className="head-text">Crew Captivators Solutions Pvt. Ltd.</div>
                    <div className="chat-box">
                        <div className="desc-text">Please fill out the form below and we will get back to you as soon as possible.</div>
                        <form onSubmit={handleSubmit} method='post'>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="name"
                                        label="Your Name"
                                        variant="outlined"
                                        fullWidth
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="tel"
                                        name="phone"
                                        label="Your Phone Number"
                                        variant="outlined"
                                        fullWidth
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        error={!!formErrors.phoneError}
                                        helperText={formErrors.phoneError}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="email"
                                        name="email"
                                        label="Email Address"
                                        variant="outlined"
                                        fullWidth
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        error={!!formErrors.emailError}
                                        helperText={formErrors.emailError}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="message"
                                        label="Explain your queries.."
                                        variant="outlined"
                                        multiline
                                        rows={3}
                                        fullWidth
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Submit'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                        {submitMessage && <div className="success-message">{submitMessage}</div>}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;
