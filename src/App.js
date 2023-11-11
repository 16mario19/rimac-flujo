import Formulario from './components/Formulario.js';
import Header from './components/Header.js';
import LoginInfo from './components/LoginAuxInfo.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='MainContent'>
        <LoginInfo></LoginInfo>      
        <Formulario></Formulario>
      </div>
    </div>
  );
}

export default App;
