import React from 'react';
import styled from 'styled-components';
import Product1 from '../assets/images/ProductCard-1.png'
import GeneralButton from './generalButton';

const Container = styled.div`
   max-width: 303px
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

    const {image, id, title, price, description} = data

    return (
        <Container id={id}>
            <Image src={image} alt={title} />
            <ContainerTextHeader>
                <h2>{title}</h2>
                <h2>$ {price}</h2>
            </ContainerTextHeader>
            <ProductDescription>{description}</ProductDescription>
            <GeneralButton text="ordenar ahora" style={true}/>
        </Container>
    )
}

export default ProductCard;