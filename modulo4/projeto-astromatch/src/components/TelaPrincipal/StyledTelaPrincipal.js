import React from "react";
import styled from "styled-components";

export const DivContainer = styled.div`
  margin: 0 auto;
  padding: 5vh 1vh;
  width: 30vw;
  background-color: #fff;
  border: 2px solid;
  border-image: linear-gradient(90deg, #c20d7c, #ffbb00 100%) 1;
  @media screen and (max-width: 375px) {
        width: 300px;
  }
  
`

export const DivCard = styled.div`
    text-align: center;
`

export const FotoPerfilImg = styled.img`
    width: 150px;
    height: 150px;
    border: 1px solid pink;
    border-image: linear-gradient(90deg, #ffbb00, #c20d7c 100%) 1;
    @media screen and (max-width: 375px) {
        width: 100px;
        height: 100px;
  }
`

export const NomeP = styled.p`
    margin: 1vh 0 0;
    font-size: 1.5rem;
    font-family: 'Dosis', sans-serif;
    font-weight: 900;
    color: #c20d7c;
    @media screen and (max-width: 375px) {
        font-size: 24px;
  }
`
export const IdadeP = styled.p`
    margin: 0;
    font-family: 'Ramaraja', serif;
    color: #4F4F4F;
`

export const BioP = styled.p`
    margin: 2vh auto;
    font-size: .7rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    @media screen and (max-width: 375px) {
        font-size: 20px;
  }
`

export const DivBotoes = styled.div`
     text-align: center;
     margin: 0 auto;
     font-size: 1rem;
     text-align: center;
     justify-content: center;
`
export const BtnInteracao = styled.button`
    border: inherit;
    background: inherit;
    cursor: pointer;
    &:hover{
    transform: scale(1.5);
    }
    @media screen and (max-width: 375px) {
        font-size: 40px;
  }

`

export const BtnVerMatches = styled.button`
    border: inherit;
    cursor: pointer;
    color: #c20d7c;
    background: #ffbb00;
    @media screen and (max-width: 375px) {
        height: 50px;
        width: 150px;
        font-size: 20px;
  }
`

export const BtnLimpar = styled.button`
    display: flex;
    margin: 0 auto;
    border: inherit;
    cursor: pointer;
    color: #ffbb00;
    background: #c20d7c;
    @media screen and (max-width: 375px) {
        height: 50px;
        width: 150px;
        font-size: 20px;
  }
`