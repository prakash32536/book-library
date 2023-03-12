import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Header from '../../Components/Header';
import { StyledBox, StyledTextField } from './Styled';
import { Typography, Button } from '@mui/material';

const AddBook = () => {
  const navigate = useNavigate();
  // Initialize your state using useState to handle component data

  const [formData, setFormData] = useState({});
  console.log('formData', formData);

  // this function handles your input data
   const handleChange = (event) => {
    console.log(event.target);
    const {name, value} = event.target;
    // It updates your state
    setFormData((prevData)=> ({
      ...prevData,
      [name]: value
    }))
   }

  //  handle form submission and api calling
  // async and await or Promise

  const handleSubmit = async (event) => {
    event.preventDefault();

    // integration of api
    await axios.post(`http://localhost:8000/save-book-data`, formData).then((res) => {
      if(res) {
        navigate('/');
      }
    }).catch(error => {
      console.log('error', error);
    })
  }
   
  return (
    <div>
      <Header />
      <StyledBox>
        <Typography variant="h4">Add Your Book</Typography>
        <form onSubmit={handleSubmit}>
          <StyledTextField  label="Book Id" type="text" onChange={handleChange}  name="book_id" variant="outlined"/>
          <StyledTextField  label="Book Name" type="text" onChange={handleChange} name="book_name" variant="outlined"/>
          <StyledTextField  label="Book Description" type="text" onChange={handleChange} name="book_description" variant="outlined"/>
          <StyledTextField  label="Author Name" type="text" onChange={handleChange} name="author_name" variant="outlined"/>
          <StyledTextField  label="Cover Image" type="text" onChange={handleChange} name="cover_img" variant="outlined"/>
          <br />
          <Button sx={{ m: 2, width: '10%' }} variant="contained" color= "primary" type="submit">Save</Button>
        </form>
      </StyledBox>
    </div>
  )
}

export default AddBook
