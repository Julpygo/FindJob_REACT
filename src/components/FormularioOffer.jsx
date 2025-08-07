import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from '@mui/material';

export default function FormularioOffer(){
    const [company_id, setCompanyid] = useState('')
    const [company_name, setCompanyName] = useState('')
    const [cargo, setCargo] = useState('')
    const [salary, setSalary] = useState('')
    const [divisa, setDivisa] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [requirements_min, setRequirements_min] = useState('')
    const [requirements_opc, setRequirements_opc] = useState('')
    

const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
        company_id,
        company_name,
    };
    try {
        const response = await fetch("http://localhost:3005/api/offers/create",{
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        const resultado = await response.json();
    }catch (err) {
        alert("Error al enviar: " + err.message);
    }
}

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, p: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          Registro oferta de trabajo
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            </Grid>
              <Grid container spacing={2} key={1} sx={{ mt: 2 }}>
                <Grid item xs={3}>
                  <TextField
                    label="NIT"
                    value={company_id}
                    onChange={(e) => setCompanyid(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Nombre de la empresa"
                    value={company_name}
                    onChange={(e) => setCompanyName(e.target.value)}
                    fullWidth
                  />
                </Grid>
            </Grid>

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Enviar
          </Button>
        </form>
      </Box>
    </Container>
  );
}