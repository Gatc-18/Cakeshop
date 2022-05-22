import React from 'react';
import styled from 'styled-components';
import GeneralButton from './generalButton';

const Container = styled.div`
    width: 40%;
    display: flex


`

const CardTitle = styled.h2`
    font-family: 'Epilogue';
    color: #391400;
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


    return (
        <Container>
            <img src="https://i.ibb.co/6trZWTM/Rectangle-1.png" />
            <ContainerSecondary>
                <CardTitle>Pastel Chocoroles $418</CardTitle>
                <Textp>Delicioso pastel elaborado con pan de chocolate, relleno de mermelada de piña, crema y...</Textp>
                <GeneralButton text="ordenar ahora" />
            </ContainerSecondary>
        </Container>
    )
}

export default MostSearchCard;