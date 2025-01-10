import SideNav from "./SideNav";
import Box from '@mui/material/Box';
import Colors from "../assets/Styles/Colors";
import Fonts from "../assets/Styles/Fonts";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    TextField,
    Button,
    Grid,
    Typography,
} from '@mui/material';

export default function Company() {

    const [companyDetails, setCompanyDetails] = useState({
        companyName: '',
        companyType: '',
        industry: '',
        email: '',
        companyWebsite: '',
        contactNumber: '',
        companyAddress: '',
      });

    const initialValues = {
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        contactNumber: '',
        companyType: '',
        industry: '',
        companyWebsite: '',
        companyAddress: '',
    };

    // const validationSchema = Yup.object().shape({
    //     firstName: Yup.string().required('First Name is required'),
    //     lastName: Yup.string().required('Last Name is required'),
    //     companyName: Yup.string().required('Company Name is required'),
    //     email: Yup.string()
    //         .email('Invalid email format')
    //         .required('Email is required'),
    //     contactNumber: Yup.string()
    //         .matches(/^[0-9]{10}$/, 'Must be a 10-digit phone number')
    //         .required('Contact Number is required'),
    //     companyType: Yup.string().required('Company Type is required'),
    //     industry: Yup.string().required('Industry is required'),
    //     companyWebsite: Yup.string().url('Invalid URL format'),
    //     companyAddress: Yup.string().required('Company Address is required'),
    // });

    const handleSubmit = (values) => {
        console.log('Form Values', values);
    };

    return (
        <>
            <Box sx={{
                display: 'flex',
                // height: '100vh', // Full viewport height
                width: '100vw', // Full viewport width
                background: Colors.palette.general.color01,
                color: '#ffffff', // Adjust text color for visibility
                marginTop: '50px'
            }}
            >
                <SideNav />
                <Box
                    sx={{
                        display: 'flex',
                        height: '100vh', // Full viewport height
                        width: '100vw', // Full viewport width
                        background: Colors.palette.primary.contrastText,
                        color: '#ffffff', // Adjust text color for visibility
                        margin: { xs: '15px', sm: '30px', md: '50px' },
                        borderRadius: '10px'
                    }}
                >
                    <Formik
                        initialValues={{
                            companyName: companyDetails.companyName,
                            companyType: companyDetails.companyType,
                            industry: companyDetails.industry,
                            email: companyDetails.email,
                            companyWebsite: companyDetails.companyWebsite,
                            contactNumber: companyDetails.contactNumber,
                            companyAddress: companyDetails.companyAddress,
                        }}
                        validationSchema={
                            Yup.object().shape({
                                // firstName: Yup.string().required('First Name is required'),
                                // lastName: Yup.string().required('Last Name is required'),
                                companyName: Yup.string().required('Company Name is required'),
                                email: Yup.string()
                                    .email('Invalid email format')
                                    .required('Email is required'),
                                contactNumber: Yup.string()
                                    .matches(/^[0-9]{10}$/, 'Must be a 10-digit phone number')
                                    .required('Contact Number is required'),
                                companyType: Yup.string().required('Company Type is required'),
                                industry: Yup.string().required('Industry is required'),
                                companyWebsite: Yup.string().url('Invalid URL format'),
                                companyAddress: Yup.string().required('Company Address is required'),
                            })
                        }
                        onSubmit={handleSubmit}
                    >
                        {({ 
                            touched, 
                            errors, 
                            handleChange, 
                            handleBlur, 
                            values 
                        }) => (
                            <Form>
                                <Box sx={{ maxWidth: '100%', margin: '0 auto', p: 3 }}>
                                    <Grid container spacing={3}>
                                        {/* <Grid item xs={12} sm={6} md={3}>
                                            <TextField
                                                fullWidth
                                                label="First Name"
                                                name="firstName"
                                                value={values.firstName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.firstName && Boolean(errors.firstName)}
                                                helperText={touched.firstName && errors.firstName}
                                            />
                                        </Grid> */}

                                        {/* <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Last Name"
                                                name="lastName"
                                                value={values.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.lastName && Boolean(errors.lastName)}
                                                helperText={touched.lastName && errors.lastName}
                                            />
                                        </Grid> */}
                                    </Grid>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        sx={{
                                            mt: 3,
                                            fontFamily: Fonts.Headers.Type2.fontFamily, // Apply custom font
                                            fontSize: Fonts.Headers.Type2.fontSize, // Apply responsive font size
                                            fontWeight: Fonts.Headers.Type2.fontWeight, // Apply font weight
                                            letterSpacing: Fonts.Headers.Type2.letterSpacing, // Apply letter spacing
                                            color: Colors.palette.general.color04, // Font color
                                        }}
                                    >
                                        Company Details
                                    </Typography>

                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6} md={4}>
                                            <TextField
                                                fullWidth
                                                label="Company Name"
                                                name="companyName"
                                                value={companyDetails.companyName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.companyName && Boolean(errors.companyName)}
                                                helperText={touched.companyName && errors.companyName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4}>
                                            <TextField
                                                fullWidth
                                                label="Company Type"
                                                name="companyType"
                                                value={companyDetails.companyType}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.companyType && Boolean(errors.companyType)}
                                                helperText={touched.companyType && errors.companyType}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={4}>
                                            <TextField
                                                fullWidth
                                                label="Industry"
                                                name="industry"
                                                value={companyDetails.industry}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.industry && Boolean(errors.industry)}
                                                helperText={touched.industry && errors.industry}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={4}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                name="email"
                                                value={companyDetails.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.email && Boolean(errors.email)}
                                                helperText={touched.email && errors.email}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={4}>
                                            <TextField
                                                fullWidth
                                                label="Company Website (if applicable)"
                                                name="companyWebsite"
                                                value={companyDetails.companyWebsite}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.companyWebsite && Boolean(errors.companyWebsite)}
                                                helperText={touched.companyWebsite && errors.companyWebsite}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={4}>
                                            <TextField
                                                fullWidth
                                                label="Contact Number"
                                                name="contactNumber"
                                                value={companyDetails.contactNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.contactNumber && Boolean(errors.contactNumber)}
                                                helperText={touched.contactNumber && errors.contactNumber}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={4}>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                label="Company Address"
                                                name="companyAddress"
                                                value={companyDetails.companyAddress}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.companyAddress && Boolean(errors.companyAddress)}
                                                helperText={touched.companyAddress && errors.companyAddress}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6} md={3}>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                sx={{ mt: 2 }}
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>

        </>
    );
}