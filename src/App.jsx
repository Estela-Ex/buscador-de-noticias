import {  Typography, Container, Grid } from '@mui/material';
import Formulario from './components/Formulario';

function App() {

  return (
    <Container>
      <header>
        <Typography align="center" marginY={5} component="h1" variant="h3">
          Buscador de Noticias
        </Typography>
      </header>
      <Grid>
        <Grid item md={6}>
          <Formulario />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App
