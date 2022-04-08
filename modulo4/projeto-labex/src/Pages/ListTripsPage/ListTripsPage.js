import React from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../App";
import useRequestData from "../../Hooks/UseRequest";
import {  MainDiv, TripDiv, AllTripsDiv } from "./StyledListrips";
import {TitleItem} from './StyledListrips'
import { Btns } from "../AdminHomePage/StyledAdminHomePage";


const ListTripsPage = () => {

  const [listTrips] = useRequestData(`${url}/trips`)

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const goToApplicationFormPage = () => {
    navigate("/trips/application")
  }



  return (

    <MainDiv>
        <h1>Lista De Viagens</h1>
        {listTrips?.trips.map((trip) => {
          return (
            <AllTripsDiv>
              <TripDiv>
                <p key={trip.id}> <TitleItem> Nome: </TitleItem> {trip.name}</p>
                <p> <TitleItem> Descrição: </TitleItem> {trip.description} </p>
                <p> <TitleItem> Planeta: </TitleItem> {trip.planet} </p>
                <p> <TitleItem> Dias de Viagem:</TitleItem> {trip.durationInDays}</p>
                <p> <TitleItem> Data:</TitleItem> {trip.date}</p>
                <br/>
              </TripDiv>
            </AllTripsDiv>
          )
        })}
        <Btns onClick={goBack}>Voltar</Btns>
        <Btns onClick={goToApplicationFormPage}>Increva-se</Btns>
    </MainDiv>
  )

}

export default ListTripsPage