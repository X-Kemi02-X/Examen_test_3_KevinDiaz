import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SumPage from "./pages/SumPage";
import MultiplyPage from "./pages/MultiplyPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static" sx={{ bgcolor: "#2e7d32", boxShadow: 'none' }}>
          <Toolbar variant="dense">
            <Typography variant="h6" sx={{ mr: 4, fontWeight: 'bold' }}>Gestión de Categorías</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button color="inherit" component={Link} to="/" sx={{ textTransform: 'none' }}>Home</Button>
              <Button color="inherit" component={Link} to="/products" sx={{ textTransform: 'none' }}>Categorías</Button>
              <Button color="inherit" component={Link} to="/sum" sx={{ textTransform: 'none' }}>Nueva Categoría</Button>
              <Button color="inherit" component={Link} to="/multiply" sx={{ textTransform: 'none' }}>Cálculos</Button>
              <Button color="inherit" component={Link} to="/about" sx={{ textTransform: 'none' }}>Información</Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 3, flexGrow: 1, pb: 5 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/sum" element={<SumPage />} />
            <Route path="/multiply" element={<MultiplyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>

        <Box component="footer" sx={{ bgcolor: '#2e7d32', color: 'white', py: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            © 2025 - Sistema de Categorías - Taller Académico
          </Typography>
        </Box>
      </Box>
    </BrowserRouter>
  );
}