import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardOffer({offers}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {offers.cargo}
        </Typography>
        <Typography variant="h5" component="div">
          {offers.company_name}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>$ {offers.salary}</Typography>
        <Typography variant="body2">
          {offers.requirements_min}
          <br />
          {offers.Descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Aplicar</Button>
      </CardActions>
    </Card>
  );
}
