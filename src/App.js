import './app.css';

import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Outcome from './components/Outcome/Outcome';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <>
      <div className='app_container'>
        <Header />
        <Body />

      <Footer />
      </div>
    </>
  );
}

export default App;

