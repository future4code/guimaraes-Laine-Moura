import React from 'react'
import { useNavigate } from 'react-router-dom'
import useRequestData from '../../Hooks/UseRequestData'
import axios from 'axios'
import {url} from '../../App'
import { TripDiv, BtnDelTrip } from './StyledAdminHomePage'

export default function AdminHomePage() {

  const [listTrips, setListTrips] = useRequestData(`${url}/trips`)

  const navigate = useNavigate()


  const logout = () => localStorage.removeItem('token') 
  const goToHomePage = () => navigate('/')
  const createTrip = () => navigate('createTrip')
  const goToTripDetails = (tripId) => {
    const tripIdentif = tripId
      navigate(`/adminHomePage/${tripIdentif}`)
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
      .then((res) => navigate('adminHomePage'), setListTrips() )
      .catch((err) =>  navigate('adminHomePage'))
    }
  }

  return (
    <div>
    {listTrips?.trips.map((trip) => {
      return (
        <div onClick={() => goToTripDetails(trip.id)} key={trip.id}>
            <TripDiv> {trip.name} 
              <BtnDelTrip onClick={(e) => {
                e.stopPropagation();
                deleteTrip(trip)
              }}> x
            </BtnDelTrip>
          </TripDiv>

        </div>

      )
    })}

    <button onClick={goToHomePage}>Voltar</button>
    <button onClick={createTrip}>Criar Viagem</button>
    <button onClick={logout}>Logout</button>
  </div>
);
}
