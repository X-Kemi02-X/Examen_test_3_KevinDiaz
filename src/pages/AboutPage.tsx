import { Typography, Box } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Información del Sistema</Typography>
      <Typography color="text.secondary">Este sistema permite gestionar categorías y realizar cálculos sencillos para practicar migración a ReactJS.</Typography>
      <Typography variant="body2" sx={{ mt: 2 }}><b>Fuente:</b> akabab/starwars-api (incluye URLs de imágenes).</Typography>
    </Box>
  );
}