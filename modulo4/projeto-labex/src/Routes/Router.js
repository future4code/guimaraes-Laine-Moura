import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Router } from "react-router-dom";
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import HomePage from "../Pages/HomePage/HomePage";
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='login' element={<LoginPage/>} />
                <Route path='listTrips' element={<ListTripsPage/>} />
                <Route path='listTrips/applicationToTrip' element={<ApplicationFormPage/>} />
                <Route path='login/adminHomePage' element={<AdminHomePage/>} />
                <Route path='login/adminHomePage/createTrip' element={<CreateTripPage/>} />

            </Routes>
            <Routes>

            </Routes>
        </BrowserRouter>
    )
}

export default Router;