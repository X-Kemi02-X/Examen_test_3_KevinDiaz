import React, { useEffect, useState, Fragment } from "react";
import { 
  Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, 
  Divider, CircularProgress, Box, Button, Stack, TextField, Paper, Alert 
} from "@mui/material";

export default function ProductsPage() {
  const [allCharacters, setAllCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const apiURL = "https://akabab.github.io/starwars-api/api/all.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(apiURL);
        const data = await res.json();
        const list = Array.isArray(data) ? data : [];
        setAllCharacters(list);
      } catch (e) {
        setError("Error al conectar con la API de Star Wars.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const totalItems = allCharacters.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDisplay = allCharacters.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
        Listado de Categorías (Star Wars - Personajes)
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="caption" color="text.secondary">URL API (copiar y pegar):</Typography>
        <TextField fullWidth readOnly value={apiURL} size="small" variant="outlined" />
      </Box>
      
      <Stack direction="row" spacing={1} sx={{ mb: 2 }} alignItems="center">
        <Button 
          variant="contained" 
          size="small" 
          onClick={handlePrev} 
          disabled={currentPage === 1 || loading}
          sx={{ bgcolor: '#2e7d32', textTransform: 'none' }}
        >
          Prev
        </Button>
        <Button 
          variant="contained" 
          size="small" 
          onClick={handleNext} 
          disabled={currentPage === totalPages || loading}
          sx={{ bgcolor: '#2e7d32', textTransform: 'none' }}
        >
          Next
        </Button>
        
        <Box sx={{ bgcolor: '#f0f0f0', border: '1px solid #ccc', px: 1, py: 0.5, borderRadius: 1 }}>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}>
            Página: {currentPage} / {totalPages} | Total: {totalItems} | Mostrando: {currentDisplay.length}
          </Typography>
        </Box>
      </Stack>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Paper variant="outlined">
          <List disablePadding>
            {currentDisplay.map((p, idx) => (
              <Fragment key={p?.id ?? idx}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar 
                      src={p?.images?.sm || p?.image} 
                      variant="rounded" 
                      sx={{ width: 45, height: 45, mr: 1, border: '1px solid #ddd' }} 
                    >
                      {p?.name?.charAt(0)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={<Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{p?.name || "Desconocido"}</Typography>} 
                    secondary={`Género: ${p?.gender || "n/a"} | Altura: ${p?.height || "0"} | ID: ${p?.id}`} 
                  />
                </ListItem>
                {idx < currentDisplay.length - 1 && <Divider />}
              </Fragment>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}