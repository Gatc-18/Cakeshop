import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 25%;
    height: 400px;
    padding: 30px;
    border: 1px solid pink;
    background: white;
    &:hover{
        transform: scale(1.1)
    }
`

const Header = styled.section`
    display: flex;
    align-items: center;
    gap: 50px
`

const Name = styled.h4`
   font-family: Epilogue;
   color: #391400;
`

const Description = styled.p`
   font-family: 'Epilogue';
   line-height: 25px;
   color: rgba(57, 20, 0, 0.64);
`

const TestimonialCard = ({ data }) => {

    const { name, avatar } = data;
    return (
        <Container>
            <Header>
                <img src={avatar} alt={name} />
                <Name>{name}</Name>
            </Header>
            <section>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent neque libero, sagittis in aliquam vitae, consequat sit amet ligula. Praesent euismod pharetra diam nec tristique. In elit ipsum, pharetra ac arcu vitae, convallis cursus leo. Cras sit amet nisl nisl. In accumsan mi et congue condimentum. Quisque eu lorem erat. Donec non vulputate est. Quisque at finibus nibh.</Description>
                <img src="https://i.ibb.co/QD89ngp/star.png" alt="starts" />
            </section>
        </Container>
    )
}

export default TestimonialCard;