import React, { Children } from 'react';
import styled from 'styled-components';


const Circle = styled.div`
   width:40px;
   height: 40px;
   border-radius: 50%;
   background: #EF6D58;
   display: flex;
   justify-content: center;
   align-items: center; 
   color: white;
   margin: 0px 10px
`


const IconButton = ({ Children }) => {

    return (
        <Circle>
           { Children }
        </Circle>
    )
}

export default IconButton;