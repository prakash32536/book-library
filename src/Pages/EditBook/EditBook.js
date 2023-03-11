import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate, useLocation} from 'react-router-dom';
import Header from '../../Components/Header';
import { StyledBox, StyledTextField } from '../AddBook/Styled';
import { Typography, Button } from '@mui/material';

const EditBook = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [formData, setFormData] = useState({
        book_name: state.item.book_name,
        author_name: state.item.author_name,
        cover_img: state.item.cover_img,
        book_description: state.item.book_description,
        id: state.item.id
    });

    console.log('formdataedit', formData);

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
    }));
    }

    // api calling for updating the form

    const handleSubmit = async(event) => {
      event.preventDefault();
      await axios.patch(`http://localhost:8000/save-book-data/${formData.id}`, formData).then((res) => {
        if(res) {
            navigate('/view-book');
          }
      })
    }
    

  return (
    <div>
      <Header />
      <StyledBox>
        <Typography variant="h4">Edit Your Book</Typography>
        <form onSubmit={handleSubmit}>
          <StyledTextField value={formData.id} disabled  label="Book Id" type="text"  name="book_id" variant="outlined"/>
          <StyledTextField value={formData.book_name} onChange={handleChange}  label="Book Name" type="text"  name="book_name" variant="outlined"/>
          <StyledTextField value={formData.book_description} onChange={handleChange}   label="Book Description" type="text" name="book_description" variant="outlined"/>
          <StyledTextField value={formData.author_name} onChange={handleChange}  label="Author Name" type="text" name="author_name" variant="outlined"/>
          <StyledTextField value={formData.cover_img} onChange={handleChange}  label="Cover Image" type="text" name="cover_img" variant="outlined"/>
          <br />
          <Button sx={{ m: 2, width: '10%' }} variant="contained" color= "primary" type="submit">Save</Button>
        </form>
      </StyledBox>
    </div>
  )
}

export default EditBook
