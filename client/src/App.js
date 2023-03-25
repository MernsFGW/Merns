import React from 'react';
import { Home, IdeaDetail, Login, Register, About, Admin, Users, UserProfile, UserDashboard, UserPassword } from './page';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ideas/:id" element={<IdeaDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users/>}/>
        <Route path='/users/:id' element={<UserDashboard /> } />
        <Route path='/users/:id/profile' element={<UserProfile /> } />
        <Route path='/users/:id/changepassword' element={<UserPassword /> } />
      </Routes>
    </div>
  );
}

export default App;
