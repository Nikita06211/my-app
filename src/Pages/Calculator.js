import React, { useState } from 'react';
import { Container, Typography, Grid, Button, MenuItem, TextField, Paper } from '@mui/material';

export const Calculator = () => {
    const [electricityConsumption, setElectricityConsumption] = useState(0);
    const [fuelType, setFuelType] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [distanceTravelled, setDistanceTravelled] = useState(0);
    const [totalEmission, setTotalEmission] = useState('');
    const [showBreakdown, setShowBreakdown] = useState(false);

    const emissionMatrix = {
        petrol: { 
            hatchback: { min: 130, max: 160 }, 
            sedan: { min: 150, max: 180 }, 
            suv: { min: 250, max: 300 }, 
            hybrid: { min: 100, max: 130 } 
        },
        diesel: { 
            hatchback: { min: 160, max: 190 }, 
            sedan: { min: 180, max: 220 }, 
            suv: { min: 300, max: 350 }, 
            hybrid: { min: 100, max: 130 } 
        },
        cng: { 
            hatchback: { min: 140, max: 170 }, 
            sedan: { min: 160, max: 200 }, 
            suv: { min: 280, max: 330 }, 
            hybrid: { min: 100, max: 130 } 
        },
        electricity: { 
            hatchback: { min: 0, max: 0 }, 
            sedan: { min: 0, max: 0 }, 
            suv: { min: 0, max: 0 }, 
            hybrid: { min: 0, max: 0 } 
        }
    };
    
    const calculateFuelEmission = () => {
        const minEmission = emissionMatrix[fuelType][vehicleType].min + electricityConsumption;
        const maxEmission = emissionMatrix[fuelType][vehicleType].max + electricityConsumption;
        return `${minEmission} - ${maxEmission} g/CO2`;
    };

    const calculateElectricityEmission = () => {
        return `${electricityConsumption * 0.85} g/CO2`;
    };

    const handleCalculateEmission = () => {
        let minTotalEmission = 0;
        let maxTotalEmission = 0;
    
        if (fuelType && vehicleType && distanceTravelled) {
            minTotalEmission += emissionMatrix[fuelType][vehicleType].min * distanceTravelled;
            maxTotalEmission += emissionMatrix[fuelType][vehicleType].max * distanceTravelled;
        }
    
        if (electricityConsumption) {
            minTotalEmission += electricityConsumption;
            maxTotalEmission += electricityConsumption;
        }
    
        setTotalEmission(`${minTotalEmission} - ${maxTotalEmission} g/CO2`);
    };    

    const handleShowBreakdown = () => {
        setShowBreakdown(!showBreakdown);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Electricity Consumption (kWh)"
                        type="number"
                        value={electricityConsumption}
                        onChange={(e) => setElectricityConsumption(parseFloat(e.target.value))}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        label="Fuel Type"
                        value={fuelType}
                        onChange={(e) => setFuelType(e.target.value)}
                        fullWidth
                    >
                        <MenuItem value="petrol">Petrol</MenuItem>
                        <MenuItem value="diesel">Diesel</MenuItem>
                        <MenuItem value="cng">CNG</MenuItem>
                        <MenuItem value="electricity">Electricity</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        label="Vehicle Type"
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        fullWidth
                        disabled={fuelType === 'electricity'}
                    >
                        <MenuItem value="hatchback">Hatchback</MenuItem>
                        <MenuItem value="sedan">Sedan</MenuItem>
                        <MenuItem value="suv">SUV</MenuItem>
                        <MenuItem value="hybrid">Hybrid</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Distance Travelled (km)"
                        type="number"
                        value={distanceTravelled}
                        onChange={(e) => setDistanceTravelled(parseFloat(e.target.value))}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleCalculateEmission}>Calculate Emission</Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">Total Emission: {totalEmission}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" onClick={handleShowBreakdown}>
                        {showBreakdown ? 'Hide Breakdown' : 'Show Breakdown'}
                    </Button>
                </Grid>
                {showBreakdown && (
                    <Grid item xs={12}>
                        <Paper style={{ padding: 16 }}>
                            <Typography variant="h6">Emission Breakdown</Typography>
                            <Typography>Electricity: {electricityConsumption} kWh x unit emission = {calculateElectricityEmission()} total</Typography>
                            {fuelType && vehicleType && distanceTravelled && (
                                <Typography>Fuel: {emissionMatrix[fuelType][vehicleType].min} - {emissionMatrix[fuelType][vehicleType].max} g/CO2 x {distanceTravelled} km = {calculateFuelEmission()} total</Typography>
                            )}
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};