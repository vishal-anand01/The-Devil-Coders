import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, MenuItem, LinearProgress } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import initializeTypewriter from '../../Assets/JavacsriptFile/AboutPageName';
import '../../Assets/CSS/career.css';
import BpoImage from '../../Assets/img/BPO-management-job.webp'
import { Helmet } from 'react-helmet';


const BpoJob = () => {
    useEffect(() => {
        initializeTypewriter([
            { elementId: 'app', text: 'Bpo' },
            // Add more configurations for other elements if needed
        ]);
    }, []);

    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        dob: '',
        gender: '',
        resume: null,
        address: ''
    });
    const [emailError, setEmailError] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [progress, setProgress] = useState(null); // Initially set to null

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const formattedValue = name === 'dob' ? formatDateString(value) : value;
        setFormData({ ...formData, [name]: formattedValue });
        if (name === 'email') {
            setEmailError(!isValidEmail(formattedValue) ? 'Invalid email address' : '');
        }
    };

    const formatDateString = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return `${year}-${month}-${day}`;
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, resume: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidEmail(formData.email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        if (!selectedDate) {
            setErrorMessage('Please select a valid date of birth.');
            return;
        }
        setProgress(0); // Set progress to 0 when form is submitted

        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1)); // Increment progress by 1 every 100 milliseconds
        }, 100);


        try {
            const formDataToSubmit = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSubmit.append(key, value);
            });
            formDataToSubmit.append('dob', selectedDate.toISOString().split('T')[0]);
            const response = await axios.post('http://localhost:5000/careerBPOJob', formDataToSubmit, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
            // Clear the interval and set progress to 100 when form is successfully submitted
            clearInterval(interval);
            setProgress(100);

            setFormData({
                name: '',
                phone: '',
                email: '',
                dob: '',
                gender: '',
                resume: null,
                address: ''
            });
            setSelectedDate(null);
            setSubmitMessage('Form submitted successfully!');
            setErrorMessage('');
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('An error occurred while submitting the form. Please try again.');
            setSubmitMessage('');
        } finally {
            setProgress(null); // Reset progress to null when form submission is complete
        }
    };

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return re.test(email) && email.endsWith('.com');
    };

    return (
        <div>


            {/* Add Helmet component to manage document head */}
            <Helmet>
                {/* Title */}
                <title>Career - BPO | Crew Captivators Solutions Pvt. Ltd.</title>
                {/* Meta description */}
                <meta
                    name="description"
                    content="Unlock endless possibilities with Crew Captivators Solutions Pvt. Ltd. Dive into the world of Business Process Outsourcing (BPO) and join our team in revolutionizing customer service, streamlining operations, and shaping the future of our industry..."
                />
                {/* Other meta tags */}
                {/* Add any other necessary meta tags here */}
            </Helmet>
            <div className="about-us-container">
        <div id="app" className="about-us-text"></div>
      </div>

            <div className="container-xxl py-5 wow fadeInUp career-job-details-page" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-8">
                            <div className="d-flex align-items-center mb-5">
                                <img
                                    className="flex-shrink-0 img-fluid border rounded"
                                    src={BpoImage}
                                    alt=""
                                    style={{ width: 80, height: 80, objectFit: 'cover' }}
                                />
                                <div className="text-start ps-4">
                                    <h3 className="mb-3">BPO</h3>
                                    <span className="text-truncate me-3">
                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                        Naharlagun, Arunachal Pradesh
                                    </span>
                                    <span className="text-truncate me-3">
                                        <i className="far fa-clock text-primary me-2" />
                                        Full Time
                                    </span>
                                    <span className="text-truncate me-0">
                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                        <span style={{ fontSize: '14px' }}><i class="fa-solid fa-indian-rupee-sign"></i></span>123 - <span style={{ fontSize: '14px' }}><i class="fa-solid fa-indian-rupee-sign"></i></span>456
                                    </span>
                                </div>
                            </div>
                            <div className="mb-5">
                                <h4 className="mb-3">Job description</h4>
                                <p>
                                    A Business Process Outsourcing (BPO) job involves handling specific business operations or processes for another company. These processes can range from customer service and technical support to data entry, accounting, human resources, and more. Here's a breakdown of what a BPO job typically involves:</p>

                                <h4 className="mb-3">Responsibility</h4>
                                <p>In a BPO role, employees are entrusted with the responsibility of efficiently managing specific business processes or tasks for client companies, ensuring smooth operations and delivering high-quality outcomes.</p>
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Customer Satisfaction</li>
                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Process Efficiency</li>
                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Data Accuracy
                                    </li>
                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Adaptability</li>
                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Confidentiality
                                    </li>
                                </ul>
                                <h4 class="mb-3">Qualifications</h4>
                                <p>In BPO roles, candidates typically need a combination of relevant education, skills, and experience to effectively carry out their responsibilities. Strong communication skills, problem-solving abilities, and attention to detail are often essential.</p>
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Educational Background</li>
                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Language Proficiency</li>
                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Technical Skills
                                    </li>
                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Customer Service Experience</li>
                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Adaptability and Flexibility
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <h4 className="mb-4">Apply For The Job</h4>
                                <div className="container-fluid p-0">
                                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    name="name"
                                                    label="Your Name"
                                                    fullWidth
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    name="phone"
                                                    label="Phone Number"
                                                    fullWidth
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    name="email"
                                                    label="Email"
                                                    fullWidth
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {emailError && <p className="text-danger">{emailError}</p>}
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        label="Date of Birth"
                                                        value={selectedDate}
                                                        onChange={handleDateChange}
                                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                                        inputFormat="DD/MM/YYYY"
                                                        sx={{ width: '100%' }}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    select
                                                    name="gender"
                                                    label="Gender"
                                                    fullWidth
                                                    value={formData.gender}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value="male">Male</MenuItem>
                                                    <MenuItem value="female">Female</MenuItem>
                                                    <MenuItem value="other">Other</MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <input
                                                    type="file"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileChange}
                                                    name="resume"
                                                    style={{ width: '100%', height: '100%', padding: '12px', boxSizing: 'border-box' }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    name="address"
                                                    label="Address"
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            {progress !== null && (
                                                <Grid item xs={12}>
                                                    <div className="progress-wrapper" style={{ width: '100%', marginTop: '10px', marginBottom: '20px' }}>
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={progress}
                                                            sx={{
                                                                width: '100%',
                                                                '& .MuiLinearProgress-bar': {
                                                                    backgroundColor: '#26d48c' // Set the desired color here
                                                                }
                                                            }}
                                                        />
                                                    </div>

                                                </Grid>
                                            )}
                                            <Grid item xs={12}>
                                                <Button type="submit" variant="contained" className="primary">
                                                    Submit
                                                </Button>
                                            </Grid>
                                            {submitMessage && <p className="career-job-for-submit-message">{submitMessage}</p>}
                                            {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                        </Grid>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Job Summary</h4>
                                <p><i className="fa fa-angle-right text-primary me-2" />Published On: 24 Jun, 2024</p>
                                <p><i className="fa fa-angle-right text-primary me-2" />Vacancy: 10 Position</p>
                                <p><i className="fa fa-angle-right text-primary me-2" />Job Nature: Full Time</p>
                                <p><i className="fa fa-angle-right text-primary me-2" />Salary: <span style={{ fontSize: '13px' }}><i class="fa-solid fa-indian-rupee-sign"></i></span>123 - <span style={{ fontSize: '13px' }}><i class="fa-solid fa-indian-rupee-sign"></i></span>456</p>
                                <p><i className="fa fa-angle-right text-primary me-2" />Location: Naharlagun, Arunachal Pradesh</p>
                                <p className="m-0"><i className="fa fa-angle-right text-primary me-2" />Date Line: 01 Jan, 2025</p>
                            </div>
                            <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Company Detail</h4>
                                <p>One Stop Solutions for your business and discover top-notch services including tax and accounting consultation, tender bidding, online affiliation, IT solutions, NEFA cab services, media production, graphic designing, admission assistance, lead generation, BPO services, social media promotion, app development for Android & iOS, interior designing and many more...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BpoJob;
