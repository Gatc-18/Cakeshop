import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
 font-family: 'Impact';
 color: #391400;
 font-weight: 400;
 font-size: 24px;
 line-height: 24px;
`

const Container = styled.div`
   height: 24px;
   text-align: center
`


const Navbar = () => {


    return (
        <Container>
            <Title>Cakeshop</Title>
        </Container>
    )
}

export default Navbar;