import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    alert("Sesión cerrada");
    navigate("/login");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "90vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        {/* Header */}
        <header
          style={{
            backgroundColor: "#930000",
            padding: "30px",
            color: "white",
            textAlign: "center",
          }}
        >
          <nav>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                padding: 0,
              }}
            >
              <li>
                <Button color="inherit" onClick={handleLogout}>
                  Cerrar sesión
                </Button>
              </li>
              <li>
                <Button color="inherit">Certificados</Button>
              </li>
              <li>
                <Button color="inherit">¿Quiénes somos?</Button>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Body */}
        <main style={{ flex: 1, padding: "20px" }}>
          <Container>
            <Typography variant="h4" color="primary" gutterBottom textAlign="center">
              Bienvenido a nuestra página principal.
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom textAlign="center">
              Esta es la página principal, aquí encontrarás información sobre nuestros certificados y servicios.
              También podrás obtener información sobre nuestra empresa.
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
              <Grid item xs={12} md={6}>
                {/* Photo Carousel */}
                <Box>
                  <Slider {...sliderSettings}>
                    <div>
                      <img
                        src="https://rincondelparque.com/images/comunicados/2023-03-07-servicio/a.jpg"
                        alt="Certificado 1"
                        style={{ width: "100%", borderRadius: "20px" }}
                      />
                    </div>
                    <div>
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Certificado 2"
                        style={{ width: "100%", borderRadius: "20px" }}
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCKV5DzT7SlqRbYUjy8RmyzQ6zqxouGYtEw&s"
                        alt="Certificado 3"
                        style={{ width: "100%", borderRadius: "20px" }}
                      />
                    </div>
                  </Slider>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    textAlign: "left",
                    padding: "20px",
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography variant="h5" color="primary" gutterBottom>
                    ¿Por qué elegirnos?
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Nuestros certificados están diseñados para brindar confianza y respaldo en los servicios que ofrecemos.
                    Trabajamos con altos estándares de calidad para asegurar la satisfacción de nuestros clientes.
                    Con nosotros, puedes confiar en que cada servicio está diseñado para proteger tu entorno y cumplir con los estándares más altos de calidad
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ marginTop: "10px" }}>
                  Explora nuestros certificados, descubre más sobre nuestro enfoque innovador y permítenos ayudarte a mantener un espacio libre de plagas.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "#930000",
            color: "white",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            <a
              href="mailto:cmcCertifica@gmail.com"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contacto: cmcCertifica@gmail.com
            </a>
          </Typography>
          <Typography variant="body2">
            <b>Teléfono: +57 123 456 7890</b>
          </Typography>
        </footer>
      </Box>
    </ThemeProvider>
  );
};

export default MainPage;
