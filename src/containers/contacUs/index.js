import React from 'react';
import styled from 'styled-components';
import { MainContainer } from '../../assets/styles/generalStyles';
import FormSection from './formSection';
import InfoSection from './infoSection';

const Container = styled.div`
   display: flex;
   padding: 0px 50px;
   flex-wrap: wrap;
   justify-content: space-evenly;
`

const ContacSection = () => {

    return (
        <MainContainer>
            <Container>
                <InfoSection />
                <FormSection />
            </Container>
        </MainContainer>
    )
}

export default ContacSection;