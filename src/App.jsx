import { useState, useEffect } from 'react';
import './App.css';
import Loader from "./components/loader/Loader";
import ExtraContent from './components/ExtraContent/ExtraContent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <Header />
          <ToastContainer />
         <ExtraContent />
        </>
      ) : (
        <Loader />
      )}
     
    </>
  );
};

export default App;
