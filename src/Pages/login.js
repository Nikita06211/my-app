import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';

export const Login = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" height="100vh" >
            <Card style={{ maxWidth: 400, maxHeight: 700 }}>
                <CardContent style={{ position: 'relative', padding:'0 0'}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h5" align="left" style={{ margin: '1rem 1rem', alignSelf: 'flex-start', fontFamily: 'unset', fontWeight: '600' }}>
                            <span style={{ borderBottom: '3px solid black', paddingBottom:'0'}}>Lo</span>gin
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
                    <form style={{padding:'0.7rem 1.5rem'}}>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            margin="normal"
                            required
                            
                        />
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            required
                        />
                        <Button variant="contained" color="primary" fullWidth >
                            Login
                        </Button>
                    </form>
                    <Typography variant="body2" align="center" style={{ marginBottom:'0.5rem' }}>
                        or
                    </Typography>
                    <Button
                        style={{marginLeft:'1.4rem', marginRight:'1.5rem', width:'90%'}}
                        variant="outlined"
                        color="primary"
                        fullWidth
                        startIcon={<FaGoogle />}
                        
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
