import { useState } from "react";
import { Typography, Box, TextField, Button, Alert } from "@mui/material";

export default function SumPage() {
  const [success, setSuccess] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleGuardar = () => {
    if (nombre.trim() !== "") {
      setSuccess(true);
    }
  };

  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Registrar Nueva Categoría</Typography>
      
      <Typography variant="body2" sx={{ mb: 1 }}>Nombre de la Categoría:</Typography>
      <TextField 
        fullWidth 
        size="small" 
        sx={{ mb: 3 }} 
        value={nombre}
        onChange={(e) => { setNombre(e.target.value); setSuccess(false); }}
      />

      <Typography variant="body2" sx={{ mb: 1 }}>Descripción:</Typography>
      <TextField 
        fullWidth 
        multiline 
        rows={4} 
        size="small" 
        sx={{ mb: 3 }} 
        value={descripcion}
        onChange={(e) => { setDescripcion(e.target.value); setSuccess(false); }}
      />

      <Button 
        variant="contained" 
        color="success" 
        sx={{ mb: 2, display: 'block' }}
        onClick={handleGuardar}
      >
        Guardar Categoría
      </Button>
      
      {success && (
        <Alert severity="success" variant="outlined" sx={{ mt: 2 }}>
          Categoría agregada correctamente.
        </Alert>
      )}
    </Box>
  );
}