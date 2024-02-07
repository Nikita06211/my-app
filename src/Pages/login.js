import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Components/firebase'; // Assuming you have Firebase initialized in firebase.js
import Dashboard from './Dashboard'; // Import the Dashboard component

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // User logged in successfully
            setUser(userCredential.user);
        } catch (error) {
            setError(error.message);
            console.error('Error logging in:', error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            // User logged in successfully with Google
            setUser(userCredential.user);
        } catch (error) {
            setError(error.message);
            console.error('Error logging in with Google:', error.message);
        }
    };

    if (user) {
        // If user is logged in, render the Dashboard component
        return <Dashboard user={user} />;
    }

    return (
        <Grid container justifyContent="center" alignItems="center" height="100vh">
            <Card style={{ maxWidth: 400, maxHeight: 700 }}>
                <CardContent style={{ position: 'relative', padding: '0 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h5" align="left" style={{ margin: '1rem 1rem', alignSelf: 'flex-start', fontFamily: 'unset', fontWeight: '600' }}>
                            <span style={{ borderBottom: '3px solid black', paddingBottom: '0' }}>Login</span>
                        </Typography>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="flex-start"
                        style={{ backgroundColor: 'white'}}>
                            <img
                                src={process.env.PUBLIC_URL + '/Assets/login.png'}
                                alt="Login Image"
                                style={{ width: '60%', height: 'auto' }}
                            />
                        </Grid>
                    </div>
                    <form style={{ padding: '0.7rem 1.5rem' }} onSubmit={handleLogin}>
                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                        />
                        {error && <Typography variant="body2" color="error" align="center" style={{ marginBottom: '0.5rem' }}>{error}</Typography>}
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                        </Button>
                    </form>
                    <Typography variant="body2" align="center" style={{ marginBottom: '0.5rem' }}>
                        or
                    </Typography>
                    <Button
                        style={{ marginLeft: '1.4rem', marginRight: '1.5rem', width: '90%' }}
                        variant="outlined"
                        color="primary"
                        fullWidth
                        startIcon={<FaGoogle />}
                        onClick={handleGoogleLogin} // Call handleGoogleLogin on button click
                    >
                        Login with Google
                    </Button>
                    <Typography variant="body2" align="center" style={{ margin: '1rem 1rem' }}>
                        Don't have an account? <Link href="/signup">Sign up</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export { Login };
