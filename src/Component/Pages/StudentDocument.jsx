import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../Assets/CSS/StudentsDocument.css';
import initializeTypewriter from '../Assets/JavacsriptFile/AboutPageName';
import { Grid, TextField, MenuItem, Typography, LinearProgress } from '@mui/material';

import axios from 'axios';

const StudentDocument = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [postalCodeError, setPostalCodeError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [setFirstDropdownValue] = useState('');
    const [setSecondDropdownValue] = useState('');
    const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
    const [progress, setProgress] = useState(null); // Initially set to null
    const [submitMessage, setSubmitMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        institute: '',
        course: '',
        parentName: '',
        parentPhoneNumber: '',
        parentOccupation: '',
        streetAddress: '',
        city: '',
        postalCode: '',
        state: '',
        country: '',
        photo: null,
        candidateAadhar: null,
        candidatePancard: null,
        xthAdmitCard: null,
        xthMarksheet: null,
        xiithAdmitCard: null,
        xiithMarksheet: null,
        tc: null,
    });


    useEffect(() => {
        initializeTypewriter([
            { elementId: 'app', text: 'Student Details' },
            // Add more configurations for other elements if needed
        ]);
    }, []);



    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(currentStep + 1);
            setErrorMessage('');
        } else {
            setErrorMessage('Please fill in all required fields.');
        }
    };

    const prevStep = () => setCurrentStep(currentStep - 1);


    const [formErrors, setFormErrors] = useState({
        firstName: false,
        phone: false,
        email: false,
        dateOfBirth: false,
        gender: false,
        institute: false,
        course: false,
        parentName: false,
        parentPhoneNumber: false,
        parentOccupation: false,
        streetAddress: false,
        city: false,
        postalCode: false,
        state: false,
        country: false,
    });


    // Function to handle change in the first dropdown
    const handleFirstDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setFirstDropdownValue(selectedValue);
        setFormData({ ...formData, institute: selectedValue });

        // Set options for the second dropdown based on the selection
        switch (selectedValue) {
            case 'Acharya':
                setSecondDropdownOptions(['Acharya', 'a2']);
                setSecondDropdownValue('');
                break;
            case 'Bangalore':
                setSecondDropdownOptions(['Bangalore', 'b2']);
                setSecondDropdownValue('');
                break;
            case 'Ebenezer':
                setSecondDropdownOptions(['Ebenezer', 'b2']);
                setSecondDropdownValue('');
                break;
            case 'Impact':
                setSecondDropdownOptions(['Impact', 'b2']);
                setSecondDropdownValue('');
                break;
            case 'Koshys':
                setSecondDropdownOptions(['Koshys', 'b2']);
                setSecondDropdownValue('');
                break;
            default:
                setSecondDropdownOptions([]);
                setSecondDropdownValue('');
                break;
        }
    };


    const handleSecondDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSecondDropdownValue(selectedValue);
        setFormData({ ...formData, course: selectedValue });
    };

    // Function to handle change in the mobile number field
    const handleMobileNumberChange = (event) => {
        const inputMobileNumber = event.target.value;
        if (/^\d{0,10}$/.test(inputMobileNumber)) {
            setFormData({ ...formData, phone: inputMobileNumber });
            setFormErrors({ ...formErrors, phone: false });
        } else {
            setFormErrors({ ...formErrors, phone: true });
        }
    };


    const handleEmailChange = (event) => {
        const inputEmail = event.target.value;
        if (!validateEmail(inputEmail)) {
            setFormErrors({ ...formErrors, email: true });
        } else {
            setFormErrors({ ...formErrors, email: false });
            setFormData({ ...formData, email: inputEmail });
        }
    };
    const validateEmail = (email) => {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    };




    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setFormErrors({ ...formErrors, [name]: false });

        // Validate postal code to allow only 6 digits
        if (name === 'postalCode') {
            if (/^\d{0,6}$/.test(value)) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
                setPostalCodeError(value.length < 6 ? 'Invalid postal code' : ''); // Set error if postal code is less than 6 digits
            } else {
                setPostalCodeError('Invalid characters'); // Set error if characters other than digits are entered
            }
        }

        // Validate phone number to allow only 10 digits
        if (name === 'parentPhoneNumber') {
            if (/^\d{0,10}$/.test(value)) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
                setPhoneError(value.length !== 10 && value.length > 0 ? 'Invalid phone number' : ''); // Set error if phone number is not 10 digits
            } else {
                setPhoneError('Invalid characters'); // Set error if characters other than digits are entered
            }
        }
    };

    const handleDateOfBirthChange = (event) => {
        const inputDateOfBirth = event.target.value;
        setFormData({ ...formData, dateOfBirth: inputDateOfBirth });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, [event.target.name]: file });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateStep(currentStep)) {
            setErrorMessage('Please fill in all required fields.');
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

            const response = await axios.post('http://localhost:5000/studentDocuments', formDataToSubmit, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
            // Clear the interval and set progress to 100 when form is successfully submitted
            clearInterval(interval);
            setProgress(100);


            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                dateOfBirth: '',
                gender: '',
                institute: '',
                course: '',
                parentName: '',
                parentPhoneNumber: '',
                parentOccupation: '',
                streetAddress: '',
                city: '',
                postalCode: '',
                state: '',
                country: '',
                photo: null,
                candidateAadhar: null,
                candidatePancard: null,
                xthAdmitCard: null,
                xthMarksheet: null,
                xiithAdmitCard: null,
                xiithMarksheet: null,
                tc: null,
            });


            setSubmitMessage('Form submitted successfully!');
            setErrorMessage('');

            // Proceed to next step only on successful form submission
            nextStep();

        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('An error occurred while submitting the form. Please try again.');
            setSubmitMessage('');
        } finally {
            setProgress(null); // Reset progress to null when form submission is complete
        }
    };

    const validateStep = (step) => {
        let isValid = true;
        switch (step) {
            case 1:
                if (
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.phone ||
                    !formData.email ||
                    !formData.dateOfBirth ||
                    !formData.gender ||
                    !formData.institute ||
                    !formData.course
                ) {
                    isValid = false;
                    setFormErrors({
                        ...formErrors,
                        firstName: !formData.firstName,
                        lastName: !formData.lastName,
                        phone: !formData.phone,
                        email: !formData.email,
                        dateOfBirth: !formData.dateOfBirth,
                        gender: !formData.gender,
                        institute: !formData.institute,
                        course: !formData.course,
                    });
                }
                break;
            case 2:
                if (
                    !formData.parentName ||
                    !formData.parentPhoneNumber ||
                    !formData.parentOccupation ||
                    !formData.streetAddress ||
                    !formData.city ||
                    !formData.postalCode ||
                    !formData.state ||
                    !formData.country
                ) {
                    isValid = false;
                    setFormErrors({
                        ...formErrors,
                        parentName: !formData.parentName,
                        parentPhoneNumber: !formData.parentPhoneNumber,
                        parentOccupation: !formData.parentOccupation,
                        streetAddress: !formData.streetAddress,
                        city: !formData.city,
                        postalCode: !formData.postalCode,
                        state: !formData.state,
                        country: !formData.country,
                    });
                }
                break;
            case 3:
                if (
                    !formData.photo ||
                    !formData.candidateAadhar ||
                    !formData.candidatePancard ||
                    !formData.xthAdmitCard ||
                    !formData.xthMarksheet ||
                    !formData.xiithAdmitCard ||
                    !formData.xiithMarksheet ||
                    !formData.tc
                ) {
                    isValid = false;
                    setFormErrors({
                        ...formErrors,
                        photo: !formData.photo,
                        candidateAadhar: !formData.candidateAadhar,
                        candidatePancard: !formData.candidatePancard,
                        xthAdmitCard: !formData.xthAdmitCard,
                        xthMarksheet: !formData.xthMarksheet,
                        xiithAdmitCard: !formData.xiithAdmitCard,
                        xiithMarksheet: !formData.xiithMarksheet,
                        tc: !formData.tc,
                    });
                }
                break;
            default:
                break;
        }
        return isValid;
    };



    return (
        <>
            <div className='Students-Document-Page'>

                {/* Add Helmet component to manage document head */}
                <Helmet>
                    {/* Title */}
                    <title>Student Registration - Crew Captivators Solutions Pvt. Ltd.</title>
                    {/* Meta description */}
                    <meta
                        name="description"
                        content="Unlock lucrative opportunities with our Tender Bidding Services. Strategically navigate the bidding process and secure contracts with confidence. Expertise tailored to your success..."
                    />
                    {/* Other meta tags */}
                    {/* Add any other necessary meta tags here */}
                </Helmet>

                <div className="about-us-container">
                    <div id="app" className="about-us-text"></div>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                            <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                                <h2 id="heading">Student Documentation Form</h2>

                                <form id="msform" onSubmit={handleSubmit} encType="multipart/form-data">

                                    {/* progressbar */}
                                    <ul id="progressbar" className='p-0'>
                                        <li className={currentStep >= 1 ? "active" : ""} id="account">
                                            <strong>Student</strong>
                                        </li>
                                        <li className={currentStep >= 2 ? "active" : ""} id="personal">
                                            <strong>Parent</strong>
                                        </li>
                                        <li className={currentStep >= 3 ? "active" : ""} id="payment">
                                            <strong>Document</strong>
                                        </li>
                                        <li className={currentStep >= 4 ? "active" : ""} id="confirm">
                                            <strong>Finish</strong>
                                        </li>
                                    </ul>
                                    {/* Additional progress bar */}
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${currentStep * 25}%`, background: 'linear-gradient(to bottom, rgb(7, 121, 136), rgb(0, 147, 163), rgb(0, 185, 203))' }} aria-valuenow={currentStep * 25} aria-valuemin="0" aria-valuemax="100"></div>

                                    </div>{" "}
                                    <br />
                                    {/* fieldsets */}
                                    {/* Each fieldset should be displayed conditionally based on currentStep */}
                                    {currentStep === 1 && (
                                        <fieldset>
                                            {/* Step 1 fields */}
                                            {/* Add your Step 1 fields here */}

                                            <div class="form-card">
                                                <div class="row">
                                                    <div class="col-7">
                                                        <h2 class="fs-title">Student Information:</h2>
                                                    </div>
                                                    <div class="col-5">
                                                        <h2 class="steps">Step 1 - 4</h2>
                                                    </div>
                                                </div>
                                                <Grid container spacing={2}>

                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="First Name"
                                                            value={formData.firstName}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="firstName"
                                                            required
                                                            error={formErrors.firstName}
                                                            helperText={formErrors.firstName ? 'Required field' : ''}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Last Name"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="lastName"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Phone Number"
                                                            value={formData.phone}
                                                            onChange={handleMobileNumberChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="phone"
                                                            required
                                                            error={formErrors.phone}
                                                            helperText={formErrors.phone ? 'Please enter a valid phone number' : ''}
                                                            inputProps={{ maxLength: 10 }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Email"
                                                            value={formData.email}
                                                            onChange={handleEmailChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="email"
                                                            required
                                                            error={formErrors.email}
                                                            helperText={formErrors.email ? 'Please enter a valid email' : ''}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={12} sm={6}>

                                                        <TextField
                                                            label="Date of Birth"
                                                            type="date"
                                                            value={formData.dateOfBirth}
                                                            onChange={handleDateOfBirthChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="dateOfBirth"
                                                            required
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            error={formErrors.dateOfBirth}
                                                            helperText={formErrors.dateOfBirth ? 'Required field' : ''}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            select
                                                            label="Gender"
                                                            value={formData.gender}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="gender"
                                                            required
                                                            error={formErrors.gender}
                                                            helperText={formErrors.gender ? 'Required field' : ''}
                                                        >
                                                            <MenuItem value="Male">Male</MenuItem>
                                                            <MenuItem value="Female">Female</MenuItem>
                                                            <MenuItem value="Other">Other</MenuItem>
                                                        </TextField>
                                                    </Grid>

                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            select
                                                            label="Institute"
                                                            value={formData.institute}
                                                            onChange={handleFirstDropdownChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="institute"
                                                            required
                                                            error={formErrors.institute}
                                                            helperText={formErrors.institute ? 'Required field' : ''}
                                                        >
                                                            <MenuItem value="Acharya">Acharya</MenuItem>
                                                            <MenuItem value="Bangalore">Bangalore</MenuItem>
                                                            <MenuItem value="Ebenezer">Ebenezer</MenuItem>
                                                            <MenuItem value="Impact">Impact</MenuItem>
                                                            <MenuItem value="Koshys">Koshys</MenuItem>
                                                        </TextField>

                                                    </Grid>

                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            select
                                                            label="Course"
                                                            value={formData.course}
                                                            onChange={handleSecondDropdownChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="course"
                                                            required
                                                            error={formErrors.course}
                                                            helperText={formErrors.course ? 'Required field' : ''}
                                                        >
                                                            {secondDropdownOptions.map((option) => (
                                                                <MenuItem key={option} value={option}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <button
                                                type="button"
                                                className="next action-button"
                                                onClick={nextStep}
                                            >
                                                Next
                                            </button>
                                        </fieldset>
                                    )}
                                    {currentStep === 2 && (
                                        <fieldset>
                                            {/* Step 2 fields */}
                                            <div class="form-card">
                                                <div class="row">
                                                    <div class="col-7">
                                                        <h2 class="fs-title">Parent Information:</h2>
                                                    </div>
                                                    <div class="col-5">
                                                        <h2 class="steps">Step 2 - 4</h2>
                                                    </div>
                                                </div>


                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Parent Name"
                                                            value={formData.parentName}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="parentName"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Phone Number"
                                                            value={formData.parentPhoneNumber}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="parentPhoneNumber"
                                                            error={phoneError !== ''}
                                                            helperText={phoneError}
                                                            inputProps={{ maxLength: 10 }} // Limit input to 10 characters
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Parent Occupation"
                                                            value={formData.parentOccupation}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="parentOccupation"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            label="Street Address"
                                                            value={formData.streetAddress}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="streetAddress"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="City"
                                                            value={formData.city}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="city"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Postal/Zipcode"
                                                            value={formData.postalCode}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="postalCode"
                                                            error={postalCodeError !== ''}
                                                            helperText={postalCodeError}
                                                            inputProps={{ maxLength: 6 }} // Limit input to 6 characters
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="State"
                                                            value={formData.state}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="state"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Country"
                                                            value={formData.country}
                                                            onChange={handleChange}
                                                            fullWidth
                                                            margin="normal"
                                                            name="country"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            {/* Add your Step 2 fields here */}
                                            <button
                                                type="button"
                                                className="next action-button"
                                                onClick={nextStep}
                                            >
                                                Next
                                            </button>
                                            <button
                                                type="button"
                                                className="previous action-button-previous"
                                                onClick={prevStep}
                                            >
                                                Previous
                                            </button>
                                        </fieldset>
                                    )}
                                    {currentStep === 3 && (
                                        <fieldset>
                                            {/* Step 3 fields */}

                                            <div class="form-card">
                                                <div class="row">
                                                    <div class="col-7">
                                                        <h2 class="fs-title">Document Upload:</h2>
                                                    </div>
                                                    <div class="col-5">
                                                        <h2 class="steps">Step 3 - 4</h2>
                                                    </div>
                                                </div>

                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={6}>
                                                        <Typography variant="subtitle1" sx={{ textAlign: 'left', padding: '15px 0px' }}>Candidate Photo</Typography>
                                                        <input
                                                            type="file"
                                                            accept=".pdf,.doc,.docx"
                                                            onChange={(e) => handleFileChange(e, 'photo')}
                                                            name="photo"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Typography variant="subtitle1" sx={{ textAlign: 'left', padding: '15px 0px' }}>Candidate Aadhar Card</Typography>
                                                        <input
                                                            type="file"
                                                            accept=".pdf,.doc,.docx*"
                                                            name="candidateAadhar"
                                                            onChange={(e) => handleFileChange(e, 'candidateAadhar')}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Typography variant="subtitle1" sx={{ textAlign: 'left', padding: '15px 0px' }}>Candidate Pancard</Typography>
                                                        <input
                                                            type="file"
                                                            accept=".pdf,.doc,.docx*"
                                                            name="candidatePancard"
                                                            onChange={(e) => handleFileChange(e, 'candidatePancard')}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Typography variant="subtitle1" sx={{ textAlign: 'left', padding: '15px 0px' }}>Xth Admit Card</Typography>
                                                        <input
                                                            type="file"
                                                            accept=".pdf,.doc,.docx*"
                                                            name="xthAdmitCard"
                                                            onChange={(e) => handleFileChange(e, 'xthAdmitCard')}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Typography variant="subtitle1" sx={{ textAlign: 'left', padding: '15px 0px' }}>Xth Marksheet</Typography>
                                                        <input
                                                            type="file"
                                                            accept=".pdf,.doc,.docx*"
                                                            name="xthMarksheet"
                                                            onChange={(e) => handleFileChange(e, 'xthMarksheet')}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Typography variant="subtitle1" sx={{ textAlign: 'left', padding: '15px 0px' }}>Xiith Admit Card</Typography>
                                                        <input
                                                            type="file"
                                                            accept=".pdf,.doc,.docx*"
                                                            name="xiithAdmitCard"
                                                            onChange={(e) => handleFileChange(e, 'xiithAdmitCard')}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Typography variant="subtitle1" sx={{ textAlign: 'left', padding: '15px 0px' }}>Xiith Marksheet</Typography>
                                                        <input
                                                            type="file"
                                                            accept=".pdf,.doc,.docx*"
                                                            name="xiithMarksheet"
                                                            onChange={(e) => handleFileChange(e, 'xiithMarksheet')}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Typography variant="subtitle1" sx={{ textAlign: 'left', padding: '15px 0px' }}>TC (Transfer Certificate)</Typography>
                                                        <input
                                                            type="file"
                                                            accept=".pdf,.doc,.docx"
                                                            name="tc"
                                                            onChange={(e) => handleFileChange(e, 'tc')}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>

                                            </div>


                                            {/* Add your Step 3 fields here */}
                                            <div className="progress-wrapper" style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}>
                                                {progress !== null && <LinearProgress variant="determinate" value={progress}
                                                    sx={{
                                                        width: '100%',
                                                        '& .MuiLinearProgress-bar': {
                                                            backgroundColor: '#26d48c' // Set the desired color here
                                                        }
                                                    }} />}
                                            </div>

                                            <button
                                                type="submit"
                                                className="submit action-button"
                                                variant="contained"
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="previous action-button-previous"
                                                onClick={prevStep}
                                            >
                                                Previous
                                            </button>


                                        </fieldset>
                                    )}
                                    {currentStep === 4 && (
                                        <fieldset>
                                            {/* Step 4 fields */}

                                            <div class="form-card">
                                                <div class="row">
                                                    <div class="col-7">
                                                        <h2 class="fs-title">Finish:</h2>
                                                    </div>
                                                    <div class="col-5">
                                                        <h2 class="steps">Step 4 - 4</h2>
                                                    </div>
                                                </div> <br /><br />
                                                <h2 class="purple-text text-center"><strong>SUCCESS !</strong></h2> <br />
                                                <div class="row justify-content-center">
                                                    <div class="col-3"> <img src="https://i.imgur.com/GwStPmg.png" class="fit-image" alt='success message' /> </div>
                                                </div> <br /><br />
                                                <div class="row justify-content-center">
                                                    <div class="col-7 text-center">
                                                        {submitMessage && <p className="career-job-for-submit-message">{submitMessage}</p>}
                                                        {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Add your Step 4 fields here */}

                                        </fieldset>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentDocument;
