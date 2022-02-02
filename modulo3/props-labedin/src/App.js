import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1477701827848286240/XnNeDd66_400x400.jpg" 
          nome="Laíne" 
          descricao="Olá, sou a Laíne Moura. Formada em Geografia pela UERJ, em transição de carreira para a área de desenvolvimento WEB e aluna da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='small-card-container'>
        <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/512/2549/premium/2549872.png?token=exp=1643320053~hmac=1db3c4f401e2210ea58f6be12449e1d6"
        nome="email:"
        descricao="lalazinha@lalatube.com"
        />
      </div>
      <div className='small-card-container'>
        <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/512/2838/premium/2838912.png?token=exp=1643321008~hmac=a40d33052d4c5670494886f6a7facfe1"
        nome="endereço:"
        descricao="Rua dos Pinheiros"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="http://t0.gstatic.com/images?q=tbn:ANd9GcQ9u48pu-6IB2FnnYl_H-15le_g8Dkt5d5RN-VWiWIl_-dyJdaa" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
