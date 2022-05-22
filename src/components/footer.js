import React from 'react';
import styled from 'styled-components';
import { MainContainer } from '../assets/styles/generalStyles';
import IconButton from './iconButton';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';





const Container = styled.div`
   padding: 0px 100px;
`

const Title = styled.h2`
   color: #391400;
   font-family: 'Impact';
   font-weight: 400;
`

const ContainerHeader = styled.section`
 display: flex;
 justify-content: space-between;
 align-items: center
`

const FooterText = styled.p`
  font-family: 'Epilogue';
  color: #391400;
  font-size: 16px;
`

const Footer = () => {


    return (

        <MainContainer>
            <Container>
                <ContainerHeader>
                    <Title>CakeShop</Title>
                    <section style={{display: 'flex'}}>
                        <IconButton Children={<FaFacebookF />} />
                        <IconButton Children={<FaTwitter />} />
                        <IconButton Children={<FaInstagram />} />
                    </section>

                </ContainerHeader>
                <hr></hr>
                <FooterText>Cakeshop© 2022. Todos los derechos recervados</FooterText>
            </Container>
        </MainContainer>
    )

}

export default Footer;