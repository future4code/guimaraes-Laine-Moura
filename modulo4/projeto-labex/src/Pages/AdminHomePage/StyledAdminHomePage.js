import React from "react";
import styled from 'styled-components'

export const MainDiv = styled.div`
    height: 100vh;
    text-align: center;
    margin: 0 auto;
`

export const TripDiv = styled.div `
  display: grid;
  justify-self: center;
  align-self: center;
  cursor: pointer;

`


export const BtnDelTrip = styled.button`
    color: inherit;
    border: inherit;
    cursor: pointer;
    justify-self: center;
    align-self: center;
    width: 20px;
    :hover {
        color: white;
        background: grey;
    }
`
export const Btns = styled.button`
    color: white;
    border: inherit;
    border-radius: 5%;
    margin: 0 2px;
    background: #b399ff;
    cursor: pointer;
`

export const TrashcanImg = styled.img`
    width: 1vw;
`