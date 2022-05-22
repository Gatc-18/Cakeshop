import React from 'react';
import styled from 'styled-components';
import { ContainerBackground, MainContainer } from '../assets/styles/generalStyles';
import MostSearchCard from '../components/mostSearchCard';
import { mostSearchInfo } from '../data/data';



const Title = styled.h2`
   font-family: 'Epilogue';
   color: rgba(57, 20, 0, 0.64);
   font-weight: 300!important;
`
const Text = styled.p`
   font-family: 'Epilogue';
   color: rgba(57, 20, 0, 0.64);
`

const Container = styled.div`
   padding: 8%;

`

const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`


const MasBuscados = () => {


    return (
        <MainContainer>
            <Container>
                <ContainerBackground>
                    <Title>Los más buscados</Title>
                    <Text>Deléitate con los productos favoritos de nuestros invitados.</Text>
                    <ContainerCards>
                        {
                            mostSearchInfo.map(item => {
                                return (

                                    <MostSearchCard data={item} />

                                )
                            })
                        }
                    </ContainerCards>
                </ContainerBackground>
            </Container>
        </MainContainer>
    )
}

export default MasBuscados;