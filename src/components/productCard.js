import React from 'react';
import styled from 'styled-components';
import Product1 from '../assets/images/ProductCard-1.png'
import GeneralButton from './generalButton';

const Container = styled.div`
   display: inline-block;
   max-width: 363px
`


const Image = styled.img`
   width: 100%;
`

const ContainerTextHeader = styled.section`
  display: flex;
  justify-content: space-between;
  font-family: 'Epilogue';
  color: #391400;
`

const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 32px;
  font-family: 'Epilogue';
  color: rgba(57, 20, 0, 0.64);
`

const ProductCard = ({ data }) => {


    return (
        <Container>
            <Image src={Product1} />
            <ContainerTextHeader>
                <h2>Naked cakes</h2>
                <h2>$ 288</h2>
            </ContainerTextHeader>
            <ProductDescription>Pensando en los graves problemas de obesidad de la actualidad, el naked cake reduce la cantidad de calorías para consumo</ProductDescription>
            <GeneralButton text="ordenar ahora" style={true}/>
        </Container>
    )
}

export default ProductCard;