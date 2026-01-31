import { Typography, Box, Grid, Card, CardContent, Alert, Paper } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <Paper sx={{ p: 4, bgcolor: '#f1f3f4', textAlign: 'center', mb: 3, borderRadius: 2 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Bienvenido a la Gestión de Categorías
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Sistema para listar, crear categorías y realizar cálculos geométricos y de IVA.
        </Typography>
      </Paper>
      <Box 
        component="img" 
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
        sx={{ 
          width: '100%', 
          borderRadius: 2, 
          height: 350, 
          objectFit: 'cover', 
          mb: 4 
        }} 
      />
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">Listado de Categorías</Typography>
              <Typography variant="body2" color="text.secondary">
                Ahora se llena dinámicamente con personajes de Star Wars (con foto).
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">Crear Categoría</Typography>
              <Typography variant="body2" color="text.secondary">
                Agrega nuevas categorías matemáticas o temáticas.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">Cálculos Básicos</Typography>
              <Typography variant="body2" color="text.secondary">
                Realiza áreas y cálculo de IVA.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Alert 
          severity="success" 
          icon={false}
          sx={{ 
            bgcolor: '#d4edda', 
            color: '#155724', 
            border: '1px solid #c3e6cb',
            fontSize: '0.875rem'
          }}
        >
          Sistema listo para gestionar categorías y cálculos básicos.
        </Alert>

        <Alert 
          severity="info" 
          icon={false}
          sx={{ 
            bgcolor: '#d1ecf1', 
            color: '#0c5460', 
            border: '1px solid #bee5eb',
            fontSize: '0.875rem'
          }}
        >
          Recuerda ingresar al menos una categoría antes de usar las demás funciones.
        </Alert>
      </Box>
    </Box>
  );
}