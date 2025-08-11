import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Chip,
  Autocomplete,
  Stack
} from '@mui/material';
import lists from "../data/lists.json"
import { offerCreate } from '../services/offer';

export default function FormularioOffer(){
    const [company_id, setCompanyid] = useState('')
    const [company_name, setCompanyName] = useState('')
    const [cargo, setCargo] = useState([])
    const [salary, setSalary] = useState('')
    const [divisa, setDivisa] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [requirements_min, setRequirements_min] = useState([])
    const [requirements_opc, setRequirements_opc] = useState([])
    

const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
        company_id,
        company_name,
        cargo,
        salary,
        divisa,
        descripcion,
        requirements_min,
        requirements_opc
    };
    try {
        const response = await offerCreate(payload)
        alert("Oferta creada");
        
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
                <Grid item size={6}>
                  <TextField
                    label="NIT"
                    value={company_id}
                    onChange={(e) => setCompanyid(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item size={6}>
                  <TextField
                    label="Nombre de la empresa"
                    value={company_name}
                    onChange={(e) => setCompanyName(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item size={12}>
                  <Stack spacing={3}>
                    <Autocomplete
                      multiple
                      id="tags-filled"
                      options={lists.cargos}
                      freeSolo
                      value={cargo}
                      onChange={(event, newValue) => setCargo(newValue)}
                      renderValue={(value, getItemProps) =>
                        value.map((option, index) => {
                          const { key, ...itemProps } = getItemProps({ index });
                          return (
                            <Chip variant="outlined" label={option} key={key} {...itemProps} />
                          );
                        })
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          label="Cargos"
                          placeholder="añadir cargo"
                        />
                      )}
                    />
                    <Autocomplete
                      multiple
                      id="tags-filled"
                      options={lists.cargos}
                      freeSolo
                      value={requirements_min}
                      onChange={(event, newValue) => setRequirements_min(newValue)}
                      renderValue={(value, getItemProps) =>
                        value.map((option, index) => {
                          const { key, ...itemProps } = getItemProps({ index });
                          return (
                            <Chip variant="outlined" label={option} key={key} {...itemProps} />
                          );
                        })
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          label="Requisitos obligatorios"
                          placeholder="añadir requisito"
                        />
                      )}
                    />
                    <Autocomplete
                      multiple
                      id="tags-filled"
                      options={lists.cargos}
                      freeSolo
                      value={requirements_opc}
                      onChange={(event, newValue) => setRequirements_opc(newValue)}
                      renderValue={(value, getItemProps) =>
                        value.map((option, index) => {
                          const { key, ...itemProps } = getItemProps({ index });
                          return (
                            <Chip variant="outlined" label={option} key={key} {...itemProps} />
                          );
                        })
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          label="Requisitos opcionales"
                          placeholder="añadir requisito"
                        />
                      )}
                    />
                  </Stack>
                </Grid>
                <Grid item size={6}>
                  <TextField
                    label="Salario"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Divisa"
                    value={divisa}
                    onChange={(e) => setDivisa(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item size={12}>
                  <TextField
                    label="Descripción"
                    multiline
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
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