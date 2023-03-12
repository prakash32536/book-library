import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../../Components/Header';
import BookCard from '../../Components/BookCard';
import { Grid } from '@mui/material';

const ViewBook = () => {
  const [ book, setBook ] = useState([]);
  console.log('data=======>', book);

  // It is for api handling
  const viewAllBooks = async () => {
    await axios.get(`http://localhost:8000/save-book-data`).then((res) => {
      if(res) {
        setBook(res.data);
      }
    })
  }

  // UseEffect hook takes 2 arguments, 1st is callback function and second is dependency array.
// if dependency array is empty than it is in mounting phase.

// Initial data loading
useEffect(() => {
  viewAllBooks();
},[])


  return (
    <>
    <Header />
    <Grid container>
      {book?.length > 0 && 
       book?.map((data, index) => {
        return (
          <Grid key={index} item sx={{m : 1}}>
            <BookCard  data={data} />
          </Grid>
        )
       })
      }
    </Grid>
    </>
  )
}

export default ViewBook
