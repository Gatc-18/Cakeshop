import React from 'react';
import styled from 'styled-components';
import IconButton from '../../components/iconButton';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';



const Container = styled.div`
  width: 45%;
  display: flex;
  justify-content: center
`

const ContainerContent = styled.div`
  width: 80%;
  text-align: left
`

const ContainerIcons = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #391400;
  font-family: Epilogue;
`

const Title = styled.h1`
color: #391400;
font-family: Epilogue;
`

const SubTitle = styled.h5`
  color: #EF6D58;
  font-wight: 300;
  font-family: Epilogue;
  text-transform: uppercase;
`


const InfoSection = () => {


    return (
        <Container>
            <ContainerContent>
                <SubTitle>contactanos</SubTitle>
                <Title>¿Deseas realizas un pedido especial?</Title>
                <ContainerIcons>
                    <IconButton Children={<BsFillTelephoneFill />} />
                    <p>+1 (234) 928-22-34</p>
                </ContainerIcons>
                <ContainerIcons>
                    <IconButton Children={<HiOutlineMail />} />
                    <p>cakeshop@gmail.com</p>
                </ContainerIcons>
            </ContainerContent>
        </Container>
    )
}

export default InfoSection;