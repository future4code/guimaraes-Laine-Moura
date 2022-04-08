import React from 'react'
import { useNavigate } from 'react-router-dom'
import useRequestData from '../../Hooks/UseRequest'
import axios from 'axios'
import {url} from '../../App'
import { TripDiv, BtnDelTrip, TrashcanImg, Btns } from './StyledAdminHomePage'
import { MainDiv } from './StyledAdminHomePage'

export default function AdminHomePage() {

  const [listTrips, setListTrips] = useRequestData(`${url}/trips`)

  const navigate = useNavigate()


  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  } 
  const goToHomePage = () => navigate('/')
  const createTrip = () => navigate('create')
  const goToTripDetails = (tripId) => {
    const tripIdentif = tripId
      navigate(`/admin/trips/${tripIdentif}`)
  } 

  const deleteTrip = (trip) => {
    
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    if(window.confirm('Deseja deletar a viagem?')) {
      axios
      .delete(`${url}/trips/${trip.id}`, headers)
      .then((res) => navigate('/admin/trips/list'), setListTrips() )
      .catch((err) =>  err.response)
    }
  }

  return (
      <MainDiv>
      {listTrips?.trips.map((trip) => {
        return (
          <div onClick={() => goToTripDetails(trip.id)} key={trip.id}>
              <TripDiv> {trip.name}
                <BtnDelTrip onClick={(e) => {
                  deleteTrip(trip)
                  navigate('/admin')
                  e.stopPropagation();
                }}>
                <TrashcanImg src='https://img.icons8.com/office/344/delete--v1.png'/>
              </BtnDelTrip>
            </TripDiv>
            <br/>
          </div>
        )
      })}
      <Btns onClick={goToHomePage}>Voltar</Btns>
      <Btns onClick={createTrip}>Criar Viagem</Btns>
      <Btns onClick={logout}>Logout</Btns>
        </MainDiv>
);
}
