import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

// distructing in javascript

export default function MediaCard({data}) {
  const navigate = useNavigate();

  const handleRoute = (item) => {
    navigate(`/edit-book/${data.id}`, { state: { item: item }});
  }
  return (
    <Card sx={{ minWidth: 345, maxWidth: 345, minHeight: 400, maxHeight:400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.cover_img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.book_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.book_description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.auther_name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleRoute(data)}>Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
