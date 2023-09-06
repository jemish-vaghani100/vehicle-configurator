import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Image() {
  return (
    <Card square={true} style={{ paddingBottom: 0, marginTop: 80, marginRight:30,marginLeft:90 , maxWidth: 350, maxHeight: 200 }}>
    <img src="\imgs\car\car.png" alt="car"  width={350} height={200} />
  </Card>
  );
}
