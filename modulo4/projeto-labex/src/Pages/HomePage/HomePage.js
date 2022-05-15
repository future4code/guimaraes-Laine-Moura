import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledBody, MainDiv, Title, Btns } from './StyledHomePage';

const HomePage = () => {
  const navigate = useNavigate();

  const goToListTripsPage = () => {
    navigate('/trips/list');
  };

  const goToLoginPage = () => {
    navigate('/login');
    const token = localStorage.getItem('token');
    if (token === null) {
      navigate('/login');
    }
    else {
      navigate('/admin/trips/list');
    };
  };


  return (
    <StyledBody>
      <MainDiv>
        <Title>LabeX</Title>
        <Btns onClick={goToListTripsPage}>Ver Viagens</Btns>
        <Btns onClick={goToLoginPage}>Área de Administrador</Btns>
      </MainDiv>
    </StyledBody>
  );
};

export default HomePage;