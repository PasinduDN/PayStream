import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Box
} from "@mui/material";
import SideNav from "./SideNav";
import Colors from "../assets/Styles/Colors";
import Fonts from "../assets/Styles/Fonts";

export default function Company() {
    const [companyDetails, setCompanyDetails] = useState({
        companyName: "",
        companyType: "",
        industry: "",
        email: "",
        companyWebsite: "",
        contactNumber: "",
        companyAddress: ""
    });

    // Fetch current data when the component mounts
    useEffect(() => {
        async function fetchCompanyDetails() {
            try {
                // Replace this with your actual API endpoint
                const response = await fetch("/api/company-details");
                const data = await response.json();
                setCompanyDetails(data);
            } catch (error) {
                console.error("Failed to fetch company details:", error);
            }
        }

        fetchCompanyDetails();
    }, []);

    async function SaveCompanyDetails(values) {
        console.log("Company details saved successfully:", values);
        try {
            // Replace this with your actual API endpoint
            const response = await fetch("/api/save-company-details", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                throw new Error("Failed to save company details");
            }

            console.log("Company details saved successfully:", values);
        } catch (error) {
            console.error("Error saving company details:", error);
        }
    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    height: '100%',
                    width: "100vw",
                    background: Colors.palette.general.color01,
                    color: "#ffffff",
                    marginTop: "50px"
                }}
            >
                <SideNav />
                <Box
                    sx={{
                        display: "flex",
                        height: { xs: "100%", sm: "100vh", md: "100vh" } ,
                        width: "100vw",
                        background: Colors.palette.primary.contrastText,
                        color: "#ffffff",
                        margin: { xs: "15px", sm: "30px", md: "50px" },
                        borderRadius: "10px"
                    }}
                >
                    <Formik
                        enableReinitialize
                        initialValues={{
                            companyName: companyDetails.companyName,
                            companyType: companyDetails.companyType,
                            industry: companyDetails.industry,
                            email: companyDetails.email,
                            companyWebsite: companyDetails.companyWebsite,
                            contactNumber: companyDetails.contactNumber,
                            companyAddress: companyDetails.companyAddress
                        }}
                        validationSchema={Yup.object().shape({
                            companyName: Yup.string().required("Company Name is required"),
                            email: Yup.string()
                                .email("Invalid email format")
                                .required("Email is required"),
                            contactNumber: Yup.string()
                                .matches(/^[0-9]{10}$/, "Must be a 10-digit phone number")
                                .required("Contact Number is required"),
                            companyType: Yup.string().required("Company Type is required"),
                            industry: Yup.string().required("Industry is required"),
                            companyWebsite: Yup.string().url("Invalid URL format"),
                            companyAddress: Yup.string().required("Company Address is required")
                        })}
                        onSubmit={SaveCompanyDetails}
                    >
                        {({ values, touched, errors, handleChange, handleBlur }) => (
                            <Form>
                                <Box sx={{ maxWidth: "100%", margin: "0 auto", p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        sx={{
                                            fontFamily: Fonts.Headers.Type2.fontFamily,
                                            fontSize: Fonts.Headers.Type2.fontSize,
                                            fontWeight: Fonts.Headers.Type2.fontWeight,
                                            letterSpacing: Fonts.Headers.Type2.letterSpacing,
                                            color: Colors.palette.general.color04,
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
                                                value={values.companyName} // Use Formik values
                                                onChange={handleChange} // Use Formik handleChange
                                                onBlur={handleBlur} // Use Formik handleBlur
                                                error={touched.companyName && Boolean(errors.companyName)}
                                                helperText={touched.companyName && errors.companyName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4}>
                                            <TextField
                                                fullWidth
                                                label="Company Type"
                                                name="companyType"
                                                value={values.companyType}
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
                                                value={values.industry}
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
                                                value={values.email}
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
                                                value={values.companyWebsite}
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
                                                value={values.contactNumber}
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
                                                value={values.companyAddress}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.companyAddress && Boolean(errors.companyAddress)}
                                                helperText={touched.companyAddress && errors.companyAddress}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6} md={3} />
                                        <Grid item xs={12} sm={6} md={3} />
                                        <Grid item xs={12} sm={6} md={3} />
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
