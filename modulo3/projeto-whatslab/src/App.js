import './App.css';

function App() {
  return (
    <div className='body'>
      <form className='form-class'>
        <input type='text' className='user' placeholder='Usuário'/>
        <input type='text' className='msg' placeholder='Digite aqui sua mensagem'/>
        <button className='button-class'>Enviar</button>
      </form>

    </div>
  );
}

export default App;
