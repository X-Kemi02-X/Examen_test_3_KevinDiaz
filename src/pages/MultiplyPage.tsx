import { useState } from "react";
import { Typography, Box, TextField, Button, Divider, Stack } from "@mui/material";

export default function MultiplyPage() {
  const [baseT, setBaseT] = useState("");
  const [altT, setAltT] = useState("");
  const [resT, setResT] = useState<number | null>(null);
  const [largoR, setLargoR] = useState("");
  const [anchoR, setAnchoR] = useState("");
  const [resR, setResR] = useState<number | null>(null);
  const [valorIva, setValorIva] = useState("");
  const [resIva, setResIva] = useState<number | null>(null);

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>Cálculos Matemáticos y Comerciales</Typography>

      <Typography variant="subtitle1" fontWeight="bold">Área de Triángulo</Typography>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <TextField label="Base" type="number" size="small" value={baseT} onChange={(e)=>setBaseT(e.target.value)} />
        <TextField label="Altura" type="number" size="small" value={altT} onChange={(e)=>setAltT(e.target.value)} />
        <Button variant="contained" sx={{ alignSelf: 'flex-start' }} onClick={()=>setResT((Number(baseT)*Number(altT))/2)}>Calcular Área</Button>
        {resT !== null && <Typography color="primary">Área del Triángulo: {resT}</Typography>}
      </Stack>
      <Divider />

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 3 }}>Área de Rectángulo</Typography>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <TextField label="Largo" type="number" size="small" value={largoR} onChange={(e)=>setLargoR(e.target.value)} />
        <TextField label="Ancho" type="number" size="small" value={anchoR} onChange={(e)=>setAnchoR(e.target.value)} />
        <Button variant="contained" color="info" sx={{ alignSelf: 'flex-start' }} onClick={()=>setResR(Number(largoR)*Number(anchoR))}>Calcular Área</Button>
        {resR !== null && <Typography color="info.main">Área del Rectángulo: {resR}</Typography>}
      </Stack>
      <Divider />

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 3 }}>Cálculo de IVA (12%)</Typography>
      <Stack spacing={1}>
        <TextField label="Valor del producto" type="number" size="small" value={valorIva} onChange={(e)=>setValorIva(e.target.value)} />
        <Button variant="contained" color="success" sx={{ alignSelf: 'flex-start' }} onClick={()=>setResIva(Number(valorIva)*0.12)}>Calcular IVA</Button>
        {resIva !== null && <Typography color="success.main">IVA calculado: ${resIva.toFixed(2)}</Typography>}
      </Stack>
    </Box>
  );
}