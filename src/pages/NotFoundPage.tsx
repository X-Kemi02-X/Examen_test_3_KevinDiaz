import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>Página no encontrada</Typography>
      <Button variant="contained" component={Link} to="/">Volver al Inicio</Button>
    </Box>
  );
}