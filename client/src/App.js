import React from 'react';
import { Home, IdeaDetail, Login, Register, About, Admin, UserProfile } from './page';
import {
  Routes,
  Route
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
        <Route path="/about" element={<About />} />
        <Route path='/users/:id' element={<UserProfile /> } />
      </Routes>
    </div>

  );
}

export default App;
