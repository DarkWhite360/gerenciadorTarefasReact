import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import { Login } from './components/Login';
import Home from './Home';
import { ProtectedRoute } from './components/ProtectedRoute';



function App() {

  const [isAutenticated, setIsAutenticated] = useState(false);
  const [verificando, setVerificando] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    setIsAutenticated(!!token);
    setVerificando(false);
  }, [])

  if (verificando) {
    return <p>Carregando...</p>
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setIsAutenticated(false);
  }

  return (
    <BrowserRouter>
      {/*ROTAS PUBLICAS*/}
      <Routes>
        <Route
          path='/login'
          element=
          {
            isAutenticated ? (
              <Navigate to='/' replace />
            ) :
              <Login onLoginSucess={() => setIsAutenticated(true)} />
          }
        />

        {/*ROTAS PROTEGIDAS/PRIVADAS*/}

        <Route
          element={<ProtectedRoute isAutenticated={isAutenticated} />}
        >
          <Route
            path='/*'
            element={<Home onLogout={handleLogout} />}
          />
        </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
