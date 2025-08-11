import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardOffer({offers}) {
  return (
    <Card sx={{ minWidth: 275, mb:4, backgroundColor:'rgba(50, 136, 175, 0.33)'}}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {`${offers.cargo}`}
        </Typography>
        <Typography variant="h5" component="div">
          {offers.company_name}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>$ {parseInt(offers.salary).toLocaleString()}</Typography>
        <Typography variant="body2">
          {`${offers.requirements_min}`}
          <br />
          {offers.Descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Leer mas</Button>
      </CardActions>
    </Card>
  );
}
