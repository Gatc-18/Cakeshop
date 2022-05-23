import React from 'react';
import styled from 'styled-components';
import GeneralButton from '../../components/generalButton';

const Container = styled.div`
  background: #FDEBEB;
  padding: 48px;
  width: 45%
`

const Title = styled.h3`
  font-family: Epilogue;
  color: #391400;
`

const InputContainer = styled.div`
  margin: 24px;
`

const Label = styled.label`
  text-transform: uppercase;
  color: #391400;
  font-family: Epilogue;
  font-weight: 700;
  display: block;
  margin-bottom:10px;
`
const Input = styled.input`
  padding: 8px;
  width:100%;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  font-family: Epilogue;
  color: #4D4D4D;
`

const TextArea = styled.textarea`
  padding: 8px;
  width:100%;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  font-family: Epilogue;
  color: #4D4D4D;
`

const FormSection = () => {


    return (
        <Container>
            <Title>Envía un mensaje con los detalles de tu pedido</Title>
            <form>

                <InputContainer>
                    <Label for="name">Nombre completo</Label>
                    <Input id='name' placeholder='Ingresa tu nombre' />
                </InputContainer>

                <InputContainer>
                    <Label for="name">Correo electrónico</Label>
                    <Input id='name' placeholder='Ingresa tu correo electrónico' />
                </InputContainer>

                <InputContainer>
                    <Label for="name">Descripción</Label>
                    <TextArea rows={4} id='name' placeholder='Ingresa una breve descripción del pedido que tienes en mente' />
                </InputContainer>

                <GeneralButton text="Enviar mensaje"/>

            </form>
        </Container>
    )
}

export default FormSection;