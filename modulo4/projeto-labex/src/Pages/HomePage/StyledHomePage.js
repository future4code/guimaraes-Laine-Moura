import React from "react";
import styled from "styled-components";

export const StyledBody = styled.body`
    height: 100vh;
    background-image: url(https://images.pexels.com/photos/7736151/pexels-photo-7736151.jpeg?cs=srgb&dl=pexels-alexandre-p-junior-7736151.jpg&fm=jpg);
    background-size: cover;
    text-align: center;
    margin: 0 auto;
`

export const MainDiv = styled.div`
  display: grid;
  justify-self: center;
  align-self: center;
`
export const Title = styled.h1`
    font-size: 8em;
    margin: 20vh 0;
    color: #b399ff;
`

export const Btns = styled.button`
    width: fit-content;
    border: 1px solid #b399ff;
    display: flex;
    margin: 3vh auto 0;
    color: #b399ff;
    background: black;
    cursor: pointer;
`
