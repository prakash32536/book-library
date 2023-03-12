import  React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { CardActions, CardMedia,Button,Typography, CardContent, Dialog, Card } from '@mui/material'
import DeleteModal from '../Components/DeleteModal';
import axios from 'axios';

// distructing in javascript

export default function MediaCard({data}) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  console.log("openModal", openModal);

  const handleRoute = (item) => {
    navigate(`/edit-book/${data.id}`, { state: { item: item }});
  }

  // To close the modal
  const handleCloseModal = () => {
    console.log('heelo this onclose should be trigered');
    setOpenModal(false)
  }
  //  To open the modal
  const handleClick = () => {
    setOpenModal(true);
  }

  // delete the book card api

  const handleDelete = async(item) => {
    setOpenModal(false);
    await axios.delete(`http://localhost:8000/save-book-data/${item.id}`).then((res) => {
      enqueueSnackbar('Your details has been deleted from record', { variant: 'success'});
      if(res) {
        navigate('/');
      }
    }).catch(() => {
      enqueueSnackbar('Something going wrong', {variant: 'error'});
    })
  }


  return (
    <>
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
        <Button size="small" onClick={handleClick}>Delete</Button>
      </CardActions>
    </Card>
    <Dialog maxWidth="md" open={openModal} onClose={handleCloseModal}>
      <DeleteModal
       open={openModal}
       onClose={handleCloseModal}
       handleDelete={handleDelete}
       data={data}
       />
    </Dialog>
    </>
  );
}
