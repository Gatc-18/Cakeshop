import React from 'react';
import styled from 'styled-components';
import { MainContainer } from '../assets/styles/generalStyles';
import TestimonialCard from '../components/testimonialsCard';
import { users } from '../data/data';

const Container = styled.div`
   text-align: center

`

const Title = styled.h2`
  font-family: Epilogue;
  color: #391400;
`

const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  margin-top:50px;
`

const Testimonials = () => {


    return (
        <MainContainer>
            <Container>
                <Title>Testimonios de los clientes</Title>
                <ContainerCards>
                    {
                        users.map(item => {
                            return (
                                <TestimonialCard data={item} />
                            )

                        })
                    }
                </ContainerCards>
            </Container>
        </MainContainer>
    )
}

export default Testimonials;