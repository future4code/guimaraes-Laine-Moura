import React from "react";
import styled from "styled-components";

export const MainDiv = styled.div`
    text-align: center;
    color: #b381ff;
`

export const AllTripsDiv = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;

`

export const TripDiv = styled.div`
    width: 40vh;
    border: 1px  solid #b399ff;
    border-image: linear-gradient(90deg, #b311ff, #b399ff 100%) 1;
    padding: 1vh 1vw;
    font-size: .8rem;
    justify-content: center;
    margin: 1vh 0;
    color: grey;
`

export const TitleItem = styled.p`
    color: #b399ff;
    display: inline-flex;
    margin: 0 0;
    font-weight: 500;
`
