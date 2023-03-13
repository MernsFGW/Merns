import React from 'react';
import { Home, IdeaDetail, Login, Register, Admin } from './page';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/ideas/:id' element={<IdeaDetail />} />
        <Route path='/admin' element={<Admin />} />
        <Route
          path="/aboutus"
          element={<Navigate to="/aboutpage.html" />}
        />
      </Routes>
    </div>

  );
}

export default App;
