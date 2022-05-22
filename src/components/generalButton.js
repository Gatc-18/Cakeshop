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
  font-weight: 900;
  width: ${props => props.fullWidth ? "100%" : "auto"}

`

const GeneralButton = ({ text = "Hola", style = false }) => {


    return (
        <>{
            style
                ?
                <Button fullWidth>{text}</Button>
                :
                <Button>{text}</Button>
        }

        </>
    )

}

export default GeneralButton;