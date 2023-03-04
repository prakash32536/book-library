import React from 'react';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import {Grid} from '@mui/material';
import {datas} from './data';
import { StyledGridItem } from './Styled';

const Home = () => {
   return (
    <div>
        <Header />
        <Grid container sx={{justifyContent: 'space-between'}}>
         {
            datas && 
            datas.map((data, index) => {
                return (
                    <StyledGridItem item key={index} sm={12} md={3}>
                       <Card data={data} /> 
                    </StyledGridItem>
                )
            })

         }
        </Grid>
    </div>
   ) 
}

export default Home;