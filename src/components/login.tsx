import { useState } from 'react';
import { TextField, Button, Box, Container, Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', 
    },
    secondary: {
      main: '#f44336', 
    },
  },
});

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/usuarios', {
        rep_nombre: username,
        Contrasena_hash: password,
      });

      localStorage.setItem('access_token', response.data.access_token);
      
      console.log('Login exitoso, token recibido:', response.data.access_token);
      


    } catch (err) {
      console.error('Error de login:', err);
      setError('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '85vh',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
              backgroundColor: 'white',
              borderRadius: 10,
              boxShadow: 20,
            }}
          >
            <Typography variant="h5" color="primary" marginBottom={3}>
              Iniciar sesión
            </Typography>

            <form noValidate onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    label="Username"
                    fullWidth
                    required
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    color="primary"
                    sx={{ marginBottom: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    label="Contraseña"
                    type="password"
                    fullWidth
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    color="primary"
                    sx={{ marginBottom: 2 }}
                  />
                </Grid>
              </Grid>

              {error && (
                <Typography variant="body2" color="error" align="center" sx={{ marginBottom: 2 }}>
                  {error}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleLogin}
                sx={{
                  mt: 3,
                  mb: 2,
                  padding: '10px 0',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                Iniciar sesión
              </Button>
            </form>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
