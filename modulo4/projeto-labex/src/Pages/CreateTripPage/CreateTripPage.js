import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/UseForm';
import { planets } from '../../Constants/Planets';
import axios from 'axios';
import { url } from '../../App';
import { Btns } from '../AdminHomePage/StyledAdminHomePage';
import { MainDiv } from '../ListTripsPage/StyledListrips';


const CreatTripPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  const { form, onChange, cleanFields } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  });
  
  const creatTrip = (e) => {
    
    e.preventDefault();

    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      },
    };

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    };

      axios
        .post(`${url}/trips`, body, headers)
        .then((res) => alert('Viagem criada com sucesso!'))
        .catch((err) => err)

      cleanFields();
  };


  return (
    <div>
      <MainDiv>
        <h1> Criar Viagem</h1>
        <div>
          <form onSubmit={creatTrip}>
            <input
              name='name'
              value={form.name}
              onChange={onChange}
              placeholder={'Nome'}
              required
            />
            <select
              name='planet'
              value={form.planet}
              onChange={onChange}
              placeholder={'Escolha um Planeta'}
              required
            >
              <option value={''}>Escolha um Planeta</option>
              {planets.map((planets) => {
                return (
                  <option value={planets} key={planets}>
                    {planets}
                  </option>
                );
              })}
            </select>
            <input
              name='date'
              value={form.date}
              onChange={onChange}
              placeholder={'Data'}
              required
              type={'date'}
            />
            <input
              name='description'
              value={form.description}
              onChange={onChange}
              placeholder={'Descrição'}
              required
              pattern={'^.{10,}'}
              title={'Sua texto deve ter no mínimo 10 caracteres'}
            />
            <input
              name='durationInDays'
              value={form.durationInDays}
              onChange={onChange}
              placeholder={'Duração em dias'}
              required
              type={'number'}
              min={1}
            />
            <div>
          <Btns>Criar</Btns>
          <Btns onClick={goBack}>Voltar</Btns>
          </div>
        </form>
        </div>
        
      </MainDiv>
    </div>
  );
};

export default CreatTripPage;