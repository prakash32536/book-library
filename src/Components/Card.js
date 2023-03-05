import React from 'react'
import { StyledH1, StyledCard, StyledPara, StyledIconBox  } from './Styled';
import {Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const navigate = useNavigate();
    console.log('props', props.data);
  return (
    <StyledCard>
      <StyledIconBox>
      <StyledH1>{props.data.title}</StyledH1>
      <Box onClick={() => navigate(props.data.route)}>
        {props.data.icon}
      </Box>
      </StyledIconBox>
      <StyledPara>{props.data.description}</StyledPara>
    </StyledCard>
  )
}

export default Card
