import Formulario from './components/Formulario.js';
import Header from './components/Header.js';
import LoginInfo from './components/LoginAuxInfo.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='MainContent'>
        <div className='SideAuxInfo'>
          <LoginInfo/>      
        </div>
        <div className='MainForm'>
          <Formulario/>
        </div>
      </div>
    </div>
  );
}

export default App;
