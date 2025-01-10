import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.js"; // Adjust the import path to your Firebase config
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../assets/LoadingIndicator.jsx";
import { TextField, Button, Box, Typography } from '@mui/material';
import Colors from "../assets/Styles/Colors.jsx";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true); // Set loading to true

        // Simulate a delay of 1 second (1000ms)
        setTimeout(async () => {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                navigate("/dashboard"); // Navigate to the dashboard
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Set loading to false after the login process completes
            }
        }, 500); // Delay of 1000ms (1 second)
    };

    if (loading) {
        return <LoadingIndicator />; // Show loading indicator if loading is true
    }

    return (
        <Box
            sx={{
                height: '100vh',             // Full height of the viewport
                display: 'flex',             // Flexbox container
                flexDirection: 'column',     // Stack items vertically
                alignItems: 'center',        // Horizontally center items
                justifyContent: 'center',    // Vertically center items
                padding: 2,                  // Padding around the container
            }}
        >
            <Typography variant="h5" gutterBottom>
               - PayStream -
            </Typography>
            <form onSubmit={handleLogin}>
                <Box sx={{ width: '500px', marginBottom: 2 }}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        variant="outlined"
                    />
                </Box>
                <Box sx={{ width: '500px', marginBottom: 2 }}>
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        variant="outlined"
                    />
                </Box>
                {error && (
                    <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
                        {error}
                    </Typography>
                )}
                <Button
                    type="submit"
                    variant="contained"
                    color= 'Colors'
                    fullWidth
                    sx={{
                        padding: '10px',
                        fontSize: '16px',
                        backgroundColor: Colors.palette.general.color03, // Set button color to color04
                        color: Colors.palette.primary.contrastText, // Change font color to white
                        '&:hover': {
                            backgroundColor: Colors.palette.general.color04, // Ensure color remains the same on hover
                        },
                    }}
                >
                    Login
                </Button>
            </form>

        </Box>
    );
};

export default Login;
