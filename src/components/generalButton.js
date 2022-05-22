import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #EF6D58;
  color: white;
  border: none;
  padding: 18px 56px;
  border-radius: 70px;
  font-family: 'Epilogue';
  text-transform: uppercase;

`

const GeneralButton = ({text = "Hola"}) => {

    return (
        <>
            <Button>{text}</Button>
        </>
    )

}

export default GeneralButton;