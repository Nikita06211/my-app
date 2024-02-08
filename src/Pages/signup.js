import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Components/firebase';

export const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setSuccessMessage('Sign up successful! You can now log in.');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            setError(error.message);
            console.error('Error signing up:', error.message);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;
            setSuccessMessage('Sign up successful! You can now log in.');
        } catch (error) {
            setError(error.message);
            console.error('Error signing up with Google:', error.message);
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" height="100vh">
            <Card style={{ maxWidth: 400, maxHeight: 700 }}>
                <CardContent style={{ position: 'relative', padding: '0 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h5" align="left" style={{ margin: '1rem 1rem', alignSelf: 'flex-start', fontFamily: 'unset', fontWeight: '600' }}>
                            <span style={{ borderBottom: '3px solid black', paddingBottom: '0' }}>Register</span>
                        </Typography>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="flex-start"
                            style={{ backgroundColor: 'white', flex: 1 }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/Assets/signup.png'}
                                alt="Signup Image"
                                style={{ width: '90%', height: 'auto' }}
                            />
                        </Grid>
                    </div>
                    <form style={{ padding: '0.7rem 1.5rem' }} onSubmit={handleSignup}>
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
                        <TextField
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                        />
                        {error && <Typography variant="body2" color="error" align="center" style={{ marginBottom: '0.5rem' }}>{error}</Typography>}
                        {successMessage && <Typography variant="body2" color="success" align="center" style={{ marginBottom: '0.5rem' }}>{successMessage}</Typography>}
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Sign up
                        </Button>
                    </form>
                    <Typography variant="body2" align="center" style={{ marginBottom: '0.5rem' }}>
                        or
                    </Typography>
                    <Button
                        onClick={handleGoogleSignup}
                        style={{ marginLeft: '1.4rem', marginRight: '1.5rem', width: '90%' }}
                        variant="outlined"
                        color="primary"
                        fullWidth
                        startIcon={<FaGoogle />}
                    >
                        Sign up with Google
                    </Button>
                    <Typography variant="body2" align="center" style={{ margin: '1rem 1rem' }}>
                        Already have an account? <Link href="/login">Login</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};
