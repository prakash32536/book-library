import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../../Components/Header';
import BookCard from '../../Components/BookCard';

const ViewBook = () => {
  const [ data, setData ] = useState([]);
  console.log('data=======>', data);

  // It is for api handling
  const viewAllBooks = async () => {
    await axios.get(`http://localhost:8000/save-book-data`).then((res) => {
      if(res) {
        setData(res.data);
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
    <div>
       <h2>dbcdcjbedvjced</h2>
    </div>
  )
}

export default ViewBook
