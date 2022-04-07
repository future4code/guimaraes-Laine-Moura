import React from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../App";
import useRequestData from "../../Hooks/UseRequestData";
import {TitleItem} from './StyledListrips'


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

    <div>
      <h1>Lista De Viagens</h1>
      {listTrips?.trips.map((trip) => {
        return (
          <div>
            <p key={trip.id}> <TitleItem> Nome: </TitleItem> {trip.name}</p>
            <p> <TitleItem> Descrição: </TitleItem> {trip.description} </p>
            <p> <TitleItem> Planeta: </TitleItem> {trip.planet} </p>
            <p> <TitleItem> DUração em dias:</TitleItem> {trip.durationInDays}</p>
            <p> <TitleItem> Data:</TitleItem> {trip.date}</p>
            <br/>
          </div>
        )
      })}
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Increva-se</button>
    </div>
  )

}

export default ListTripsPage