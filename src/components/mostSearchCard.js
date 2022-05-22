import React from 'react';
import styled from 'styled-components';
import GeneralButton from './generalButton';

const Container = styled.div`
    width: 50%;
    display: flex;
    margin: 20px 0px


`

const CardTitle = styled.h2`
    font-family: 'Epilogue';
    color: #391400;
    font-weight: 900;
`

const Textp = styled.p`
    font-family: 'Epilogue';
    color: rgba(57, 20, 0, 0.64);
    
`

const ContainerSecondary = styled.section`
 padding: 10px;
 display: flex;
 flex-direction: column; 

`

const MostSearchCard = ({data}) => {

  const { image, id, title, price, description} = data;
    return (
        <Container>
            <img src={image} alt={title} />
            <ContainerSecondary>
                <CardTitle>{title} ${price}</CardTitle>
                <Textp>{description}</Textp>
                <GeneralButton text="ordenar ahora" />
            </ContainerSecondary>
        </Container>
    )
}

export default MostSearchCard;