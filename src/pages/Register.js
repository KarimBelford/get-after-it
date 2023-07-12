import * as React from 'react';
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Get After It  
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid 
        container 
        component={Paper} 
        elevation={6} 
        square 
        sx={{ 
          mt: 8, 
          mb: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          p: 2
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
