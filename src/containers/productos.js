import React from 'react';
import styled from 'styled-components';
import { MainContainer } from '../assets/styles/generalStyles';
import ProductCard from '../components/productCard';
import { productCardInfo } from '../data/data';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap
`


const Title = styled.h1`
   text-align: center;
   font-family: 'Epilogue';
   font-size: 56px;
   color: #391400;
   letter-spacing: -1px;
`

const Productos = () => {

    return (

        <MainContainer>
            <Title>Nuestros especiales del mes</Title>
            <Container>
                {
                    productCardInfo.map(item => {
                        return (
                            <ProductCard data={item} />
                        )
                    })
                }
            </Container>
        </MainContainer>

    )
}

export default Productos