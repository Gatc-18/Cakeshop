import React from 'react';
import styled from 'styled-components';
import CoverImage from '../assets/images/coverPrincipal.png'
import { ContainerBackground } from '../assets/styles/generalStyles';
import GeneralButton from '../components/generalButton';


const Title = styled.h1`
   font-family: 'Epilogue';
   font-size: 4.5rem;
   line-height: 80px;
   color: #391400;
   font-weight: 900!important;
`

const TextElement = styled.p`
   font-size: 16px;
   font-family: 'Epilogue';
   margin: 24px 0px;
`

const ChildElement = styled.section`
   width: 35.938rem;
   margin: 5% 0px;
   @media (max-width: 767px) {
    order: ${props => props.main ? "-1" : "1"}
  }
  
`

const ImageCake = styled.img`
   width: 100%;
  
`

const ContainerFather = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   @media (max-width: 767px) {
    justify-content: center;
  }
`

const Principal = () => {

    return (
        <>
            <ContainerFather>

                <ContainerBackground>
                    <ChildElement>
                        <Title>¡Los mejores pasteles para toda ocasión!</Title>
                        <TextElement>Enamoramos paladares en cada mordida.</TextElement>
                        <GeneralButton text="ORDENAR AHORA" />
                    </ChildElement>
                </ContainerBackground>

                <ChildElement main>
                    <ImageCake src={CoverImage} alt="cover image" />
                </ChildElement>

            </ContainerFather>

        </>
    )

}

export default Principal;